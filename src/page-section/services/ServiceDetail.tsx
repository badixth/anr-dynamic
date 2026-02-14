"use client";

import Typography from "@/src/component/Typography";
import Tag from "@/src/component/Tag";
import Icons from "@/src/component/Icons";

type ServiceDetailProps = {
  tag: string;
  headline: string;
  description: string;
  features: string[];
  whyChooseItems?: {
    title: string;
    description: string;
  }[];
};

export default function ServiceDetail({
  tag,
  headline,
  description,
  features,
  whyChooseItems,
}: ServiceDetailProps) {
  return (
    <div className="bg-white dark:bg-[#070707] py-[48px] md:py-[80px] px-[16px] md:px-[72px]">
      {/* What's Included Section */}
      <div className="flex flex-col items-start gap-[24px] mb-[64px]">
        <Tag>
          <Typography size={14} sizeMobile={12} weight={500}>
            {tag}
          </Typography>
        </Tag>
        <Typography as="div" size={48} sizeMobile={32} weight={700} lineHeight={56} lineHeightMobile={41.6}>
          {headline}
        </Typography>
        <Typography size={16} lineHeight={24} className="max-w-[800px]">
          {description}
        </Typography>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] mb-[80px]">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-[#F5F5F5] dark:bg-[#1D1D1D] p-[24px] rounded-[12px] flex items-start gap-[16px]"
          >
            <div className="bg-[#F2B611] rounded-full w-[24px] h-[24px] flex items-center justify-center flex-shrink-0 mt-[4px]">
              <Icons name="check" className="w-4 h-4" color="#fff" />
            </div>
            <Typography size={16} weight={500} lineHeight={24}>
              {feature}
            </Typography>
          </div>
        ))}
      </div>

      {/* Why Choose ANR Section */}
      {whyChooseItems && whyChooseItems.length > 0 && (
        <div>
          <div className="mb-[32px]">
            <Typography as="div" size={32} sizeMobile={28} weight={600} lineHeight={40}>
              Why Choose ANR for {tag}
            </Typography>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
            {whyChooseItems.map((item, idx) => (
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
      )}
    </div>
  );
}
