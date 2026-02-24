import { Suspense, lazy } from "react";

const ServicePageHero = lazy(
  () => import("@/src/page-section/services/ServicePageHero"),
);
const ServiceDetail = lazy(
  () => import("@/src/page-section/services/ServiceDetail"),
);
const Faq = lazy(() => import("@/src/page-section/Faq"));
const Testimonials = lazy(() => import("@/src/page-section/Testimonials"));

import { creativeFaqs } from "@/src/data/faqs";

export default function CreativeDigitalPage() {
  const whyChooseItems = [
    {
      title: "Full-Stack Capability",
      description:
        "From concept to deployment, we handle design, development, and digital strategy under one roof — one partner for your entire digital journey.",
      icon: "action-key",
    },
    {
      title: "Brand-First Approach",
      description:
        "Every solution is crafted around your brand identity and business goals, ensuring consistency and impact across every touchpoint.",
      icon: "domain",
    },
    {
      title: "Measurable Results",
      description:
        "Data-driven strategies and transparent reporting that keep you informed and ensure your digital investment delivers real, trackable growth.",
      icon: "grouped-bar-chart",
    },
  ];

  const accordionData = creativeFaqs.map((faq) => ({
    title: faq.question,
    content: faq.answer,
  }));

  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <ServicePageHero
          headline="Creative & Digital Solutions"
          tagline="End-to-End Digital Transformation and Brand Building"
          description="End-to-end digital transformation and brand building. We offer robust Corporate Web & App Development alongside comprehensive digital marketing and multimedia strategies to modernize your operations and elevate your market presence."
          ctaText="START YOUR DIGITAL JOURNEY"
          ctaLink="/contact"
        />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <ServiceDetail
          tag="Key Services"
          description="From corporate web development to brand strategy and multimedia production, we deliver integrated digital solutions that modernise your operations and amplify your market presence."
          features={[
            {
              title: "Corporate Web & App Development",
              description:
                "Custom-built websites and applications tailored to your brand identity, business objectives, and user experience goals.",
            },
            {
              title: "UI/UX Design",
              description:
                "Intuitive, visually compelling interfaces designed to engage users and drive meaningful interactions across all platforms.",
            },
            {
              title: "Creative Strategy & Digital Branding",
              description:
                "Cohesive brand identities and digital strategies that differentiate your business and resonate with your target audience.",
            },
            {
              title: "Digital Marketing",
              description:
                "Performance-driven campaigns across SEO, social media, and paid channels to grow your reach and convert your audience.",
            },
            {
              title: "Multimedia Production",
              description:
                "High-quality visual content, motion graphics, and video production that tell your brand story with impact.",
            },
            {
              title: "Custom System Development",
              description:
                "Bespoke software and system solutions engineered to solve unique business challenges and streamline operations.",
            },
          ]}
          featureIcons={[
            "action-key",
            "workspace-premium",
            "domain",
            "grouped-bar-chart",
            "editor-choice",
            "data-table",
          ]}
          whyChooseItems={whyChooseItems}
        />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Faq
          items={accordionData}
          headline="Creative & Digital Solutions FAQs"
          description="Common questions about web development, branding, and digital marketing"
        />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Testimonials />
      </Suspense>
    </main>
  );
}
