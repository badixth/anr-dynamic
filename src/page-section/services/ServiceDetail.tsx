"use client";

import Typography from "@/src/component/Typography";
import Icons from "@/src/component/Icons";

type FeatureItem = string | { title: string; description: string };

type ServiceDetailProps = {
  tag: string;
  description: string;
  features: FeatureItem[];
  whyChooseItems?: {
    title: string;
    description: string;
  }[];
};

export default function ServiceDetail({
  tag,
  description,
  features,
  whyChooseItems,
}: ServiceDetailProps) {
  const hasDetailedFeatures = features.some((f) => typeof f === "object");

  return (
    <div className="bg-white dark:bg-[#070707] py-[48px] md:py-[80px] px-[16px] md:px-[72px]">
      {/* What's Included Section */}
      <div className="flex flex-col items-center text-center gap-[24px] mb-[64px]">
        <Typography as="div" size={40} sizeMobile={28} weight={700} lineHeight={48} lineHeightMobile={36} heading>
          {tag}
        </Typography>
        <Typography size={16} lineHeight={24} className="max-w-[800px]">
          {description}
        </Typography>
      </div>

      {/* Features Grid */}
      <div className={`grid grid-cols-1 md:grid-cols-2 ${hasDetailedFeatures ? "gap-[20px]" : "lg:grid-cols-3 gap-[24px]"} mb-[80px]`}>
        {features.map((feature, idx) => {
          const isDetailed = typeof feature === "object";
          return (
            <div
              key={idx}
              className={`bg-[#F5F5F5] dark:bg-[#1D1D1D] rounded-[12px] flex flex-col gap-[12px] ${isDetailed ? "p-[28px] md:p-[32px]" : "p-[24px] flex-row items-start gap-[16px]"}`}
            >
              <div className={`flex items-start gap-[16px] ${isDetailed ? "" : ""}`}>
                <div className="bg-[#F2B611] rounded-full w-[24px] h-[24px] flex items-center justify-center flex-shrink-0 mt-[2px]">
                  <Icons name="check" className="w-4 h-4" color="#fff" />
                </div>
                <Typography size={isDetailed ? 18 : 16} weight={600} lineHeight={isDetailed ? 28 : 24}>
                  {isDetailed ? feature.title : feature}
                </Typography>
              </div>
              {isDetailed && (
                <Typography size={16} sizeMobile={16} lineHeight={26} color="#666666" noDarkMode darkColor="#D4D4D4" className="pl-[40px]">
                  {feature.description}
                </Typography>
              )}
            </div>
          );
        })}
      </div>

      {/* Why Choose ANR Section */}
      {whyChooseItems && whyChooseItems.length > 0 && (
        <div>
          <div className="mb-[32px]">
            <Typography as="div" size={32} sizeMobile={28} weight={600} lineHeight={40} heading>
              Why Choose <span className="text-[#F2B611]">ANR</span> for {tag}
            </Typography>
          </div>
          <div className={`grid grid-cols-1 ${whyChooseItems.length % 3 === 0 ? "md:grid-cols-3" : "md:grid-cols-2"} gap-[24px]`}>
            {whyChooseItems.map((item, idx) => (
              <div key={idx} className="flex flex-col items-start gap-[12px]">
                <Typography size={20} weight={600}>
                  {item.title}
                </Typography>
                <Typography size={16} sizeMobile={16} lineHeight={24} color="#666666" noDarkMode darkColor="#D4D4D4">
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
