"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Image from "next/image";
import Typography from "@/src/component/Typography";

import Partner1 from "@/src/assets/images/Partners-1.png"
import Partner2 from "@/src/assets/images/Partners-2.png"
import Partner3 from "@/src/assets/images/Partners-3.png"
import Partner4 from "@/src/assets/images/Partners-4.png"
import Partner5 from "@/src/assets/images/Partners-5.png"

const images = [
    { src: Partner1, alt: "Fiarina Sdn. Bhd.", name: "Fiarina Sdn. Bhd." },
    { src: Partner2, alt: "Subaidah Holding Sdn. Bhd.", name: "Subaidah Holding Sdn. Bhd." },
    { src: Partner3, alt: "TFX Islamic", name: "TFX Islamic" },
    { src: Partner4, alt: "Thoyyib Global Berhad", name: "Thoyyib Global Berhad" },
    { src: Partner5, alt: "Baqarah Farms Ventures", name: "Baqarah Farms Ventures" },
];

export default function LogoPartners() {
    const sliderRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!sliderRef.current) return;

        const wrapper = sliderRef.current.querySelector(".slider-track") as HTMLDivElement;
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
        <div className="bg-white dark:bg-[#070707] py-[48px] md:py-[60px] flex flex-col items-center gap-[32px]">
            <Typography as="div" size={16} weight={500} className="text-center px-[40px]">Trusted by 100+ Malaysian Companies Across Multiple Industries</Typography>
            <div className="overflow-hidden w-full" ref={sliderRef}>
                <div className="flex items-center gap-20 slider-track">
                    {[...images, ...images].map((image, index) => (
                        <div key={index} className="flex flex-col items-center gap-[10px] flex-shrink-0 w-[35%] md:w-[14%]">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                className="w-full"
                            />
                            <Typography size={13} sizeMobile={11} weight={500} color="#888" noDarkMode darkColor="#777" className="whitespace-nowrap">
                                {image.name}
                            </Typography>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}
