import Tag from "@/src/component/Tag";
import Typography from "@/src/component/Typography";
import Icons from "@/src/component/Icons";
import { companyInfo } from "@/src/data/company";

export default function CoreFocus() {
  return (
    <div className="bg-white dark:bg-[#070707] py-[48px] md:py-[80px] px-[16px] md:px-[72px]">
      <div className="flex flex-col items-center text-center gap-[24px] mb-[48px]">
        <Tag>
          <Typography size={14} sizeMobile={12} weight={500}>
            Core Focus
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
          {companyInfo.coreFocus.headline}
        </Typography>
        <Typography size={16} lineHeight={24} className="max-w-[800px]">
          {companyInfo.coreFocus.description}
        </Typography>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] mb-[48px] max-w-[900px] mx-auto">
        {companyInfo.coreFocus.points.map((point, idx) => (
          <div
            key={idx}
            className="bg-[#F5F5F5] dark:bg-[#1D1D1D] p-[24px] rounded-[12px] flex items-start gap-[16px]"
          >
            <div className="bg-[#F2B611] rounded-full w-[24px] h-[24px] flex items-center justify-center flex-shrink-0 mt-[4px]">
              <Icons name="check" className="w-4 h-4" color="#fff" />
            </div>
            <Typography size={16} lineHeight={24}>
              {point}
            </Typography>
          </div>
        ))}
      </div>

      <div className="bg-[#F2B611] dark:bg-[#2A2A8A] py-[32px] px-[24px] rounded-[12px] text-center">
        <Typography
          size={24}
          sizeMobile={18}
          weight={700}
          color="#fff"
          noDarkMode
          lineHeight={32}
          lineHeightMobile={26}
        >
          {companyInfo.coreFocus.tagline}
        </Typography>
      </div>
    </div>
  );
}
