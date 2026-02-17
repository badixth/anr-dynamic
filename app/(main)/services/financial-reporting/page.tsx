import { Suspense, lazy } from "react";

const ServicePageHero = lazy(() => import("@/src/page-section/services/ServicePageHero"));
const ServiceDetail = lazy(() => import("@/src/page-section/services/ServiceDetail"));
const Faq = lazy(() => import("@/src/page-section/Faq"));
const Testimonials = lazy(() => import("@/src/page-section/Testimonials"));

import { financialReportingFaqs } from "@/src/data/faqs";

export default function FinancialReportingPage() {
  const whyChooseItems = [
    {
      title: "Timely & Accurate Reports",
      description:
        "Timely, accurate, and regulatory-compliant reports that meet Malaysian standards and stakeholder expectations.",
      icon: "editor-choice",
    },
    {
      title: "Proactive Guidance",
      description:
        "Proactive guidance to prevent compliance issues before they arise, keeping your business ahead of regulatory changes.",
      icon: "shield-person",
    },
    {
      title: "Actionable Insights",
      description:
        "Clear, actionable insights for decision-making that drive business performance and strategic clarity.",
      icon: "finance-mode",
    },
  ];

  const accordionData = financialReportingFaqs.map((faq) => ({
    title: faq.question,
    content: faq.answer,
  }));

  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <ServicePageHero
          headline="Financial Reporting & Compliance"
          tagline="Accurate Reporting to Ensure Compliance and Build Trust"
          description="Our team ensures your business meets regulatory standards, mitigates risk, and maintains stakeholder confidence."
          ctaText="DISCUSS YOUR COMPLIANCE NEEDS"
          ctaLink="/contact"
        />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <ServiceDetail
          tag="Key Services"
          description="From statutory reporting to tax filing, we ensure your business stays compliant and your stakeholders stay informed."
          features={[
            "Statutory and management reporting",
            "Regulatory compliance advisory",
            "Tax reporting and filing",
            "Audit preparation and support",
          ]}
          featureIcons={["bar-chart", "gavel", "data-table", "assured-workload"]}
          whyChooseItems={whyChooseItems}
        />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Faq
          items={accordionData}
          headline="Financial Reporting & Compliance FAQs"
          description="Common questions about financial reporting, regulatory compliance, and tax filing"
        />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Testimonials />
      </Suspense>
    </main>
  );
}
