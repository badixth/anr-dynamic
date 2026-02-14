import { Suspense, lazy } from "react";

const ServicePageHero = lazy(() => import("@/src/page-section/services/ServicePageHero"));
const ServiceDetail = lazy(() => import("@/src/page-section/services/ServiceDetail"));
const Faq = lazy(() => import("@/src/page-section/Faq"));
const Testimonials = lazy(() => import("@/src/page-section/Testimonials"));

import { auditFaqs } from "@/src/data/faqs";

export default function AuditAssurancePage() {
  const whyChooseItems = [
    {
      title: "Regulatory Expertise",
      description: "Thorough understanding of Malaysian Financial Reporting Standards (MFRS) and Companies Act requirements for comprehensive statutory compliance."
    },
    {
      title: "Efficient Process",
      description: "Streamlined audit methodology with clear timelines, structured communication, and minimal disruption to your daily operations."
    },
    {
      title: "Clear Communication",
      description: "Transparent reporting with practical recommendations and actionable insights to strengthen controls and improve financial transparency."
    }
  ];

  const accordionData = auditFaqs.map(faq => ({
    title: faq.question,
    content: faq.answer
  }));

  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <ServicePageHero
          headline="Audit & Assurance Services"
          tagline="Statutory Compliance. Financial Transparency. Audit Readiness."
          description="Professional statutory audit services and internal control evaluation to meet regulatory requirements and enhance stakeholder confidence in your financial reporting."
          ctaText="DISCUSS YOUR AUDIT NEEDS"
          ctaLink="/contact"
        />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <ServiceDetail
          tag="What's Included"
          headline="Professional Audit Services for Regulatory Compliance"
          description="From statutory audit requirements to internal control evaluation, we deliver comprehensive assurance services that meet Malaysian regulatory standards and provide valuable insights for business improvement."
          features={[
            "Statutory Audit Services (MFRS compliance)",
            "Audit Readiness Preparation",
            "Internal Control Evaluation",
            "Special Purpose Audits",
            "Management Letter & Advisory",
            "Due Diligence Audits"
          ]}
          whyChooseItems={whyChooseItems}
        />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Faq
          items={accordionData}
          headline="Audit & Assurance FAQs"
          description="Common questions about statutory audits, internal controls, and audit readiness"
        />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Testimonials />
      </Suspense>
    </main>
  );
}
