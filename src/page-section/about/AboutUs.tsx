"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "@/src/context/ThemeProvider";

import Tag from "@/src/component/Tag";
import Typography from "@/src/component/Typography";
import Icons from "@/src/component/Icons";

export default function AboutUs() {
  const { theme } = useTheme();

  const heroText =
    "ANR Dynamic Ventures Sdn Bhd is a specialized accounting, audit, and tax advisory firm dedicated to helping Malaysian businesses navigate complex regulatory requirements and resolve critical financial compliance matters with accuracy, integrity, and expert guidance.";

  const advisoryServices = [
    "Mergers and acquisitions",
    "Business valuation",
    "Business turnaround and optimisation planning",
    "Grants and incentives application",
    "LHDN tax regularisation and negotiation",
    "SSM compliance and rectification",
  ];

  const descAboutUsRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  useEffect(() => {
    if (!descAboutUsRef.current) return;

    const words = descAboutUsRef.current.querySelectorAll("span");

    triggersRef.current.forEach((t) => t.kill());
    triggersRef.current = [];

    gsap.set(words, { opacity: 1, color: "#B4B4B4" });

    const tween = gsap.to(words, {
      opacity: 1,
      color: theme === "light" ? "#070707" : "#fff",
      stagger: 0.08,
      scrollTrigger: {
        trigger: descAboutUsRef.current,
        start: "top 70%",
        end: "bottom 30%",
        scrub: 1,
      },
    });

    if (tween.scrollTrigger) {
      triggersRef.current.push(tween.scrollTrigger);
    }

    ScrollTrigger.refresh();

    return () => {
      triggersRef.current.forEach((t) => t.kill());
      triggersRef.current = [];
    };
  }, [theme]);

  const words = heroText.split(" ");

  return (
    <div className="bg-white dark:bg-[#070707] w-full px-[20px] md:px-[72px] py-[48px] md:py-[80px] flex flex-col items-center gap-[24px]">
      <Tag>
        <Typography size={14} sizeMobile={12} weight={500}>
          About Us
        </Typography>
      </Tag>

      {/* Animated hero paragraph */}
      <div className="w-full md:w-[75%] text-center">
        <div
          ref={descAboutUsRef}
          className="text-[22px] md:text-[32px] font-semibold leading-[30px] md:leading-[42px] font-heading"
          style={{ whiteSpace: "pre-wrap" }}
        >
          {words.map((word, index) => (
            <span key={index} className="inline-block mr-[0.3em]">
              {word}
            </span>
          ))}
        </div>
      </div>

      {/* Content sections below */}
      <div className="w-full max-w-[1100px] mt-[32px] md:mt-[56px] flex flex-col gap-[32px]">
        {/* Proprietary software + cost savings highlight */}
        <div className="bg-[#0D0D0D] dark:bg-[#111111] rounded-[16px] p-[32px] md:p-[40px] flex flex-col md:flex-row items-start gap-[24px] md:gap-[40px] border border-white/[0.06]">
          <div className="flex-shrink-0 flex flex-col items-center gap-[8px]">
            <div className="text-[#F2B611] text-[48px] md:text-[56px] font-bold leading-none font-heading">
              10–20%
            </div>
            <Typography
              size={13}
              weight={600}
              color="#F2B611"
              noDarkMode
              className="uppercase tracking-wider"
            >
              Cost Savings
            </Typography>
          </div>
          <div className="flex flex-col gap-[12px]">
            <Typography
              size={20}
              sizeMobile={18}
              weight={700}
              color="#fff"
              noDarkMode
              heading
            >
              Proprietary In-House Technology
            </Typography>
            <Typography size={15} lineHeight={24} color="#B4B4B4" noDarkMode>
              We leverage our proprietary in-house software to deliver
              efficient, reliable solutions that not only address compliance
              issues promptly but also provide cost savings of approximately
              10–20% compared to prevailing market fees.
            </Typography>
          </div>
        </div>

        {/* Corporate advisory services */}
        <div className="bg-[#F5F5F5] dark:bg-[#111111] rounded-[16px] p-[32px] md:p-[40px] border border-transparent dark:border-white/[0.06]">
          <Typography
            size={20}
            sizeMobile={18}
            weight={700}
            heading
            className="mb-[8px]"
          >
            Beyond Our Core Services
          </Typography>
          <Typography
            size={15}
            lineHeight={24}
            color="#666666"
            darkColor="#B4B4B4"
            noDarkMode
            className="mb-[24px]"
          >
            We offer comprehensive corporate advisory support including:
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px]">
            {advisoryServices.map((service, idx) => (
              <div key={idx} className="flex items-center gap-[12px]">
                <div className="flex-shrink-0">
                  <Icons
                    name="check"
                    className="w-[18px] h-[18px]"
                    color="#F2B611"
                  />
                </div>
                <Typography size={15} weight={500} lineHeight={22}>
                  {service}
                </Typography>
              </div>
            ))}
          </div>
        </div>

        {/* Closing commitment */}
        <div className="text-center px-[8px] md:px-[40px]">
          <Typography
            size={17}
            sizeMobile={15}
            lineHeight={28}
            lineHeightMobile={24}
            weight={500}
            color="#666666"
            darkColor="#B4B4B4"
            noDarkMode
            className="italic"
          >
            We are committed to delivering practical, strategic, and
            results-driven solutions, and we welcome businesses seeking a
            trusted partner to strengthen their financial governance and
            long-term growth.
          </Typography>
        </div>
      </div>
    </div>
  );
}
