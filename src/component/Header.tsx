"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import Navigation from "./Navigation";
import LogoImg from "@/src/assets/images/Logo.png";
import Image from "next/image";
import Icons from "./Icons";

interface HeaderProps {
  mobileOpen: boolean;
  onOpenMobileNav?: () => void;
}

export default function Header({
  mobileOpen = false,
  onOpenMobileNav,
}: HeaderProps) {
  const [hasScrolled, setHasScrolled] = useState(false);

  const topBar = useRef<HTMLDivElement>(null);
  const midBar = useRef<HTMLDivElement>(null);
  const botBar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mobileOpen) {
      gsap.to(topBar.current, { rotate: 45, y: 8, duration: 0.3 });
      gsap.to(midBar.current, { opacity: 0, duration: 0.3 });
      gsap.to(botBar.current, { rotate: -45, y: -6, duration: 0.3 });
    } else {
      gsap.to(topBar.current, { rotate: 0, y: 0, duration: 0.3 });
      gsap.to(midBar.current, { opacity: 1, duration: 0.3 });
      gsap.to(botBar.current, { rotate: 0, y: 0, duration: 0.3 });
    }
  }, [mobileOpen]);

  useEffect(() => {
    const onScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 z-20 left-0 w-full h-[10dvh] px-[20px] md:px-[72px] md:py-[32px] flex justify-between items-center transition-colors duration-300
      ${hasScrolled ? "bg-[#070707]" : ""}
    `}
    >
      {/* Logo */}
      <Link href="/" className="cursor-pointer flex justify-start items-center">
        <Image
          src={LogoImg}
          alt="ANR Dynamic Ventures"
          className="w-[200px] sm:w-[200px] md:w-[220px] lg:w-[220px] h-auto"
          priority
        />
      </Link>

      {/* Navigation */}
      <Navigation />

      {/* Desktop CTA */}
      <div className="hidden lg:flex justify-between items-center gap-[32px]">
        <Link
          href="/contact"
          className="flex justify-between items-center gap-[8px] text-white cursor-pointer"
        >
          SCHEDULE CONSULTATION <Icons name="arrowRight" className="w-5" />
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="flex items-center gap-[24px] lg:hidden">
        <div
          className="flex justify-center items-center w-[10%] cursor-pointer"
          onClick={onOpenMobileNav}
        >
          <div className="relative w-7 h-4 flex flex-col justify-center items-center">
            <div
              ref={topBar}
              className="absolute w-6 h-[2px] bg-white rounded top-0 transition-all"
            />
            <div
              ref={midBar}
              className="absolute w-6 h-[2px] bg-white rounded top-1/2 -translate-y-1/2 transition-all"
            />
            <div
              ref={botBar}
              className="absolute w-6 h-[2px] bg-white rounded bottom-0 transition-all"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
