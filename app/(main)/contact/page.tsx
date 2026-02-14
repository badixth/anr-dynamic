import React, { Suspense } from "react";

const Hero = React.lazy(() => import("@/src/page-section/contact/Hero"));
const Form = React.lazy(() => import("@/src/page-section/contact/Form"));
const Testimonials = React.lazy(() => import("@/src/page-section/Testimonials"));

export default function Contact() {
    return (
        <div>
            <Suspense fallback={<div className="min-h-screen" />}>
                <Hero />
            </Suspense>
            <Suspense fallback={null}>
                <Form />
            </Suspense>
            <Suspense fallback={null}>
                <Testimonials />
            </Suspense>
        </div>
    )
}
