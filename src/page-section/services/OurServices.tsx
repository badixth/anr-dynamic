'use client';
import { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import { useTheme } from "@/src/context/ThemeProvider";

import Image from "next/image";
import Link from "next/link";
import Tag from "@/src/component/Tag";
import Typography from "@/src/component/Typography";

import Services1 from '@/src/assets/images/service-1.png';
import Services2 from '@/src/assets/images/service-2.png';
import Services3 from '@/src/assets/images/service-3.png';
import Services4 from '@/src/assets/images/service-4.png';
import Services5 from '@/src/assets/images/service-5.png';

export default function OurServices() {
    const { theme } = useTheme();
    const cardsRef = useRef<HTMLAnchorElement[]>([]);
    const themeRef = useRef(theme);

    useEffect(() => {
        themeRef.current = theme;
    }, [theme]);

    const handleMouseEnter = useCallback((card: HTMLElement) => {
        gsap.to(card, {
            backgroundColor: themeRef.current === "light" ? "#1D1D1D" : "#393939",
            padding: "24px 32px",
            borderRadius: "12px",
            duration: 0.5,
            ease: "power2.out",
        });
    }, []);

    const handleMouseLeave = useCallback((card: HTMLElement) => {
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
        const enterHandlers = new Map<HTMLElement, () => void>();
        const leaveHandlers = new Map<HTMLElement, () => void>();

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
            href: "/services/accounting-advisory",
            desc: "Comprehensive bookkeeping, payroll processing, financial reporting, management accounts, and cloud accounting implementation to maintain accurate financial records.",
        },
        {
            title: "Tax Advisory",
            image: Services2,
            href: "/services/tax-advisory",
            desc: "Tax planning, compliance filing, LHDN audit defense, E-Invoice registration, tax optimization strategies, and comprehensive correspondence with tax authorities.",
        },
        {
            title: "Audit & Assurance",
            image: Services3,
            href: "/services/audit-assurance",
            desc: "Statutory audit services, internal control evaluation, audit readiness preparation, and financial statement assurance meeting Malaysian regulatory standards.",
        },
        {
            title: "Corporate Advisory",
            image: Services4,
            href: "/services/corporate-erp",
            desc: "Business strategy consulting, SSM registration and conversions, mergers & acquisitions support, restructuring, and risk management advisory.",
        },
        {
            title: "ERP System Implementation",
            image: Services5,
            href: "/services/corporate-erp",
            desc: "Comprehensive ERP system implementation, business process automation, system integration, and digital transformation consulting for operational efficiency.",
        },
    ];

    return (
        <div className="bg-white dark:bg-[#070707] py-[48px] md:py-[80px] px-[8px] md:px-[12px] w-full">
            <div className="bg-[#070707] dark:bg-[#1D1D1D] rounded-[20px] py-[64px] px-[16px] md:p-[60px]">
                <div className="w-full flex flex-col items-center text-center gap-[24px]">
                    <div className="flex flex-col items-center gap-[24px]">
                        <Tag color="#fff">Our Services</Tag>
                        <Typography as="div" noDarkMode size={40} sizeMobile={26} weight={700} lineHeight={48} lineHeightMobile={34} color="#fff" heading>
                            Professional Services for Malaysian Business Compliance
                        </Typography>
                    </div>
                    <div className="flex flex-col items-center gap-[14px] max-w-[600px]">
                        <Typography size={14} noDarkMode color="#fff">
                            From financial record management to statutory audit and ERP implementation, we provide comprehensive solutions for every stage of your business journey.
                        </Typography>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-[51px] mt-[48px] md:mt-[64px]">
                    {services.map((service, idx) => (
                        <Link
                            key={idx}
                            href={service.href}
                            ref={(el) => {
                                if (el) cardsRef.current[idx] = el;
                            }}
                            className="flex flex-col lg:flex-row items-center justify-between w-full gap-[24px] cursor-pointer"
                            style={{ padding: 0, backgroundColor: "transparent", borderRadius: "12px" }}
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
                            <Image src={service.image} alt={service.title} className="w-full lg:w-[20rem] rounded-[20px] order-3 lg:order-2" />
                            <Typography
                                as="div"
                                size={14}
                                lineHeight={20}
                                noDarkMode
                                color="#fff"
                                className="w-full order-2 lg:w-[30%] lg:order-3"
                            >
                                {service.desc}
                            </Typography>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
