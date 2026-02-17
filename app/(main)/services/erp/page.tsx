import { Suspense, lazy } from "react";

const ServicePageHero = lazy(() => import("@/src/page-section/services/ServicePageHero"));
const ServiceDetail = lazy(() => import("@/src/page-section/services/ServiceDetail"));
const Faq = lazy(() => import("@/src/page-section/Faq"));
const Testimonials = lazy(() => import("@/src/page-section/Testimonials"));

import { erpFaqs } from "@/src/data/faqs";

export default function ERPPage() {
  const whyChooseItems = [
    {
      title: "End-to-End Integration",
      description:
        "End-to-end integration of core business functions for seamless operations across your organisation.",
      icon: "partner-exchange",
    },
    {
      title: "Improved Efficiency",
      description:
        "Improved efficiency, accuracy, and decision-making through real-time data visibility and automated processes.",
      icon: "bar-chart",
    },
    {
      title: "Scalable Solutions",
      description:
        "Scalable solutions tailored to your business size and industry, growing with you as your needs evolve.",
      icon: "mountain-flag",
    },
  ];

  const accordionData = erpFaqs.map((faq) => ({
    title: faq.question,
    content: faq.answer,
  }));

  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <ServicePageHero
          headline="Enterprise Resource Planning (ERP)"
          tagline="Integrated Systems to Unify and Optimise Business Operations"
          description="Our ERP solutions help businesses streamline operations, integrate key processes, and gain real-time visibility across finance, inventory, HR, and more - all in one unified platform."
          ctaText="EXPLORE ERP SOLUTIONS"
          ctaLink="/contact"
        />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <ServiceDetail
          tag="Key Services"
          description="From system selection to ongoing support, we deliver end-to-end ERP solutions that unify and optimise your business operations."
          features={[
            "ERP system selection and implementation",
            "Business process automation and integration",
            "Financial and inventory management modules",
            "Custom reporting and analytics dashboards",
            "Training and ongoing support",
          ]}
          featureIcons={["action-key", "assured-workload", "finance", "grouped-bar-chart", "local-library"]}
          whyChooseItems={whyChooseItems}
        />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Faq
          items={accordionData}
          headline="ERP Solutions FAQs"
          description="Common questions about ERP implementation and business process automation"
        />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Testimonials />
      </Suspense>
    </main>
  );
}
