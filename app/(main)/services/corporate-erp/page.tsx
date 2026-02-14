import { Suspense, lazy } from "react";

const ServicePageHero = lazy(() => import("@/src/page-section/services/ServicePageHero"));
const ServiceDetail = lazy(() => import("@/src/page-section/services/ServiceDetail"));
const Faq = lazy(() => import("@/src/page-section/Faq"));
const Testimonials = lazy(() => import("@/src/page-section/Testimonials"));

import { corporateFaqs } from "@/src/data/faqs";
import Typography from "@/src/component/Typography";
import Tag from "@/src/component/Tag";

export default function CorporateERPPage() {
  const corporateItems = [
    {
      title: "Integrated Approach",
      description: "Combined expertise in corporate structuring and technology implementation for comprehensive business transformation solutions."
    },
    {
      title: "Proven Experience",
      description: "Extensive track record in SSM registrations, business restructuring, and successful ERP deployments across diverse industries."
    },
    {
      title: "Long-term Partnership",
      description: "Ongoing support beyond implementation to ensure sustained compliance, operational efficiency, and business growth."
    }
  ];

  const accordionData = corporateFaqs.map(faq => ({
    title: faq.question,
    content: faq.answer
  }));

  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <ServicePageHero
          headline="Corporate Advisory & ERP Services"
          tagline="Strategy. Structure. Digital Transformation."
          description="Business strategy consulting, SSM registration services, and ERP implementation to support business growth and operational efficiency for Malaysian companies."
          ctaText="EXPLORE CORPORATE SOLUTIONS"
          ctaLink="/contact"
        />
      </Suspense>

      {/* Corporate Advisory Section */}
      <Suspense fallback={<div>Loading...</div>}>
        <div className="bg-white dark:bg-[#070707] py-[48px] md:py-[80px] px-[16px] md:px-[72px]">
          <div className="flex flex-col items-start gap-[24px] mb-[64px]">
            <Tag>
              <Typography size={14} sizeMobile={12} weight={500}>
                Corporate Advisory
              </Typography>
            </Tag>
            <Typography as="div" size={48} sizeMobile={32} weight={700} lineHeight={56} lineHeightMobile={41.6}>
              Strategic Business Consulting & SSM Services
            </Typography>
            <Typography size={16} lineHeight={24} className="max-w-[800px]">
              Navigate complex business transitions, regulatory requirements, and strategic decisions with expert corporate advisory services tailored to Malaysian businesses.
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            {[
              "SSM Registration & Business Formation",
              "Business Restructuring",
              "Mergers & Acquisitions Support",
              "Risk Management",
              "Corporate Secretarial Services"
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-[#F5F5F5] dark:bg-[#1D1D1D] p-[24px] rounded-[12px] flex items-start gap-[16px]"
              >
                <div className="bg-[#F2B611] rounded-full w-[24px] h-[24px] flex items-center justify-center flex-shrink-0 mt-[4px]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3332 4L5.99984 11.3333L2.6665 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <Typography size={16} weight={500} lineHeight={24}>
                  {feature}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </Suspense>

      {/* ERP Implementation Section */}
      <Suspense fallback={<div>Loading...</div>}>
        <div className="bg-[#F5F5F5] dark:bg-[#0D0D0D] py-[48px] md:py-[80px] px-[16px] md:px-[72px]">
          <div className="flex flex-col items-start gap-[24px] mb-[64px]">
            <Tag>
              <Typography size={14} sizeMobile={12} weight={500}>
                ERP Implementation
              </Typography>
            </Tag>
            <Typography as="div" size={48} sizeMobile={32} weight={700} lineHeight={56} lineHeightMobile={41.6}>
              End-to-End ERP System Implementation
            </Typography>
            <Typography size={16} lineHeight={24} className="max-w-[800px]">
              Transform your business operations with comprehensive ERP implementation, from system selection and configuration to training and ongoing support.
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] mb-[80px]">
            {[
              "ERP System Selection & Planning",
              "ERP Implementation & Configuration",
              "Business Process Automation",
              "Training & Change Management",
              "Ongoing ERP Support"
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#1D1D1D] p-[24px] rounded-[12px] flex items-start gap-[16px]"
              >
                <div className="bg-[#F2B611] rounded-full w-[24px] h-[24px] flex items-center justify-center flex-shrink-0 mt-[4px]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3332 4L5.99984 11.3333L2.6665 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <Typography size={16} weight={500} lineHeight={24}>
                  {feature}
                </Typography>
              </div>
            ))}
          </div>

          {/* Why Choose ANR Section */}
          <div>
            <div className="mb-[32px]">
              <Typography as="div" size={32} sizeMobile={28} weight={600} lineHeight={40}>
                Why Choose ANR for Corporate & ERP Services
              </Typography>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
              {corporateItems.map((item, idx) => (
                <div key={idx} className="flex flex-col items-start gap-[12px]">
                  <Typography size={20} weight={600}>
                    {item.title}
                  </Typography>
                  <Typography size={14} lineHeight={20} color="#666666" noDarkMode className="dark:text-[#B2B2B2]">
                    {item.description}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Faq
          items={accordionData}
          headline="Corporate Advisory & ERP FAQs"
          description="Common questions about SSM registration, business restructuring, and ERP implementation"
        />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Testimonials />
      </Suspense>
    </main>
  );
}
