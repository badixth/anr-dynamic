import Typography from "@/src/component/Typography";
import Icons from "@/src/component/Icons";

import PartnerExchangeIcon from "@/src/assets/icons/isocons/partner-exchange-6.svg";
import MyLocationIcon from "@/src/assets/icons/isocons/my-location-21.svg";
import DataTableIcon from "@/src/assets/icons/isocons/data-table-18.svg";

const partnershipIcons = [PartnerExchangeIcon, MyLocationIcon, DataTableIcon];

const partnerships = [
  {
    number: "01",
    title: "Trusted Partnerships",
    subtitle: "Building Long-Term Client Relationships",
    description:
      "Our approach is grounded in trust, transparency, and a shared commitment to your success.",
    points: [
      "Open and professional communication",
      "Confidential handling of sensitive matters",
      "Independent and objective advice",
      "A shared commitment to compliance, governance, and integrity",
    ],
  },
  {
    number: "02",
    title: "Deep Regional Expertise",
    subtitle: "Local Knowledge with Professional Standards",
    description:
      "Our experience across multiple industries enables us to navigate complex regulatory environments effectively.",
    points: [
      "Interpret and apply local regulations and government requirements accurately",
      "Address issues arising from regulatory reviews, tax audits, and compliance assessments",
      "Advise clients in a manner that is practical, defensible, and aligned with Malaysian standards",
    ],
  },
  {
    number: "03",
    title: "End-to-End Advisory",
    subtitle: "Comprehensive Support Throughout Your Business Journey",
    description:
      "We work closely with clients to provide complete advisory solutions from diagnosis to implementation.",
    points: [
      "Diagnose accounting, audit, tax, and compliance issues",
      "Advise on regulatory requirements and appropriate responses",
      "Assist in engagement with relevant authorities and stakeholders",
      "Implement corrective measures and strengthen internal controls",
      "Support ongoing compliance and governance improvements",
    ],
  },
];

export default function Partnership() {
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
          Why Partner With <span className="text-[#F2B611]">ANR</span> Dynamic Ventures
        </Typography>
        <Typography size={16} lineHeight={24} className="max-w-[800px]">
          We don&apos;t just provide services—we build lasting partnerships
          based on trust, expertise, and comprehensive support for your business
          success.
        </Typography>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px]">
        {partnerships.map((item, idx) => (
          <div
            key={idx}
            className="relative bg-[#0D0D0D] dark:bg-[#111111] border border-white/[0.06] rounded-[16px] p-[32px] md:p-[40px] flex flex-col gap-[24px] overflow-hidden group hover:border-[#F2B611]/[0.2] transition-colors duration-300"
          >
            {/* Watermark icon */}
            {(() => {
              const WatermarkIcon = partnershipIcons[idx];
              return (
                <div
                  className="absolute top-[16px] right-[16px] md:top-[20px] md:right-[24px] w-[120px] h-[120px] md:w-[160px] md:h-[160px] select-none pointer-events-none"
                  style={{ filter: "grayscale(1) brightness(0.3)", opacity: 0.2 }}
                >
                  <WatermarkIcon className="w-full h-full" />
                </div>
              );
            })()}

            {/* Top accent line */}
            <div className="absolute top-0 left-[40px] w-[60px] h-[2px] bg-gradient-to-r from-[#F2B611] to-[#F2B611]/[0.1]" />

            {/* Number + Title */}
            <div className="flex flex-col gap-[16px]">
              <div className="flex items-center gap-[14px]">
                <span className="text-[#F2B611] font-bold text-[14px] tracking-wider font-heading">
                  {item.number}
                </span>
                <div className="w-[24px] h-[1px] bg-[#F2B611]/[0.3]" />
              </div>
              <Typography
                size={24}
                sizeMobile={20}
                weight={700}
                lineHeight={32}
                color="#fff"
                noDarkMode
                heading
              >
                {item.title}
              </Typography>
              <Typography
                size={15}
                weight={600}
                lineHeight={22}
                color="#F2B611"
                noDarkMode
              >
                {item.subtitle}
              </Typography>
            </div>

            {/* Description */}
            <Typography
              size={16}
              sizeMobile={16}
              lineHeight={26}
              color="#B4B4B4"
              noDarkMode
            >
              {item.description}
            </Typography>

            {/* Divider */}
            <div className="w-full h-[1px] bg-white/[0.06]" />

            {/* Points List */}
            <div className="flex flex-col gap-[14px]">
              {item.points.map((point, pointIdx) => (
                <div key={pointIdx} className="flex items-start gap-[12px]">
                  <div className="flex-shrink-0 mt-[1px]">
                    <Icons
                      name="check"
                      className="w-[18px] h-[18px]"
                      color="#F2B611"
                      noDarkMode
                    />
                  </div>
                  <Typography
                    size={16}
                    sizeMobile={16}
                    lineHeight={24}
                    color="#D4D4D4"
                    noDarkMode
                  >
                    {point}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
