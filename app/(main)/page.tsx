"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";
import React, { useRef, Suspense, useContext } from "react";
import { LenisContext } from "@/src/context/LenisContext";

const Hero = React.lazy(() => import("@/src/page-section/home/Hero"));
const AboutUs = React.lazy(() => import("@/src/page-section/about/AboutUs"));
const Values = React.lazy(() => import("@/src/page-section/about/Values"));
const LogoPartners = React.lazy(
  () => import("@/src/page-section/home/LogoPartners"),
);
const Services = React.lazy(() => import("@/src/page-section/home/Services"));
const Partnership = React.lazy(
  () => import("@/src/page-section/home/Partnership"),
);
const Faq = React.lazy(() => import("@/src/page-section/Faq"));
const MissionVision = React.lazy(
  () => import("@/src/page-section/about/MissionVision"),
);
const Testimonials = React.lazy(
  () => import("@/src/page-section/Testimonials"),
);

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollToPlugin);

export default function Home() {
  const testimonialRef = useRef<HTMLDivElement | null>(null);
  const lenis = useContext(LenisContext);

  const scrollToTestimonials = () => {
    if (testimonialRef.current && lenis) {
      lenis.scrollTo(testimonialRef.current, { offset: -50, duration: 1.2 });
    }
  };

  return (
    <div className="">
      <Suspense fallback={<div className="min-h-screen" />}>
        <Hero onScrollToTestimonials={scrollToTestimonials} />
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
        <Services />
      </Suspense>
      <Suspense fallback={null}>
        <Partnership />
      </Suspense>
      <Suspense fallback={null}>
        <Faq />
      </Suspense>
      <Suspense fallback={null}>
        <div ref={testimonialRef}>
          <Testimonials />
        </div>
      </Suspense>
    </div>
  );
}
