"use client";

import { useRef, useState } from "react";
import gsap from "gsap";

import Image from "next/image";
import Icons from "@/src/component/Icons";
import Tag from "@/src/component/Tag";
import Typography from "@/src/component/Typography";
import { testimonials } from "@/src/data/testimonials";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const animateContent = () => {
    const tl = gsap.timeline();

    tl.to(contentRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.3,
      ease: "power1.out",
      onComplete: () => {
        tl.to(contentRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power1.out",
        });
      },
    });
  };

  const prev = () => {
    animateContent();
    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === 0 ? testimonials.length - 1 : prev - 1,
      );
    }, 300);
  };

  const next = () => {
    animateContent();
    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1,
      );
    }, 300);
  };

  const current = testimonials[currentIndex];

  return (
    <div className="bg-white dark:bg-[#070707] w-full px-[16px] md:px-[72px] py-[48px] md:py-[80px] flex flex-col items-center justify-center gap-[64px]">
      <Tag>
        <Typography size={14} sizeMobile={12} weight={500}>
          Client Testimonials
        </Typography>
      </Tag>

      <div className="relative w-full md:px-[32px] text-center">
        <button
          onClick={prev}
          className="hidden md:inline absolute left-4 top-1/2 transform -translate-y-1/2 bg-white border border-[#F2B611] rounded-full w-[48px] h-[48px] p-[10px] flex items-center justify-center dark:bg-[#070707] dark:text-[#fff]"
        >
          <Icons name="arrowLeft" />
        </button>

        <button
          onClick={next}
          className="hidden md:inline absolute right-4 top-1/2 transform -translate-y-1/2 bg-white border border-[#F2B611] rounded-full w-[48px] h-[48px] p-[10px] flex items-center justify-center dark:bg-[#070707] dark:text-[#fff]"
        >
          <Icons name="arrowRight" />
        </button>

        <div className="w-full md:w-[75%] md:mx-auto" ref={contentRef}>
          <p className="text-[24px] md:text-[40px] font-semibold text-[#070707] dark:text-[#fff] leading-[31.6px] md:leading-[48px] font-heading">
            {current.message}
          </p>

          <div className="mt-[48px] md:mt-[64px] flex flex-col md:flex-row items-center justify-center gap-[12px] md:gap-[20px]">
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
                className="w-11 md:w-13 h-11 md:h-13 rounded-full flex items-center justify-center bg-[#EEE] dark:bg-[#393939] text-[#070707] dark:text-white font-bold text-xl select-none"
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
            <div className="text-center md:text-left">
              <p className="font-bold text-[#070707] dark:text-[#fff] text-[16px] md:text-[20px]">
                {current.name}
              </p>
              <p className="text-[14px] md:text-[16px] text-[#070707] dark:text-[#fff]">
                {current.role}, {current.company}
              </p>
            </div>
          </div>

          <div className="w-full flex justify-center items-center gap-[24px] mt-[48px] md:hidden">
            <button
              onClick={prev}
              className="bg-white border border-[#F2B611] rounded-full w-[32px] h-[32px] p-[8px] flex items-center justify-center dark:bg-[#070707] dark:text-[#fff]"
            >
              <Icons name="arrowLeft" />
            </button>

            <button
              onClick={next}
              className="bg-white border border-[#F2B611] rounded-full w-[32px] h-[32px] p-[8px] flex items-center justify-center dark:bg-[#070707] dark:text-[#fff]"
            >
              <Icons name="arrowRight" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
