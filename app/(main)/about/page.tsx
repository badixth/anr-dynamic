import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from '@gsap/react';
import React, { Suspense } from "react";

const Hero = React.lazy(() => import("@/src/page-section/about/Hero"));
const AboutUs = React.lazy(() => import("@/src/page-section/about/AboutUs"));
const MissionVision = React.lazy(() => import("@/src/page-section/about/MissionVision"));
const Values = React.lazy(() => import("@/src/page-section/about/Values"));
const CoreFocus = React.lazy(() => import("@/src/page-section/about/CoreFocus"));
const Teams = React.lazy(() => import('@/src/page-section/about/Teams'));
const Approach = React.lazy(() => import('@/src/page-section/about/Approach'));
const WhyChooseUs = React.lazy(() => import("@/src/page-section/about/WhyChooseUs"));
const WhoWeWorkWith = React.lazy(() => import("@/src/page-section/about/WhoWeWorkWith"));
const Faq = React.lazy(() => import('@/src/page-section/Faq'));
const Testimonials = React.lazy(() => import('@/src/page-section/Testimonials'));

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(useGSAP);

export default function About() {
    return (
        <div>
            <Suspense fallback={<div className="min-h-screen" />}>
                <Hero />
            </Suspense>
            <Suspense fallback={null}>
                <AboutUs />
            </Suspense>
            <Suspense fallback={null}>
                <MissionVision />
            </Suspense>
            <Suspense fallback={null}>
                <Values />
            </Suspense>
            <Suspense fallback={null}>
                <CoreFocus />
            </Suspense>
            <Suspense fallback={null}>
                <Teams />
            </Suspense>
            <Suspense fallback={null}>
                <Approach />
            </Suspense>
            <Suspense fallback={null}>
                <WhyChooseUs />
            </Suspense>
            <Suspense fallback={null}>
                <WhoWeWorkWith />
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
