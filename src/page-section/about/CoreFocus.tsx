import Typography from "@/src/component/Typography";
import { companyInfo } from "@/src/data/company";

import FinanceIcon from "@/src/assets/icons/isocons/finance-17.svg";
import BarChartIcon from "@/src/assets/icons/isocons/bar-chart-13.svg";
import AssuredWorkloadIcon from "@/src/assets/icons/isocons/assured-workload-11.svg";
import EditorChoiceIcon from "@/src/assets/icons/isocons/editor-choice-7.svg";

const focusIcons = [FinanceIcon, BarChartIcon, AssuredWorkloadIcon, EditorChoiceIcon];

export default function CoreFocus() {
  return (
    <div className="bg-white dark:bg-[#070707] py-[48px] md:py-[80px] px-[16px] md:px-[72px]">
      <div className="flex flex-col items-center text-center gap-[24px] mb-[48px] md:mb-[64px]">
        <Typography
          as="div"
          size={40}
          sizeMobile={28}
          weight={700}
          lineHeight={48}
          lineHeightMobile={36}
          heading
        >
          Core Focus
        </Typography>
        <Typography size={16} lineHeight={24} className="max-w-[800px] text-balance">
          {companyInfo.coreFocus.description}
        </Typography>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] md:gap-[24px] max-w-[1100px] mx-auto mb-[48px] md:mb-[64px]">
        {companyInfo.coreFocus.points.map((point, idx) => (
          <div
            key={idx}
            className="relative bg-[#0D0D0D] dark:bg-[#111111] border border-white/[0.06] p-[28px] md:p-[32px] rounded-[16px] flex items-start gap-[20px] overflow-hidden group hover:border-[#F2B611]/[0.2] transition-colors duration-300"
          >
            {/* Decorative icon watermark */}
            {(() => {
              const WatermarkIcon = focusIcons[idx];
              return (
                <div
                  className="absolute top-[8px] right-[8px] md:top-[12px] md:right-[12px] w-[80px] h-[80px] md:w-[100px] md:h-[100px] select-none pointer-events-none"
                  style={{ filter: "grayscale(1) brightness(0.3)", opacity: 0.2 }}
                >
                  <WatermarkIcon className="w-full h-full" />
                </div>
              );
            })()}

            {/* Icon indicator */}
            {(() => {
              const Icon = focusIcons[idx];
              return (
                <div className="relative z-10 flex-shrink-0 w-[40px] h-[40px] flex items-center justify-center">
                  <Icon className="w-[36px] h-[36px]" />
                </div>
              );
            })()}

            <Typography
              size={16}
              sizeMobile={15}
              lineHeight={26}
              lineHeightMobile={24}
              color="#D4D4D4"
              noDarkMode
              className="relative z-10 text-balance"
            >
              {point}
            </Typography>
          </div>
        ))}
      </div>

      {/* Tagline Quote */}
      <div className="relative bg-[#0D0D0D] dark:bg-[#111111] border border-white/[0.06] py-[48px] md:py-[64px] px-[32px] md:px-[72px] rounded-[16px] text-center overflow-hidden max-w-[1100px] mx-auto">
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
