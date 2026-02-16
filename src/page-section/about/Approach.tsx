import Tag from "@/src/component/Tag";
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
          <Tag>
            <Typography size={14} sizeMobile={12} weight={500}>
              Our Methodology
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

      {/* Approach Cards */}
      <div className="mt-[48px] md:mt-[64px] grid grid-cols-1 md:grid-cols-2 gap-[16px] md:gap-[24px]">
        {approaches.map((item, idx) => (
          <div
            key={idx}
            className="relative bg-[#0D0D0D] dark:bg-[#111111] border border-white/[0.06] rounded-[16px] p-[32px] md:p-[40px] overflow-hidden group hover:border-[#F2B611]/[0.2] transition-colors duration-300"
          >
            {/* Watermark number */}
            <span className="absolute top-[-8px] right-[16px] text-[100px] md:text-[140px] font-bold leading-none text-white/[0.03] select-none pointer-events-none font-heading">
              {item.number}
            </span>

            <div className="relative z-10 flex flex-col gap-[20px]">
              {/* Icon + Number row */}
              <div className="flex items-center gap-[16px]">
                <div className="w-[52px] h-[52px] md:w-[56px] md:h-[56px] flex items-center justify-center">
                  <item.Icon className="w-[44px] h-[44px] md:w-[48px] md:h-[48px]" />
                </div>
                <span className="text-[#F2B611]/[0.4] text-[14px] font-bold tracking-widest">
                  STEP {item.number}
                </span>
              </div>

              {/* Title */}
              <Typography
                size={24}
                sizeMobile={20}
                weight={700}
                color="#fff"
                noDarkMode
                lineHeight={32}
                lineHeightMobile={28}
                heading
              >
                {item.title}
              </Typography>

              {/* Description */}
              <Typography
                size={15}
                lineHeight={26}
                lineHeightMobile={24}
                color="#B4B4B4"
                noDarkMode
                className="text-balance"
              >
                {item.description}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
