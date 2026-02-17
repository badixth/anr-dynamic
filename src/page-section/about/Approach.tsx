import Typography from "@/src/component/Typography";

import LibraryIcon from "@/src/assets/icons/isocons/local-library-20.svg";
import ActionKeyIcon from "@/src/assets/icons/isocons/action-key-0.svg";
import LocationIcon from "@/src/assets/icons/isocons/my-location-21.svg";
import PartnerIcon from "@/src/assets/icons/isocons/partner-exchange-6.svg";

const approaches = [
  {
    number: "01",
    title: "Deep Understanding",
    description:
      "We take time to understand your business, industry, and goals.",
    Icon: LibraryIcon,
  },
  {
    number: "02",
    title: "Tailored Solutions",
    description:
      "Every client receives solutions customised to their needs and compliance requirements.",
    Icon: ActionKeyIcon,
  },
  {
    number: "03",
    title: "Proactive Guidance",
    description:
      "We anticipate challenges, minimise risks, and provide actionable insights for growth.",
    Icon: LocationIcon,
  },
  {
    number: "04",
    title: "Sustained Support",
    description:
      "Our partnership doesn't end with a report; we provide continuous guidance to help your business thrive.",
    Icon: PartnerIcon,
  },
];

export default function Approach() {
  return (
    <div className="bg-white dark:bg-[#070707] w-full px-[16px] md:px-[72px] py-[48px] md:py-[80px]">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center w-full gap-[24px]">
        <div className="flex flex-col items-center gap-[24px]">
          <Typography
            as="div"
            size={40}
            sizeMobile={28}
            weight={700}
            lineHeight={48}
            lineHeightMobile={36}
            heading
          >
            How We Deliver Results
          </Typography>
        </div>
        <div className="max-w-[700px]">
          <Typography size={16} weight={500} lineHeight={24} className="text-balance">
            Our structured methodology ensures every compliance challenge is
            addressed systematically, with clear steps from initial diagnosis
            through ongoing support.
          </Typography>
        </div>
      </div>

      {/* Process Flow */}
      <div className="mt-[48px] md:mt-[64px] max-w-[1100px] mx-auto">
        {/* Desktop step indicators with connecting line */}
        <div className="hidden lg:grid grid-cols-4 gap-[20px] relative mb-[16px]">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-[12.5%] right-[12.5%] h-[2px] -translate-y-1/2 bg-gradient-to-r from-[#F2B611]/[0.06] via-[#F2B611]/[0.3] to-[#F2B611]/[0.06]" />
          {approaches.map((item, idx) => (
            <div key={`node-${idx}`} className="flex justify-center">
              <div className="relative z-10 w-[48px] h-[48px] rounded-full bg-[#0D0D0D] dark:bg-[#111111] border-2 border-[#F2B611]/[0.4] flex items-center justify-center shadow-[0_0_16px_rgba(242,182,17,0.1)]">
                <span className="text-[#F2B611] text-[16px] font-bold font-heading">
                  {item.number}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] md:gap-[20px]">
          {approaches.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-[#0D0D0D] dark:bg-[#111111] border border-white/[0.06] rounded-[16px] p-[24px] md:p-[28px] w-full flex flex-col items-center text-center gap-[16px] group hover:border-[#F2B611]/[0.2] transition-colors duration-300"
            >
              {/* Mobile step badge */}
              <div className="lg:hidden inline-flex items-center bg-[#F2B611]/[0.1] border border-[#F2B611]/[0.25] text-[#F2B611] text-[12px] font-bold px-[12px] py-[5px] rounded-full tracking-widest">
                STEP {item.number}
              </div>

              {/* Icon */}
              <div className="w-[56px] h-[56px] md:w-[64px] md:h-[64px] flex items-center justify-center">
                <item.Icon className="w-[48px] h-[48px] md:w-[56px] md:h-[56px]" />
              </div>

              {/* Title */}
              <Typography
                size={20}
                sizeMobile={18}
                weight={700}
                color="#fff"
                noDarkMode
                lineHeight={28}
                lineHeightMobile={24}
                heading
              >
                {item.title}
              </Typography>

              {/* Divider */}
              <div className="w-[32px] h-[2px] bg-[#F2B611]/[0.3] rounded-full" />

              {/* Description */}
              <Typography
                size={16}
                sizeMobile={16}
                lineHeight={24}
                color="#B4B4B4"
                noDarkMode
                className="text-balance"
              >
                {item.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
