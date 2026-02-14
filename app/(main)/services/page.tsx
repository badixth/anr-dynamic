import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from '@gsap/react';
import React, { Suspense } from "react";

const Hero = React.lazy(() => import('@/src/page-section/services/Hero'));
const OurServices = React.lazy(() => import('@/src/page-section/services/OurServices'));
const Faq = React.lazy(() => import('@/src/page-section/Faq'));
const Testimonials = React.lazy(() => import('@/src/page-section/Testimonials'));

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(useGSAP);

export default function Services() {
    return (
        <div>
            <Suspense fallback={<div className="min-h-screen" />}>
                <Hero />
            </Suspense>
            <Suspense fallback={null}>
                <OurServices />
            </Suspense>
            <Suspense fallback={null}>
                <Faq />
            </Suspense>
            <Suspense fallback={null}>
                <Testimonials />
            </Suspense>
        </div>
    )
}
