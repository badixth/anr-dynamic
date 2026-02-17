import { Suspense, lazy } from "react";

const ServicePageHero = lazy(() => import("@/src/page-section/services/ServicePageHero"));
const ServiceDetail = lazy(() => import("@/src/page-section/services/ServiceDetail"));
const Faq = lazy(() => import("@/src/page-section/Faq"));
const Testimonials = lazy(() => import("@/src/page-section/Testimonials"));

import { corporateFaqs } from "@/src/data/faqs";

export default function CorporateAdvisoryPage() {
  const whyChooseItems = [
    {
      title: "Customised Solutions",
      description:
        "Customised solutions aligned with your business goals for targeted and effective outcomes.",
      icon: "action-key",
    },
    {
      title: "Market Expertise",
      description:
        "Insights backed by market knowledge and financial expertise to guide your strategic decisions.",
      icon: "domain",
    },
    {
      title: "Long-Term Growth",
      description:
        "Focus on long-term growth and sustainable outcomes that position your business for lasting success.",
      icon: "grouped-bar-chart",
    },
  ];

  const accordionData = corporateFaqs.map((faq) => ({
    title: faq.question,
    content: faq.answer,
  }));

  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <ServicePageHero
          headline="Corporate Advisory Services"
          tagline="Strategic Guidance to Drive Growth and Minimise Risk"
          description="Our Corporate Advisory services help businesses navigate complex decisions, optimise performance, and unlock growth opportunities."
          ctaText="DISCUSS YOUR CORPORATE STRATEGY"
          ctaLink="/contact"
        />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <ServiceDetail
          tag="Key Services"
          description="From business strategy to financial restructuring, we provide expert guidance to help your business navigate complex decisions and unlock growth."
          features={[
            "Business strategy and planning",
            "Financial restructuring and optimisation",
            "Mergers & acquisitions advisory",
            "Risk management and compliance guidance",
          ]}
          featureIcons={["mountain-flag", "finance-mode", "partner-exchange", "shield-person"]}
          whyChooseItems={whyChooseItems}
        />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Faq
          items={accordionData}
          headline="Corporate Advisory FAQs"
          description="Common questions about business strategy, restructuring, and corporate advisory"
        />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Testimonials />
      </Suspense>
    </main>
  );
}
