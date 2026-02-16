"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Typography from "@/src/component/Typography";
import Button from "@/src/component/Button";
import HeroBackground from "@/src/component/HeroBackground";

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
import Link from "next/link";

const images = [
  { src: Partner1, alt: "Partner1" },
  { src: Partner2, alt: "Partner2" },
  { src: Partner3, alt: "Partner3" },
  { src: Partner4, alt: "Partner4" },
  { src: Partner5, alt: "Partner5" },
  { src: Partner6, alt: "Partner6" },
];

export default function Hero() {
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
            sizeMobile={32}
            weight={600}
            lineHeight={76}
            lineHeightTablet={58}
            lineHeightMobile={42}
            letterSpacing={-2.16}
            letterSpacingMobile={-1.2}
            noDarkMode
            heading
          >
            Comprehensive Financial & Regulatory Compliance Services
          </Typography>
          <Typography
            noDarkMode
            color="#fff"
            size={18}
            className="mt-[24px] lg:w-[60%]"
          >
            Expert ERP, corporate advisory, financial reporting, accounting, and
            audit solutions designed to resolve compliance challenges and
            support business growth for Malaysian companies.
          </Typography>
          <Link href="/contact">
            <Button variant="primary" className="mt-[32px]">
              DISCUSS YOUR NEEDS
            </Button>
          </Link>
      </div>
      <div className="mt-[72px] md:mt-[100px] py-[48px] md:py-[60px] flex flex-col items-center gap-[32px]">
        <Typography
          as="div"
          size={16}
          weight={500}
          className="text-center px-[40px]"
        >
          Trusted by 100+ Malaysian Companies Across Multiple Industries
        </Typography>
        <div className="overflow-hidden w-full" ref={sliderRef}>
          <div className="flex items-center gap-20 slider-track">
            {[...images, ...images].map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                className="w-[30%] md:w-[20%] lg:w-[11%] flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </HeroBackground>
  );
}
