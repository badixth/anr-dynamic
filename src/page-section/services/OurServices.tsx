'use client';
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useTheme } from "@/src/context/ThemeProvider";

import Image from "next/image";
import Icons from "@/src/component/Icons";
import Tag from "@/src/component/Tag";
import Typography from "@/src/component/Typography";

import Services1 from '@/src/assets/images/service-1.png';
import Services2 from '@/src/assets/images/service-2.png';
import Services3 from '@/src/assets/images/service-3.png';
import Services4 from '@/src/assets/images/service-4.png';
import Services5 from '@/src/assets/images/service-5.png';

export default function OurServices() {
    const { theme } = useTheme();
    const cardsRef = useRef<HTMLDivElement[]>([]);

    const services = [
        {
            title: "Accounting Advisory",
            image: Services1,
            desc: "Comprehensive bookkeeping, payroll processing, financial reporting, management accounts, and cloud accounting implementation to maintain accurate financial records.",
        },
        {
            title: "Tax Advisory",
            image: Services2,
            desc: "Tax planning, compliance filing, LHDN audit defense, E-Invoice registration, tax optimization strategies, and comprehensive correspondence with tax authorities.",
        },
        {
            title: "Audit & Assurance",
            image: Services3,
            desc: "Statutory audit services, internal control evaluation, audit readiness preparation, and financial statement assurance meeting Malaysian regulatory standards.",
        },
        {
            title: "Corporate Advisory",
            image: Services4,
            desc: "Business strategy consulting, SSM registration and conversions, mergers & acquisitions support, restructuring, and risk management advisory.",
        },
        {
            title: "ERP System Implementation",
            image: Services5,
            desc: "Comprehensive ERP system implementation, business process automation, system integration, and digital transformation consulting for operational efficiency.",
        },
    ];

    useEffect(() => {
        cardsRef.current.forEach((card) => {
            if (!card) return;

            card.addEventListener("mouseenter", () => {
                gsap.to(card, {
                    backgroundColor: theme === "light" ? "#1D1D1D" : "#393939",
                    padding: "24px 32px",
                    borderRadius: "12px",
                    duration: 0.5,
                    ease: "power2.out",
                });
            });

            card.addEventListener("mouseleave", () => {
                gsap.to(card, {
                    backgroundColor: "transparent",
                    padding: "0px",
                    borderRadius: "12px",
                    duration: 0.5,
                    ease: "power2.out",
                });
            });
        });
    }, [theme]);

    return (
        <div className="bg-white dark:bg-[#070707] py-[48px] md:py-[80px] px-[8px] md:px-[12px] w-full">
            <div className="bg-[#070707] dark:bg-[#1D1D1D] rounded-[20px] py-[64px] px-[16px] md:p-[60px]">
                <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end self-stretch gap-[16px]">
                    <div className="flex flex-col items-start gap-[24px]">
                        <Tag color="#fff">Our Services</Tag>
                        <Typography as="div" noDarkMode size={48} sizeMobile={32} weight={700} lineHeight={56} lineHeightMobile={41.6} color="#fff">
                            Professional Services for <br />
                            Malaysian Business Compliance
                        </Typography>
                    </div>
                    <div className="flex flex-col items-start gap-[48px] lg:gap-[14px] w-full lg:w-[35%]">
                        <Typography size={14} noDarkMode color="#fff">
                            From financial record management to statutory audit and ERP implementation, we provide comprehensive solutions for every stage of your business journey.
                        </Typography>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-[51px] mt-[48px] md:mt-[64px]">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            ref={(el) => {
                                if (el) cardsRef.current[idx] = el;
                            }}
                            className="flex flex-col lg:flex-row items-center justify-between w-full gap-[24px]"
                            style={{ padding: 0, backgroundColor: "transparent", borderRadius: "12px" }}
                        >
                            <Typography
                                as="div"
                                size={32}
                                sizeMobile={28}
                                weight={600}
                                lineHeight={40}
                                noDarkMode
                                color="#fff"
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
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
