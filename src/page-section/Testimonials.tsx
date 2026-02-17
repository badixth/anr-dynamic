"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import gsap from "gsap";

import Image from "next/image";
import Icons from "@/src/component/Icons";
import Typography from "@/src/component/Typography";
import { testimonials } from "@/src/data/testimonials";

const AUTO_CYCLE_MS = 6000;
const PROGRESS_TICK = 50;
const DRAG_THRESHOLD = 50;

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isAnimatingRef = useRef(false);

  // Drag state
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragDeltaRef = useRef(0);

  // direction: -1 = going left (next), 1 = going right (prev), 0 = auto-loop default
  const animateToIndex = useCallback(
    (newIndex: number, direction: number = -1) => {
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;

      const slideOut = direction * 80; // drag left → exit left (-80), drag right → exit right (+80)
      const slideIn = direction * -80; // new content enters from the opposite side

      const tl = gsap.timeline();
      tl.to(contentRef.current, {
        opacity: 0,
        x: slideOut,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          indexRef.current = newIndex;
          setCurrentIndex(newIndex);
          gsap.set(contentRef.current, { x: slideIn, opacity: 0 });
          tl.to(contentRef.current, {
            opacity: 1,
            x: 0,
            duration: 0.35,
            ease: "power2.out",
            onComplete: () => {
              isAnimatingRef.current = false;
            },
          });
        },
      });
    },
    [],
  );

  const clearTimers = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (progressRef.current) {
      clearInterval(progressRef.current);
      progressRef.current = null;
    }
  }, []);

  const startAutoLoop = useCallback(() => {
    clearTimers();
    setProgress(0);

    progressRef.current = setInterval(() => {
      setProgress((p) => {
        const next = p + (PROGRESS_TICK / AUTO_CYCLE_MS) * 100;
        return next >= 100 ? 100 : next;
      });
    }, PROGRESS_TICK);

    timerRef.current = setInterval(() => {
      const nextIdx =
        indexRef.current === testimonials.length - 1 ? 0 : indexRef.current + 1;
      animateToIndex(nextIdx, -1);
      setProgress(0);
    }, AUTO_CYCLE_MS);
  }, [animateToIndex, clearTimers]);

  const goTo = useCallback(
    (idx: number, direction?: number) => {
      const dir = direction ?? (idx > indexRef.current ? -1 : 1);
      animateToIndex(idx, dir);
      startAutoLoop();
    },
    [animateToIndex, startAutoLoop],
  );

  const prev = useCallback(() => {
    const newIdx =
      indexRef.current === 0 ? testimonials.length - 1 : indexRef.current - 1;
    goTo(newIdx, 1);
  }, [goTo]);

  const next = useCallback(() => {
    const newIdx =
      indexRef.current === testimonials.length - 1 ? 0 : indexRef.current + 1;
    goTo(newIdx, -1);
  }, [goTo]);

  // Drag handlers
  const handleDragStart = useCallback(
    (clientX: number) => {
      if (isAnimatingRef.current) return;
      isDraggingRef.current = true;
      dragStartXRef.current = clientX;
      dragDeltaRef.current = 0;
      clearTimers();
    },
    [clearTimers],
  );

  const handleDragMove = useCallback((clientX: number) => {
    if (!isDraggingRef.current) return;
    dragDeltaRef.current = clientX - dragStartXRef.current;

    if (contentRef.current) {
      const clampedDelta = Math.max(-120, Math.min(120, dragDeltaRef.current));
      const opacity = 1 - Math.abs(clampedDelta) / 200;
      gsap.set(contentRef.current, {
        x: clampedDelta * 0.5,
        opacity: Math.max(0.4, opacity),
      });
    }
  }, []);

  const handleDragEnd = useCallback(() => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;

    const delta = dragDeltaRef.current;

    if (Math.abs(delta) > DRAG_THRESHOLD) {
      // Drag exceeded threshold — continue the momentum into a full transition
      const direction = delta < 0 ? -1 : 1; // -1 = dragged left (next), 1 = dragged right (prev)
      const newIdx =
        direction === -1
          ? indexRef.current === testimonials.length - 1
            ? 0
            : indexRef.current + 1
          : indexRef.current === 0
            ? testimonials.length - 1
            : indexRef.current - 1;

      // Content is already offset from drag — slide it out further in the same direction
      isAnimatingRef.current = true;
      gsap.to(contentRef.current, {
        x: direction * 120,
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          indexRef.current = newIdx;
          setCurrentIndex(newIdx);
          // New content enters from the opposite side
          gsap.set(contentRef.current, { x: direction * -80, opacity: 0 });
          gsap.to(contentRef.current, {
            x: 0,
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
            onComplete: () => {
              isAnimatingRef.current = false;
            },
          });
        },
      });
      startAutoLoop();
    } else {
      // Snap back to center
      if (contentRef.current) {
        gsap.to(contentRef.current, {
          x: 0,
          opacity: 1,
          duration: 0.25,
          ease: "power2.out",
        });
      }
      startAutoLoop();
    }
  }, [startAutoLoop]);

  // Mouse events
  const onMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      handleDragStart(e.clientX);
    },
    [handleDragStart],
  );

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      handleDragMove(e.clientX);
    },
    [handleDragMove],
  );

  const onMouseUp = useCallback(() => {
    handleDragEnd();
  }, [handleDragEnd]);

  const onMouseLeave = useCallback(() => {
    if (isDraggingRef.current) handleDragEnd();
  }, [handleDragEnd]);

  // Touch events
  const onTouchStart = useCallback(
    (e: React.TouchEvent) => {
      handleDragStart(e.touches[0].clientX);
    },
    [handleDragStart],
  );

  const onTouchMove = useCallback(
    (e: React.TouchEvent) => {
      handleDragMove(e.touches[0].clientX);
    },
    [handleDragMove],
  );

  const onTouchEnd = useCallback(() => {
    handleDragEnd();
  }, [handleDragEnd]);

  useEffect(() => {
    startAutoLoop();
    return clearTimers;
  }, [startAutoLoop, clearTimers]);

  const current = testimonials[currentIndex] ?? testimonials[0];

  return (
    <div className="bg-white dark:bg-[#070707] w-full px-[16px] md:px-[72px] py-[48px] md:py-[80px] flex flex-col items-center justify-center gap-[48px] md:gap-[64px]">
      <Typography
        as="div"
        size={40}
        sizeMobile={28}
        weight={700}
        lineHeight={48}
        lineHeightMobile={36}
        heading
      >
        Clients Testimony
      </Typography>

      <div className="relative w-full md:px-[32px] text-center">
        {/* Desktop arrows */}
        <button
          onClick={prev}
          className="hidden md:flex absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#0D0D0D] dark:bg-[#111111] border border-white/[0.06] hover:border-[#F2B611]/[0.3] rounded-full w-[48px] h-[48px] p-[10px] items-center justify-center text-white transition-colors duration-300 z-10"
        >
          <Icons name="arrowLeft" />
        </button>

        <button
          onClick={next}
          className="hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#0D0D0D] dark:bg-[#111111] border border-white/[0.06] hover:border-[#F2B611]/[0.3] rounded-full w-[48px] h-[48px] p-[10px] items-center justify-center text-white transition-colors duration-300 z-10"
        >
          <Icons name="arrowRight" />
        </button>

        {/* Draggable card */}
        <div
          ref={dragRef}
          className="w-full md:w-[70%] md:mx-auto cursor-grab active:cursor-grabbing select-none"
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="relative bg-[#0D0D0D] dark:bg-[#111111] border border-white/[0.06] rounded-[20px] md:rounded-[24px] px-[24px] md:px-[56px] py-[36px] md:py-[48px] overflow-hidden">
            {/* Subtle corner glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[1px] bg-gradient-to-r from-transparent via-[#F2B611]/[0.3] to-transparent" />

            <div ref={contentRef}>
              {/* Quotation mark */}
              <span className="block text-center text-[80px] md:text-[120px] leading-none text-[#F2B611]/[0.15] select-none pointer-events-none font-heading h-[40px] md:h-[60px]">
                &ldquo;
              </span>

              {/* 5 Star rating */}
              <div className="flex items-center justify-center gap-[4px] mt-[16px] mb-[24px] md:mb-[32px]">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#F2B611"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Message */}
              <Typography
                as="div"
                size={28}
                sizeTablet={24}
                sizeMobile={20}
                weight={600}
                lineHeight={40}
                lineHeightTablet={34}
                lineHeightMobile={30}
                heading
                color="#ffffff"
                noDarkMode
              >
                {current.message}
              </Typography>

              {/* Service badge */}
              <div className="mt-[24px] md:mt-[32px] inline-flex items-center gap-[8px]">
                <Typography
                  size={14}
                  weight={700}
                  color="#F2B611"
                  noDarkMode
                  className="uppercase tracking-wider"
                >
                  Service: {current.service}
                </Typography>
              </div>

              {/* Divider */}
              <div className="mt-[24px] md:mt-[32px] mx-auto w-[60px] h-[1px] bg-white/[0.08]" />

              {/* Author info */}
              <div className="mt-[24px] md:mt-[32px] flex flex-col items-center gap-[12px]">
                {current.avatar ? (
                  <Image
                    src={current.avatar}
                    alt={current.name}
                    width={52}
                    height={52}
                    className="w-11 md:w-13 h-11 md:h-13 rounded-full object-cover"
                  />
                ) : (
                  <div
                    className="w-11 md:w-13 h-11 md:h-13 rounded-full flex items-center justify-center bg-[#F2B611]/[0.12] border border-[#F2B611]/[0.25] text-[#F2B611] font-bold text-xl select-none"
                    style={{
                      minWidth: 44,
                      minHeight: 44,
                      maxWidth: 52,
                      maxHeight: 52,
                    }}
                    aria-label={current.name}
                  >
                    {current.name?.charAt(0)?.toUpperCase() || "?"}
                  </div>
                )}
                <div className="text-center">
                  <Typography size={16} sizeMobile={15} weight={700}>
                    {current.name}
                  </Typography>
                  <Typography
                    size={14}
                    sizeMobile={13}
                    weight={400}
                    color="#B4B4B4"
                    noDarkMode
                    className="mt-[4px]"
                  >
                    {current.role}, {current.company}
                  </Typography>
                </div>
              </div>

              {/* Mobile arrows */}
              <div className="w-full flex justify-center items-center gap-[24px] mt-[32px] md:hidden">
                <button
                  onMouseDown={(e) => e.stopPropagation()}
                  onTouchStart={(e) => e.stopPropagation()}
                  onClick={prev}
                  className="bg-[#0D0D0D] dark:bg-[#1A1A1A] border border-white/[0.06] rounded-full w-[36px] h-[36px] p-[8px] flex items-center justify-center text-white"
                >
                  <Icons name="arrowLeft" />
                </button>
                <button
                  onMouseDown={(e) => e.stopPropagation()}
                  onTouchStart={(e) => e.stopPropagation()}
                  onClick={next}
                  className="bg-[#0D0D0D] dark:bg-[#1A1A1A] border border-white/[0.06] rounded-full w-[36px] h-[36px] p-[8px] flex items-center justify-center text-white"
                >
                  <Icons name="arrowRight" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress indicators */}
      <div className="flex items-center gap-[8px]">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className="relative h-[4px] rounded-full overflow-hidden transition-all duration-300 cursor-pointer"
            style={{
              width: idx === currentIndex ? 48 : 12,
              backgroundColor:
                idx === currentIndex
                  ? "rgba(242, 182, 17, 0.2)"
                  : "rgba(255, 255, 255, 0.1)",
            }}
          >
            {idx === currentIndex && (
              <div
                className="absolute left-0 top-0 h-full bg-[#F2B611] rounded-full transition-none"
                style={{ width: `${progress}%` }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
