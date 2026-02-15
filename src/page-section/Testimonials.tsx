"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import gsap from "gsap";

import Image from "next/image";
import Icons from "@/src/component/Icons";
import Tag from "@/src/component/Tag";
import Typography from "@/src/component/Typography";
import { testimonials } from "@/src/data/testimonials";

const AUTO_CYCLE_MS = 6000;

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const animateAndGo = useCallback(
    (newIndex: number) => {
      const tl = gsap.timeline();
      tl.to(contentRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.25,
        ease: "power1.out",
        onComplete: () => {
          setCurrentIndex(newIndex);
          tl.to(contentRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.25,
            ease: "power1.out",
          });
        },
      });
    },
    [],
  );

  const goTo = useCallback(
    (idx: number) => {
      animateAndGo(idx);
      setProgress(0);
      // restart auto-cycle
      if (timerRef.current) clearInterval(timerRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
      startAutoLoop();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const prev = useCallback(() => {
    const newIdx =
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    goTo(newIdx);
  }, [currentIndex, goTo]);

  const next = useCallback(() => {
    const newIdx =
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    goTo(newIdx);
  }, [currentIndex, goTo]);

  function startAutoLoop() {
    const progressTick = 50;
    progressRef.current = setInterval(() => {
      setProgress((p) => {
        const next = p + (progressTick / AUTO_CYCLE_MS) * 100;
        return next >= 100 ? 100 : next;
      });
    }, progressTick);

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const newIdx = prev === testimonials.length - 1 ? 0 : prev + 1;
        animateAndGo(newIdx);
        return prev; // animateAndGo sets it
      });
      setProgress(0);
    }, AUTO_CYCLE_MS);
  }

  useEffect(() => {
    startAutoLoop();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const current = testimonials[currentIndex];

  return (
    <div className="bg-white dark:bg-[#070707] w-full px-[16px] md:px-[72px] py-[48px] md:py-[80px] flex flex-col items-center justify-center gap-[48px] md:gap-[64px]">
      <Tag>
        <Typography size={14} sizeMobile={12} weight={500}>
          Client Testimonials
        </Typography>
      </Tag>

      <div className="relative w-full md:px-[32px] text-center">
        {/* Desktop arrows */}
        <button
          onClick={prev}
          className="hidden md:flex absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#0D0D0D] dark:bg-[#111111] border border-white/[0.06] hover:border-[#F2B611]/[0.3] rounded-full w-[48px] h-[48px] p-[10px] items-center justify-center text-white transition-colors duration-300"
        >
          <Icons name="arrowLeft" />
        </button>

        <button
          onClick={next}
          className="hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#0D0D0D] dark:bg-[#111111] border border-white/[0.06] hover:border-[#F2B611]/[0.3] rounded-full w-[48px] h-[48px] p-[10px] items-center justify-center text-white transition-colors duration-300"
        >
          <Icons name="arrowRight" />
        </button>

        <div
          className="w-full md:w-[70%] md:mx-auto relative"
          ref={contentRef}
        >
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

          {/* Author info */}
          <div className="mt-[32px] md:mt-[40px] flex flex-col items-center gap-[12px]">
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
              onClick={prev}
              className="bg-[#0D0D0D] border border-white/[0.06] rounded-full w-[36px] h-[36px] p-[8px] flex items-center justify-center text-white"
            >
              <Icons name="arrowLeft" />
            </button>
            <button
              onClick={next}
              className="bg-[#0D0D0D] border border-white/[0.06] rounded-full w-[36px] h-[36px] p-[8px] flex items-center justify-center text-white"
            >
              <Icons name="arrowRight" />
            </button>
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
