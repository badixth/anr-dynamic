import Typography from "@/src/component/Typography";
import { companyInfo } from "@/src/data/company";

export default function MissionVision() {
  return (
    <div className="bg-[#F5F5F5] dark:bg-[#0D0D0D] py-[48px] md:py-[80px] px-[16px] md:px-[72px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[48px] md:gap-[64px]">
        {/* Mission */}
        <div className="flex flex-col items-start gap-[24px]">
          <div className="bg-[#F2B611] rounded-full w-[64px] h-[64px] flex items-center justify-center mb-[8px]">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <Typography size={32} sizeMobile={28} weight={700} lineHeight={40} heading>
            Our Mission
          </Typography>
          <Typography size={16} lineHeight={28} color="#666666" noDarkMode className="dark:text-[#B2B2B2]">
            {companyInfo.mission}
          </Typography>
        </div>

        {/* Vision */}
        <div className="flex flex-col items-start gap-[24px]">
          <div className="bg-[#F2B611] rounded-full w-[64px] h-[64px] flex items-center justify-center mb-[8px]">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="2"/>
              <path d="M12 5V3M12 21V19M5 12H3M21 12H19M7.05 7.05L5.64 5.64M18.36 18.36L16.95 16.95M7.05 16.95L5.64 18.36M18.36 5.64L16.95 7.05" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <Typography size={32} sizeMobile={28} weight={700} lineHeight={40} heading>
            Our Vision
          </Typography>
          <Typography size={16} lineHeight={28} color="#666666" noDarkMode className="dark:text-[#B2B2B2]">
            {companyInfo.vision}
          </Typography>
        </div>
      </div>
    </div>
  );
}
