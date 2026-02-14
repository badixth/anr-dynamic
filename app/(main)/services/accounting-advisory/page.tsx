import { Suspense, lazy } from "react";

const ServicePageHero = lazy(() => import("@/src/page-section/services/ServicePageHero"));
const ServiceDetail = lazy(() => import("@/src/page-section/services/ServiceDetail"));
const Faq = lazy(() => import("@/src/page-section/Faq"));
const Testimonials = lazy(() => import("@/src/page-section/Testimonials"));

import { accountingFaqs } from "@/src/data/faqs";

export default function AccountingAdvisoryPage() {
  const whyChooseItems = [
    {
      title: "Regulatory Expertise",
      description: "Deep knowledge of Malaysian accounting standards, SST/GST compliance, and statutory reporting requirements to keep your business fully compliant."
    },
    {
      title: "Proactive Communication",
      description: "Regular financial updates, advisory calls, and strategic guidance to help you make informed business decisions with confidence."
    },
    {
      title: "Scalable Solutions",
      description: "Services that grow with your business, from startup bookkeeping to comprehensive CFO-level financial management and reporting."
    }
  ];

  const accordionData = accountingFaqs.map(faq => ({
    title: faq.question,
    content: faq.answer
  }));

  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <ServicePageHero
          headline="Accounting Advisory Services"
          tagline="Accurate Records. Compliant Reporting. Business Clarity."
          description="Comprehensive bookkeeping, payroll, and financial reporting services to maintain accurate financial records and ensure regulatory compliance for Malaysian businesses."
          ctaText="DISCUSS YOUR ACCOUNTING NEEDS"
          ctaLink="/contact"
        />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <ServiceDetail
          tag="What's Included"
          headline="Complete Accounting Solutions for Business Compliance"
          description="From daily bookkeeping to strategic financial advisory, our accounting services ensure your financial records are accurate, compliant, and provide the insights you need to drive business growth."
          features={[
            "Bookkeeping & Financial Record Management",
            "Payroll Processing (EPF, SOCSO, EIS, PCB)",
            "Financial Reporting (Management Accounts, P&L, Balance Sheet)",
            "Cloud Accounting Implementation",
            "GST/SST Compliance",
            "Management Advisory (Budgeting, Forecasting)"
          ]}
          whyChooseItems={whyChooseItems}
        />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Faq items={accordionData} />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Testimonials />
      </Suspense>
    </main>
  );
}
