import { Suspense, lazy } from "react";

const ServicePageHero = lazy(() => import("@/src/page-section/services/ServicePageHero"));
const ServiceDetail = lazy(() => import("@/src/page-section/services/ServiceDetail"));
const Faq = lazy(() => import("@/src/page-section/Faq"));
const Testimonials = lazy(() => import("@/src/page-section/Testimonials"));

import { auditFaqs } from "@/src/data/faqs";

export default function AuditAssurancePage() {
  const whyChooseItems = [
    {
      title: "Regulatory-Compliant Reports",
      description:
        "Accurate, regulatory-compliant audit reports that meet Malaysian standards and enhance stakeholder confidence.",
      icon: "gavel",
    },
    {
      title: "Timely Insights",
      description:
        "Timely and actionable insights that help you strengthen internal controls and improve financial governance.",
      icon: "bar-chart",
    },
    {
      title: "Trusted Guidance",
      description:
        "Trusted professional guidance from experienced auditors committed to accuracy and integrity.",
      icon: "shield-person",
    },
  ];

  const accordionData = auditFaqs.map((faq) => ({
    title: faq.question,
    content: faq.answer,
  }));

  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <ServicePageHero
          headline="Audit Advisory & Compliance Assurance"
          tagline="Reliable Audit & Assurance for Accurate Financial Reporting"
          description="Our team help organisations meet statutory requirements, enhance investor confidence, and maintain trust with stakeholders."
          ctaText="DISCUSS YOUR AUDIT NEEDS"
          ctaLink="/contact"
        />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <ServiceDetail
          tag="Key Services"
          description="We deliver reliable audit and assurance services that help your organisation meet statutory requirements and maintain trust with stakeholders."
          features={[
            "Audit issue resolution & advisory",
            "Audit preparation support",
          ]}
          featureIcons={["assured-workload", "editor-choice"]}
          whyChooseItems={whyChooseItems}
        />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Faq
          items={accordionData}
          headline="Audit Advisory & Compliance Assurance FAQs"
          description="Common questions about audit compliance, assurance services, and regulatory requirements"
        />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Testimonials />
      </Suspense>
    </main>
  );
}
