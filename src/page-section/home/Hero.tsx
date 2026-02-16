"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

import HeroBackground from "@/src/component/HeroBackground";
import Typography from "@/src/component/Typography";
import Button from "@/src/component/Button";

import Avatar1 from "@/src/assets/images/avatar-1.png";
import Avatar2 from "@/src/assets/images/avatar-2.png";
import Avatar3 from "@/src/assets/images/avatar-3.png";
import Avatar4 from "@/src/assets/images/avatar-4.png";
import Partner1 from "@/src/assets/images/Partners-1.png";
import Partner2 from "@/src/assets/images/Partners-2.png";
import Partner3 from "@/src/assets/images/Partners-3.png";
import Partner4 from "@/src/assets/images/Partners-4.png";
import Partner5 from "@/src/assets/images/Partners-5.png";
import Partner6 from "@/src/assets/images/Partners-6.png";

const partnerImages = [
  {
    src: Partner1,
    alt: "Subaidah Holding Sdn. Bhd.",
    name: "Subaidah Holding Sdn. Bhd.",
  },
  { src: Partner2, alt: "Pug3gold Sdn. Bhd.", name: "Pug3gold Sdn. Bhd." },
  {
    src: Partner3,
    alt: "Thoyyib Global Berhad",
    name: "Thoyyib Global Berhad",
  },
  {
    src: Partner4,
    alt: "Baqarah Farms Ventures",
    name: "Baqarah Farms Ventures",
  },
  { src: Partner5, alt: "Fiarina Sdn. Bhd.", name: "Fiarina Sdn. Bhd." },
  { src: Partner6, alt: "TFX Islamic", name: "TFX Islamic" },
];

interface HeroProps {
  onScrollToTestimonials?: () => void;
}

export default function Hero({ onScrollToTestimonials }: HeroProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sliderRef.current) return;

    const wrapper = sliderRef.current.querySelector(
      ".slider-track",
    ) as HTMLDivElement;
    if (!wrapper) return;

    const totalWidth = wrapper.scrollWidth / 2;
    gsap.to(wrapper, {
      x: `-=${totalWidth}`,
      duration: 20,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: (x) => {
          const current = parseFloat(x);
          return (current % totalWidth) + "px";
        },
      },
    });
  }, []);

  return (
    <HeroBackground>
      <div className="w-full lg:w-[70%] lg:mx-auto flex flex-col items-center text-center self-stretch">
        <Typography
          as="div"
          color="#fff"
          size={64}
          sizeTablet={48}
          sizeMobile={48}
          weight={600}
          lineHeight={76}
          lineHeightTablet={58}
          lineHeightMobile={50}
          letterSpacing={-2.16}
          letterSpacingMobile={-1.2}
          noDarkMode
          heading
        >
          Leading
          <br className="md:hidden" /> Full-Suite
          <br />
          <span
            className="bg-gradient-to-r from-[#FFD700] via-[#FFC700] to-[#FFB300] bg-clip-text text-transparent"
            style={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Business <br className="md:hidden" /> Advisory
          </span>
        </Typography>

        <Typography
          color="#E0E0E0"
          noDarkMode
          size={18}
          weight={700}
          className="mt-[24px] lg:w-[45%] text-balance "
        >
          Your Trusted Partner in Accounting, Audit & Regulatory Compliance and
          Tax Advisory.
          <br />
          <br />
          We help companies resolve issues with authorities,
          <br className="hidden " />
          strengthen compliance, and move forward with confidence.
        </Typography>

        <Link href="/contact">
          <Button variant="primary" className="mt-[32px]">
            SCHEDULE CONSULTATION
          </Button>
        </Link>
      </div>

      {/* Partner Logos */}
      <div className="mt-[60px] py-[48px] md:py-[60px] flex flex-col items-center gap-[32px]">
        <Typography
          as="div"
          size={20}
          sizeTablet={18}
          sizeMobile={16}
          weight={400}
          className="text-center px-[40px]"
        >
          Join over 100+ companies that trust{" "}
          <span className="text-[#F2B611]">ANR</span> Dynamic Ventures
        </Typography>
        <div className="overflow-hidden w-full" ref={sliderRef}>
          <div className="flex items-center gap-20 slider-track">
            {[...partnerImages, ...partnerImages].map((image, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-[10px] flex-shrink-0 w-[30%] md:w-[20%] lg:w-[11%]"
              >
                <Image src={image.src} alt={image.alt} className="w-full" />
                <Typography
                  size={13}
                  sizeMobile={11}
                  weight={500}
                  color="#999"
                  noDarkMode
                  className="whitespace-nowrap"
                >
                  {image.name}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </HeroBackground>
  );
}
