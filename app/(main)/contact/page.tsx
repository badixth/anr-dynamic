import React, { Suspense } from "react";

const Hero = React.lazy(() => import("@/src/page-section/contact/Hero"));
const ContactSection = React.lazy(() => import("@/src/page-section/contact/ContactSection"));
const Testimonials = React.lazy(() => import("@/src/page-section/Testimonials"));

export default function Contact() {
    return (
        <div>
            <Suspense fallback={<div className="min-h-screen" />}>
                <Hero />
            </Suspense>
            <Suspense fallback={null}>
                <ContactSection />
            </Suspense>
            <Suspense fallback={null}>
                <Testimonials />
            </Suspense>
        </div>
    )
}
