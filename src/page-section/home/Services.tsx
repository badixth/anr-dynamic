"use client";

import { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import { useTheme } from "@/src/context/ThemeProvider";
import Link from "next/link";

import Image from "next/image";
import Icons from "@/src/component/Icons";
import Typography from "@/src/component/Typography";

import Services1 from "@/src/assets/images/service-1.png";
import Services2 from "@/src/assets/images/service-2.png";
import Services3 from "@/src/assets/images/service-3.png";
import Services4 from "@/src/assets/images/service-4.png";
import Services5 from "@/src/assets/images/service-5.png";

export default function Services() {
  const { theme } = useTheme();
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const themeRef = useRef(theme);

  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  const handleMouseEnter = useCallback((card: HTMLDivElement) => {
    gsap.to(card, {
      backgroundColor: themeRef.current === "light" ? "#1D1D1D" : "#393939",
      padding: "24px 32px",
      borderRadius: "12px",
      duration: 0.5,
      ease: "power2.out",
    });
  }, []);

  const handleMouseLeave = useCallback((card: HTMLDivElement) => {
    gsap.to(card, {
      backgroundColor: "transparent",
      padding: "0px",
      borderRadius: "12px",
      duration: 0.5,
      ease: "power2.out",
    });
  }, []);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);
    const enterHandlers = new Map<HTMLDivElement, () => void>();
    const leaveHandlers = new Map<HTMLDivElement, () => void>();

    cards.forEach((card) => {
      const onEnter = () => handleMouseEnter(card);
      const onLeave = () => handleMouseLeave(card);
      enterHandlers.set(card, onEnter);
      leaveHandlers.set(card, onLeave);
      card.addEventListener("mouseenter", onEnter);
      card.addEventListener("mouseleave", onLeave);
    });

    return () => {
      cards.forEach((card) => {
        const onEnter = enterHandlers.get(card);
        const onLeave = leaveHandlers.get(card);
        if (onEnter) card.removeEventListener("mouseenter", onEnter);
        if (onLeave) card.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [handleMouseEnter, handleMouseLeave]);

  const services = [
    {
      title: "Accounting Advisory",
      image: Services1,
      desc: "Our team provide professional, cost-effective accounting solutions. We manage financial records, reporting, and compliance so you can focus on growth.",
      link: "/services/accounting-advisory",
    },
    {
      title: "Audit Advisory & Compliance Assurance",
      image: Services3,
      desc: "Our team help organisations meet statutory requirements, enhance investor confidence, and maintain trust with stakeholders.",
      link: "/services/audit-assurance",
    },
    {
      title: "Tax Advisory",
      image: Services2,
      desc: "Our tax advisory services are designed to help businesses remain fully compliant while optimising their tax position within the framework of Malaysian law.",
      link: "/services/tax-advisory",
    },
    {
      title: "Financial Reporting & Compliance",
      image: Services2,
      desc: "Our team ensures your business meets regulatory standards, mitigates risk, and maintains stakeholder confidence.",
      link: "/services/financial-reporting",
    },
    {
      title: "Corporate Advisory Services",
      image: Services4,
      desc: "Our Corporate Advisory services help businesses navigate complex decisions, optimise performance, and unlock growth opportunities.",
      link: "/services/corporate-advisory",
    },
    {
      title: "Enterprise Resource Planning (ERP)",
      image: Services5,
      desc: "Our ERP solutions help businesses streamline operations, integrate key processes, and gain real-time visibility across finance, inventory, HR, and more - all in one unified platform.",
      link: "/services/erp",
    },
  ];

  return (
    <div className="bg-white dark:bg-[#070707] py-[48px] md:py-[80px] px-[8px] md:px-[12px] w-full">
      <div className="bg-[#070707] dark:bg-[#1D1D1D] rounded-[20px] py-[64px] px-[16px] md:p-[60px]">
        <div className="w-full flex flex-col items-center text-center gap-[24px]">
          <div className="flex flex-col items-center gap-[24px]">
            <Typography
              as="div"
              noDarkMode
              size={40}
              sizeMobile={28}
              weight={700}
              lineHeight={48}
              lineHeightMobile={36}
              heading
            >
              Our Services
            </Typography>
          </div>
          <div className="flex flex-col items-center gap-[14px]">
            <Typography size={16} sizeMobile={16} noDarkMode color="#fff">
              From financial record management to statutory audit and ERP
              implementation, we provide comprehensive solutions for every stage
              of your business journey.
            </Typography>
            <div className="flex gap-[8px] cursor-pointer">
              <Link href="/services">
                <Typography size={16} weight={500} noDarkMode color="#fff">
                  EXPLORE ALL SERVICES
                </Typography>
              </Link>
              <Icons name="arrowRight" className="w-5" color="#fff" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-[51px] mt-[48px] md:mt-[64px]">
          {services.map((service, idx) => (
            <Link key={idx} href={service.link} className="w-full">
              <div
                ref={(el) => {
                  if (el) cardsRef.current[idx] = el;
                }}
                className="flex flex-col lg:flex-row items-center justify-between w-full gap-[24px] cursor-pointer transition-opacity hover:opacity-90"
                style={{
                  padding: 0,
                  backgroundColor: "transparent",
                  borderRadius: "12px",
                }}
              >
                <Typography
                  as="div"
                  size={32}
                  sizeMobile={28}
                  weight={600}
                  lineHeight={40}
                  noDarkMode
                  color="#F2B611"
                  heading
                  className="w-full lg:w-[25%]"
                >
                  {service.title}
                </Typography>
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full lg:w-[20rem] rounded-[20px] order-3 lg:order-2"
                />
                <Typography
                  as="div"
                  size={16}
                  sizeMobile={16}
                  lineHeight={24}
                  noDarkMode
                  color="#fff"
                  className="w-full order-2 lg:w-[30%] lg:order-3"
                >
                  {service.desc}
                </Typography>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
