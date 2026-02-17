import { Suspense, lazy } from "react";

const ServicePageHero = lazy(() => import("@/src/page-section/services/ServicePageHero"));
const ServiceDetail = lazy(() => import("@/src/page-section/services/ServiceDetail"));
const Faq = lazy(() => import("@/src/page-section/Faq"));
const Testimonials = lazy(() => import("@/src/page-section/Testimonials"));

import { accountingFaqs } from "@/src/data/faqs";

export default function AccountingAdvisoryPage() {
  const whyChooseItems = [
    {
      title: "Reduce Costs",
      description:
        "Reduce operational costs and administrative burden with efficient, outsourced accounting solutions.",
      icon: "donut-small",
    },
    {
      title: "Accurate & Compliant",
      description:
        "Accurate, timely, and compliant reporting that meets Malaysian regulatory standards.",
      icon: "assured-workload",
    },
    {
      title: "Professional Expertise",
      description:
        "Access to experienced accounting professionals without the cost of hiring in-house.",
      icon: "workspace-premium",
    },
  ];

  const accordionData = accountingFaqs.map((faq) => ({
    title: faq.question,
    content: faq.answer,
  }));

  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <ServicePageHero
          headline="Accounting Advisory"
          tagline="Efficient Accounting Solutions to Streamline Operations"
          description="Our team provide professional, cost-effective accounting solutions. We manage financial records, reporting, and compliance so you can focus on growth."
          ctaText="DISCUSS YOUR ACCOUNTING NEEDS"
          ctaLink="/contact"
        />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <ServiceDetail
          tag="Key Services"
          description="From bookkeeping to cloud-based accounting, we provide comprehensive accounting services that keep your finances organised, compliant, and ready for growth."
          features={[
            "Full bookkeeping and accounting services",
            "Payroll and tax compliance",
            "Financial reporting and management accounts",
            "Cloud-based accounting solutions",
          ]}
          featureIcons={["finance", "groups", "bar-chart", "data-table"]}
          whyChooseItems={whyChooseItems}
        />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Faq
          items={accordionData}
          headline="Accounting Advisory FAQs"
          description="Common questions about bookkeeping, payroll, and accounting services"
        />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Testimonials />
      </Suspense>
    </main>
  );
}
