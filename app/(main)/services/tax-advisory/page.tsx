import { Suspense, lazy } from "react";

const ServicePageHero = lazy(() => import("@/src/page-section/services/ServicePageHero"));
const ServiceDetail = lazy(() => import("@/src/page-section/services/ServiceDetail"));
const Faq = lazy(() => import("@/src/page-section/Faq"));
const Testimonials = lazy(() => import("@/src/page-section/Testimonials"));

import { taxFaqs } from "@/src/data/faqs";

export default function TaxAdvisoryPage() {
  const whyChooseItems = [
    {
      title: "LHDN Experience",
      description: "Extensive experience in LHDN audits, appeals, and correspondence with proven success in resolving complex tax disputes and compliance issues."
    },
    {
      title: "Proactive Defense",
      description: "Strategic tax planning and documentation practices designed to minimize audit risk and position your business favorably in LHDN engagements."
    },
    {
      title: "Tax Optimization",
      description: "Comprehensive strategies to minimize tax liability through legitimate deductions, reliefs, incentives, and timing strategies while maintaining full compliance."
    }
  ];

  const accordionData = taxFaqs.map(faq => ({
    title: faq.question,
    content: faq.answer
  }));

  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <ServicePageHero
          headline="Tax Advisory Services"
          tagline="Compliance. Optimization. LHDN Defense."
          description="Expert tax planning, compliance filing, and audit defense services to minimize tax liability while ensuring full LHDN compliance for Malaysian businesses."
          ctaText="DISCUSS YOUR TAX SITUATION"
          ctaLink="/contact"
        />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <ServiceDetail
          tag="What's Included"
          headline="Comprehensive Tax Solutions for LHDN Compliance"
          description="From routine tax filing to complex LHDN audits and tax optimization strategies, we provide expert guidance to minimize your tax burden while ensuring full regulatory compliance."
          features={[
            "Tax Compliance & Filing (Form C/E)",
            "LHDN Audit Defense & Representation",
            "Tax Planning & Optimization",
            "E-Invoice Registration & Compliance",
            "Transfer Pricing Documentation",
            "Tax Due Diligence"
          ]}
          whyChooseItems={whyChooseItems}
        />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Faq
          items={accordionData}
          headline="Tax Advisory FAQs"
          description="Common questions about LHDN compliance, tax audits, and optimization strategies"
        />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Testimonials />
      </Suspense>
    </main>
  );
}
