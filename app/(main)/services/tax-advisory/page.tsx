import { Suspense, lazy } from "react";

const ServicePageHero = lazy(
  () => import("@/src/page-section/services/ServicePageHero"),
);
const ServiceDetail = lazy(
  () => import("@/src/page-section/services/ServiceDetail"),
);
const Faq = lazy(() => import("@/src/page-section/Faq"));
const Testimonials = lazy(() => import("@/src/page-section/Testimonials"));

import { taxFaqs } from "@/src/data/faqs";

export default function TaxAdvisoryPage() {
  const whyChooseItems = [
    {
      title: "Risk Advisory & Dispute Resolution",
      description:
        "Our services include advisory on withholding tax, stamp duty, RPGT, and other applicable tax obligations. Through proactive tax risk reviews, we identify potential compliance gaps before they lead to penalties. Where disputes arise, we prepare technical justifications, manage appeal submissions, and negotiate directly with tax officers to achieve the best possible outcome for our clients.",
    },
    {
      title: "Strategic Tax Planning & Filing",
      description:
        "We handle the preparation and submission of corporate and individual income tax returns, while providing strategic tax planning and structuring advice to legally minimise tax exposure, including business restructuring and incentive applications.",
    },
    {
      title: "Comprehensive Tax Compliance",
      description:
        "Our Tax Advisory Services cover comprehensive tax compliance and strategic planning to ensure businesses meet all regulatory requirements under Lembaga Hasil Dalam Negeri Malaysia (LHDN).",
    },
    {
      title: "Audit & Investigation Representation",
      description:
        "We represent clients during tax audits, desk audits, and formal investigations initiated by LHDN, providing professional support and guidance throughout the process.",
    },
  ];

  const accordionData = taxFaqs.map((faq) => ({
    title: faq.question,
    content: faq.answer,
  }));

  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <ServicePageHero
          headline="Tax Advisory"
          tagline="Strategic Tax Solutions to Protect and Optimise Your Business"
          description="Our tax advisory services are designed to help businesses remain fully compliant while optimising their tax position within the framework of Malaysian law."
          ctaText="DISCUSS YOUR TAX NEEDS"
          ctaLink="/contact"
        />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <ServiceDetail
          tag="Key Services"
          description="From tax compliance and filing to dispute resolution, we provide comprehensive tax advisory services that protect your business, minimise exposure, and ensure full regulatory compliance."
          features={[
            {
              title: "Tax Compliance & Filing",
              description:
                "Preparation and submission of corporate and individual income tax returns in accordance with the Lembaga Hasil Dalam Negeri Malaysia (LHDN) requirements.",
            },
            {
              title: "Tax Planning & Structuring",
              description:
                "Strategic advice to minimise tax exposure legally, including business restructuring, incentive applications, and tax efficiency planning.",
            },
            {
              title: "Tax Audit & Investigation Support",
              description:
                "Representation during tax audits, desk audits, and formal investigations initiated by LHDN.",
            },
            {
              title: "Withholding Tax & Indirect Tax Advisory",
              description:
                "Guidance on withholding tax obligations, stamp duty, RPGT, and other applicable taxes.",
            },
            {
              title: "Tax Risk Review",
              description:
                "Identification of potential tax risks and compliance gaps before they escalate into penalties.",
            },
            {
              title: "Appeals & Dispute Resolution",
              description:
                "Preparation of technical justifications, appeal submissions, and negotiation with tax officers.",
            },
          ]}
          whyChooseItems={whyChooseItems}
        />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Faq
          items={accordionData}
          headline="Tax Advisory FAQs"
          description="Common questions about tax compliance, planning, and advisory services"
        />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Testimonials />
      </Suspense>
    </main>
  );
}
