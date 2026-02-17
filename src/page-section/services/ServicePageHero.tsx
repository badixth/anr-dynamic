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
          {headline}
        </Typography>
        <Typography
          noDarkMode
          color="#F2B611"
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
          weight={700}
          className="mt-[24px] lg:w-[70%]"
        >
          {description}
        </Typography>
        <Link href={ctaLink}>
          <Button variant="primary" className="mt-[32px]">
            {ctaText}
          </Button>
        </Link>
      </div>
    </HeroBackground>
  );
}
