import Tag from "@/src/component/Tag";
import Typography from "@/src/component/Typography";
import { companyInfo } from "@/src/data/company";

export default function WhyChooseUs() {
  return (
    <div className="bg-[#F5F5F5] dark:bg-[#0D0D0D] py-[48px] md:py-[80px] px-[16px] md:px-[72px]">
      <div className="flex flex-col items-center text-center gap-[24px] mb-[48px]">
        <Tag>
          <Typography size={14} sizeMobile={12} weight={500}>
            Why Choose Us
          </Typography>
        </Tag>
        <Typography
          as="div"
          size={48}
          sizeMobile={32}
          weight={700}
          lineHeight={56}
          lineHeightMobile={41.6}
        >
          As Your Strategic Partner
        </Typography>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] max-w-[900px] mx-auto">
        {companyInfo.whyChooseUs.map((reason, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-[#1D1D1D] p-[32px] rounded-[12px] flex items-start gap-[16px]"
          >
            <div className="bg-[#F2B611] rounded-full w-[32px] h-[32px] flex items-center justify-center flex-shrink-0 mt-[4px]">
              <Typography size={18} weight={700} color="#fff" noDarkMode>
                {idx + 1}
              </Typography>
            </div>
            <Typography size={16} lineHeight={28}>
              {reason}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}
