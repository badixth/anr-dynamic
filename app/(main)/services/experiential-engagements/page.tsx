import { Suspense, lazy } from "react";

const ServicePageHero = lazy(
  () => import("@/src/page-section/services/ServicePageHero"),
);
const ServiceDetail = lazy(
  () => import("@/src/page-section/services/ServiceDetail"),
);
const Faq = lazy(() => import("@/src/page-section/Faq"));
const Testimonials = lazy(() => import("@/src/page-section/Testimonials"));

import { experientialFaqs } from "@/src/data/faqs";

export default function ExperientialEngagementsPage() {
  const whyChooseItems = [
    {
      title: "Seamless End-to-End Delivery",
      description:
        "We manage every detail from brief to wrap-up, ensuring a smooth, stress-free experience so you can focus entirely on your audience.",
      icon: "assured-workload",
    },
    {
      title: "Creative Excellence",
      description:
        "Distinctive concepts and immersive themes crafted by a passionate creative team to make every event truly unforgettable.",
      icon: "workspace-premium",
    },
    {
      title: "Integrated Technology",
      description:
        "Multimedia and digital tools seamlessly woven into your event to elevate engagement and extend your brand's reach beyond the room.",
      icon: "partner-exchange",
    },
  ];

  const accordionData = experientialFaqs.map((faq) => ({
    title: faq.question,
    content: faq.answer,
  }));

  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <ServicePageHero
          headline="Experiential Engagements"
          tagline="Curated Events and Immersive Experiences That Connect and Inspire"
          description="Curated corporate events, brand activations, and immersive offline experiences that forge meaningful, lasting connections with your stakeholders."
          ctaText="PLAN YOUR NEXT EVENT"
          ctaLink="/contact"
        />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <ServiceDetail
          tag="Key Services"
          description="From strategic event planning to on-ground production and multimedia integration, we craft experiences that captivate audiences and strengthen brand relationships."
          features={[
            {
              title: "End-to-End Event Management",
              description:
                "Comprehensive event planning and execution — from concept, logistics, and vendor management to on-day coordination and post-event reporting.",
            },
            {
              title: "Creative Concept & Theming",
              description:
                "Distinctive, story-driven event concepts and themes that blend creativity with your brand narrative for truly memorable occasions.",
            },
            {
              title: "Technical & Production Management",
              description:
                "Full technical production including stage design, AV systems, lighting, and live performances managed by experienced professionals.",
            },
            {
              title: "Multimedia & Digital Integration",
              description:
                "Cutting-edge engagement tools — 360° photobooths, live interactive quizzes, hybrid streaming, and real-time digital activations.",
            },
            {
              title: "Brand Activations",
              description:
                "Strategic on-ground brand experiences and product launches designed to generate buzz, build connections, and leave lasting impressions.",
            },
          ]}
          featureIcons={[
            "groups",
            "editor-choice",
            "partner-exchange",
            "data-table",
            "mountain-flag",
          ]}
          whyChooseItems={whyChooseItems}
        />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Faq
          items={accordionData}
          headline="Experiential Engagements FAQs"
          description="Common questions about corporate events, brand activations, and experiential marketing"
        />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Testimonials />
      </Suspense>
    </main>
  );
}
