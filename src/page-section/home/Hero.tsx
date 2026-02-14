"use client";

import HeroBackground from "@/src/component/HeroBackground";
import Typography from "@/src/component/Typography";
import Button from "@/src/component/Button";
import Icons from "@/src/component/Icons";
import Image from "next/image";
import Link from "next/link";

import Avatar1 from "@/src/assets/images/avatar-1.png";
import Avatar2 from "@/src/assets/images/avatar-2.png";
import Avatar3 from "@/src/assets/images/avatar-3.png";
import Avatar4 from "@/src/assets/images/avatar-4.png";

interface HeroProps {
  onScrollToTestimonials?: () => void;
}

export default function Hero({ onScrollToTestimonials }: HeroProps) {
  return (
    <HeroBackground>
      <div className="flex flex-col lg:flex-row justify-between items-start self-stretch gap-[8px]">
        {/* Text Section */}
        <div className="w-full order-2 lg:w-[70%] lg:order-1">
          <Typography
            as="div"
            color="#fff"
            size={72}
            sizeTablet={52}
            sizeMobile={40}
            weight={600}
            lineHeight={85}
            lineHeightTablet={64}
            lineHeightMobile={52}
            letterSpacing={-2.16}
            letterSpacingMobile={-1.2}
            noDarkMode
          >
            Leading Full-Suite
            <br />
            <span
              className="bg-gradient-to-r from-[#FFD700] via-[#FFC700] to-[#FFB300] bg-clip-text text-transparent"
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Business Advisory
            </span>
          </Typography>

          <Typography
            color="#fff"
            noDarkMode
            size={18}
            className="mt-[24px] lg:w-[60%]"
          >
            Expert accounting, audit, and tax advisory services for Malaysian
            businesses facing compliance issues, authority engagements, and
            complex financial requirements.
          </Typography>

          <Link href="/contact">
            <Button variant="primary" className="mt-[32px]">
              SCHEDULE CONSULTATION
            </Button>
          </Link>
        </div>

        {/* Avatar Section */}
      </div>

      {/* Stats for Mobile */}
      <div className="flex items-center gap-[40px] mt-[48px] lg:hidden">
        <div className="w-[180px]">
          <Typography color="#070707" size={40} weight={600} lineHeight={48}>
            100+
          </Typography>
          <Typography color="#070707" className="mt-[8px]">
            Companies Served
          </Typography>
        </div>
        <div className="w-[180px]">
          <Typography color="#070707" size={40} weight={600} lineHeight={48}>
            15+
          </Typography>
          <Typography color="#070707" className="mt-[8px]">
            Years Combined Experience
          </Typography>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-stretch lg:items-end self-stretch mt-[48px] lg:mt-[22px]">
        {/* Scroll Down */}
        <div
          className="hidden lg:flex justify-between items-center gap-[8px] text-[#070707] dark:text-white cursor-pointer"
          onClick={onScrollToTestimonials}
        >
          SCROLL DOWN <Icons name="arrowDown" className="w-5" />
        </div>

        {/* Portfolio + Stats */}
        <div className="relative flex flex-col justify-between items-end pt-[56px] lg:pt-0">
          {/* Desktop Stats */}
          <div className="hidden absolute left-0 top-[-650%] lg:flex items-center gap-[80px]">
            <div className="w-[180px]">
              <Typography
                color="#070707"
                size={40}
                weight={600}
                lineHeight={48}
              >
                100+
              </Typography>
              <Typography color="#070707" className="mt-[8px]">
                Companies Served
              </Typography>
            </div>
            <div className="w-[180px]">
              <Typography
                color="#070707"
                size={40}
                weight={600}
                lineHeight={48}
              >
                15+
              </Typography>
              <Typography color="#070707" className="mt-[8px]">
                Years Combined Experience
              </Typography>
            </div>
          </div>

          {/* Service Highlight */}
          <Link href="/services">
            <div className="flex justify-between items-center gap-[8px] text-[#070707] text-[14px] dark:text-[#fff] cursor-pointer">
              LEARN MORE <Icons name="arrowUpRight" className="w-5" />
            </div>
          </Link>
        </div>

        {/* Service Highlight Card */}
        <div className="flex items-end gap-[24px] w-[50%] md:w-auto">
          <div className="bg-white dark:bg-[#1D1D1D] p-[24px] rounded-[8px] w-full md:w-[270px]">
            <Typography color="#8D8D8D" noDarkMode size={12}>
              Critical Issue?
            </Typography>
            <Typography
              color="#070707"
              weight={600}
              className="mt-[8px]"
              size={18}
            >
              Authority Engagement Support
            </Typography>
            <Typography color="#8D8D8D" className="mt-[12px]" size={14}>
              We represent and support clients in engagements with SSM, LHDN,
              and regulatory bodies.
            </Typography>
          </div>
        </div>
      </div>
    </HeroBackground>
  );
}
