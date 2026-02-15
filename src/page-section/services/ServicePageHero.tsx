"use client";

import Typography from "@/src/component/Typography";
import Button from "@/src/component/Button";
import HeroBackground from "@/src/component/HeroBackground";
import Link from "next/link";
import Image from "next/image";
import Avatar1 from "@/src/assets/images/avatar-1.png";
import Avatar2 from "@/src/assets/images/avatar-2.png";
import Avatar3 from "@/src/assets/images/avatar-3.png";
import Avatar4 from "@/src/assets/images/avatar-4.png";

type ServicePageHeroProps = {
  headline: string;
  tagline: string;
  description: string;
  ctaText: string;
  ctaLink: string;
};

export default function ServicePageHero({
  headline,
  tagline,
  description,
  ctaText,
  ctaLink,
}: ServicePageHeroProps) {
  return (
    <HeroBackground>
      <div className="flex flex-col lg:flex-row justify-between items-start self-stretch gap-[8px]">
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
            heading
          >
            {headline}
          </Typography>
          <Typography
            noDarkMode
            color="#D4D4D4"
            size={20}
            sizeMobile={16}
            weight={600}
            className="mt-[16px]"
          >
            {tagline}
          </Typography>
          <Typography
            noDarkMode
            color="#fff"
            size={18}
            className="mt-[24px] w-full lg:w-[70%]"
          >
            {description}
          </Typography>
          <Link href={ctaLink}>
            <Button variant="primary" className="mt-[32px]">
              {ctaText}
            </Button>
          </Link>
        </div>
      </div>
    </HeroBackground>
  );
}
