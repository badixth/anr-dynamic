import Tag from "@/src/component/Tag";
import Typography from "@/src/component/Typography";
import { companyInfo } from "@/src/data/company";

export default function CoreFocus() {
  return (
    <div className="bg-white dark:bg-[#070707] py-[48px] md:py-[80px] px-[16px] md:px-[72px]">
      <div className="flex flex-col items-center text-center gap-[24px] mb-[48px] md:mb-[64px]">
        <Tag>
          <Typography size={14} sizeMobile={12} weight={500}>
            Core Focus
          </Typography>
        </Tag>
        <Typography
          as="div"
          size={40}
          sizeMobile={26}
          weight={700}
          lineHeight={48}
          lineHeightMobile={34}
          heading
        >
          {companyInfo.coreFocus.headline}
        </Typography>
        <Typography size={16} lineHeight={24} className="max-w-[800px]">
          {companyInfo.coreFocus.description}
        </Typography>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] md:gap-[24px] max-w-[1000px] mx-auto mb-[48px] md:mb-[64px]">
        {companyInfo.coreFocus.points.map((point, idx) => (
          <div
            key={idx}
            className="relative bg-[#0D0D0D] dark:bg-[#111111] border border-white/[0.06] p-[28px] md:p-[32px] rounded-[16px] flex items-start gap-[20px] overflow-hidden group hover:border-[#F2B611]/[0.2] transition-colors duration-300"
          >
            {/* Decorative number */}
            <span className="absolute top-[-8px] right-[12px] text-[80px] md:text-[100px] font-bold leading-none text-white/[0.03] select-none pointer-events-none font-heading">
              {String(idx + 1).padStart(2, "0")}
            </span>

            {/* Gold numbered indicator */}
            <div className="relative z-10 flex-shrink-0 w-[36px] h-[36px] rounded-[10px] bg-[#F2B611]/[0.12] border border-[#F2B611]/[0.25] flex items-center justify-center">
              <span className="text-[#F2B611] text-[14px] font-bold">
                {String(idx + 1).padStart(2, "0")}
              </span>
            </div>

            <Typography
              size={16}
              sizeMobile={15}
              lineHeight={26}
              lineHeightMobile={24}
              color="#D4D4D4"
              noDarkMode
              className="relative z-10"
            >
              {point}
            </Typography>
          </div>
        ))}
      </div>

      {/* Tagline Quote */}
      <div className="relative bg-[#0D0D0D] dark:bg-[#111111] border border-white/[0.06] py-[48px] md:py-[64px] px-[32px] md:px-[72px] rounded-[16px] text-center overflow-hidden">
        {/* Opening quotation mark */}
        <span className="absolute top-[8px] left-[16px] md:top-[12px] md:left-[32px] text-[120px] md:text-[180px] leading-none text-[#F2B611]/[0.12] select-none pointer-events-none font-heading">
          &ldquo;
        </span>
        {/* Closing quotation mark */}
        <span className="absolute bottom-[-32px] right-[16px] md:bottom-[-40px] md:right-[32px] text-[120px] md:text-[180px] leading-none text-[#F2B611]/[0.12] select-none pointer-events-none font-heading">
          &rdquo;
        </span>
        <div className="relative z-10 flex flex-col items-center gap-[24px]">
          <div className="w-[48px] h-[3px] bg-[#F2B611] rounded-full" />
          <Typography
            size={24}
            sizeTablet={20}
            sizeMobile={16}
            weight={600}
            color="#fff"
            noDarkMode
            lineHeight={36}
            lineHeightTablet={30}
            lineHeightMobile={26}
            heading
            className="max-w-[800px]"
          >
            {companyInfo.coreFocus.tagline}
          </Typography>
          <div className="w-[48px] h-[3px] bg-[#F2B611] rounded-full" />
        </div>
      </div>
    </div>
  );
}
