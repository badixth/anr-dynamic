"use client";

import React, { useRef, useState, useEffect } from "react";
import type { StaticImageData } from "next/image";
import { gsap } from "gsap";
import Image from "next/image";
import Icons from "./Icons";
import Typography from "./Typography";

export type member = {
    name: string;
    experience: string;
    image: StaticImageData;
    position: string;
    description?: string;
};

interface CarouselProps {
    items: member[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);
    const [visibleCount, setVisibleCount] = useState(1);

    const totalItems = items.length;

    const handleNext = () => {
        if (currentIndex < totalItems - visibleCount) {
            const newIndex = currentIndex + 1;
            setCurrentIndex(newIndex);
            slideTo(newIndex);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            const newIndex = currentIndex - 1;
            setCurrentIndex(newIndex);
            slideTo(newIndex);
        }
    };

    const slideTo = (index: number) => {
        let widthContent = 290
        if (window.innerWidth > 768) {
            widthContent = 310
        }
        const xOffset = -index * widthContent - index * 24;
        gsap.to(sliderRef.current, {
            x: xOffset,
            duration: 0.5,
            ease: "power2.out",
        });
    };

    const updateVisibleCount = () => {
        const width = window.innerWidth;
        if (width < 640) setVisibleCount(1);
        else if (width < 1024) setVisibleCount(3);
        else setVisibleCount(4);
    };

    useEffect(() => {
        updateVisibleCount();
        window.addEventListener("resize", updateVisibleCount);
        return () => window.removeEventListener("resize", updateVisibleCount);
    }, []);

    return (
        <div>
            <div className="relative overflow-hidden w-full">
                <div ref={sliderRef} className="flex gap-[24px] w-max">
                    {items.map((member, index) => (
                        <div
                            key={`member_${index}`}
                            className="flex flex-col items-start gap-[12px] w-[290px] md:w-[310px] flex-shrink-0 group"
                        >
                            <div className="relative bg-[#EEE] dark:bg-[#1D1D1D] rounded-[12px] overflow-hidden">
                                <div className="absolute left-3 top-3 flex items-center gap-[4px] bg-gradient-to-r from-[#F2B611] to-[#D4A017] text-white text-[12px] px-[10px] py-[6px] rounded-full z-10 transition-opacity duration-300 group-hover:opacity-0">
                                    <Icons name="starsSparkle" className="w-3" /> {member.position}
                                </div>
                                <Image src={member.image} alt={`member_${index}`} className="transition-transform duration-500 group-hover:scale-110" />

                                {/* Hover Overlay */}
                                {member.description && (
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#F2B611] via-[#F2B611]/95 to-[#F2B611]/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-[20px] translate-y-full group-hover:translate-y-0">
                                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                            <Typography size={14} weight={600} color="#fff" noDarkMode className="mb-[8px]">
                                                {member.position}
                                            </Typography>
                                            <Typography size={12} lineHeight={18} color="#fff" noDarkMode className="opacity-90">
                                                {member.description}
                                            </Typography>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div>
                                <Typography size={20} weight={700}>
                                    {member.name}
                                </Typography>
                                <Typography weight={500} className="text-[#8D8D8D] dark:text-[#8D8D8D]">{member.experience}</Typography>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-[48px] md:mt-[80px] w-full flex items-center justify-center gap-[24px]">
                <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className="transform -translate-y-1/2 bg-white border border-[#F2B611] rounded-full w-[32px] md:w-[48px] h-[32px] md:h-[48px] p-[8px] md:p-[10px] flex items-center justify-center dark:bg-[#070707] dark:text-[#fff] disabled:opacity-30"
                >
                    <Icons name="arrowLeft" />
                </button>
                <button
                    onClick={handleNext}
                    disabled={currentIndex === totalItems - visibleCount}
                    className="transform -translate-y-1/2 bg-white border border-[#F2B611] rounded-full w-[32px] md:w-[48px] h-[32px] md:h-[48px] p-[8px] md:p-[10px] flex items-center justify-center dark:bg-[#070707] dark:text-[#fff] disabled:opacity-30"
                >
                    <Icons name="arrowRight" />
                </button>
            </div>
        </div>
    );
};

export default Carousel;
