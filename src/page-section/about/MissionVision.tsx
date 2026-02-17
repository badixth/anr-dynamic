import Typography from "@/src/component/Typography";
import { companyInfo } from "@/src/data/company";

export default function MissionVision() {
  return (
    <div className="bg-[#F5F5F5] dark:bg-[#0D0D0D] py-[48px] md:py-[80px] px-[16px] md:px-[72px]">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center gap-[24px] mb-[64px]">
        <Typography
          as="div"
          size={40}
          sizeMobile={28}
          weight={700}
          lineHeight={48}
          lineHeightMobile={36}
          heading
        >
          Mission & Vision
        </Typography>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px] md:gap-[48px]">
        {/* Mission */}
        <div className="relative bg-white dark:bg-[#1D1D1D] rounded-[16px] p-[32px] md:p-[48px] overflow-hidden">
          {/* <span className="absolute top-[16px] right-[24px] text-[120px] md:text-[160px] font-bold leading-none text-[#F2B611]/[0.06] dark:text-[#F2B611]/[0.08] select-none pointer-events-none font-heading">
            M
          </span> */}
          <div className="relative z-10 flex flex-col items-start gap-[24px]">
            <Typography
              size={32}
              sizeMobile={20}
              weight={600}
              color="#F2B611"
              noDarkMode
              letterSpacing={2}
              className="uppercase"
              heading
            >
              Our Mission
            </Typography>
            <Typography
              size={24}
              sizeTablet={20}
              sizeMobile={16}
              weight={400}
              lineHeight={38}
              lineHeightTablet={32}
              lineHeightMobile={28}
              color="#fff"
              noDarkMode
              className="text-balance"
            >
              {companyInfo.mission}
            </Typography>
          </div>
        </div>

        {/* Vision */}
        <div className="relative bg-[#070707] dark:bg-[#161616] rounded-[16px] p-[32px] md:p-[48px] overflow-hidden">
          {/* <span className="absolute top-[16px] right-[24px] text-[120px] md:text-[160px] font-bold leading-none text-white/[0.03] select-none pointer-events-none font-heading">
            V
          </span> */}
          <div className="relative z-10 flex flex-col items-start gap-[24px]">
            <Typography
              size={32}
              sizeMobile={20}
              weight={600}
              color="#F2B611"
              noDarkMode
              letterSpacing={2}
              className="uppercase"
              heading
            >
              Our Vision
            </Typography>
            <Typography
              size={24}
              sizeTablet={20}
              sizeMobile={16}
              weight={400}
              lineHeight={38}
              lineHeightTablet={32}
              lineHeightMobile={28}
              color="#fff"
              noDarkMode
              className="text-balance"
            >
              {companyInfo.vision}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
