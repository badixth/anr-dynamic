import Typography from "@/src/component/Typography";
import { companyInfo } from "@/src/data/company";

import ShieldPersonIcon from "@/src/assets/icons/isocons/shield-person-12.svg";
import DiamondIcon from "@/src/assets/icons/isocons/diamond-4.svg";
import PartnerExchangeIcon from "@/src/assets/icons/isocons/partner-exchange-6.svg";
import MicrobiologyIcon from "@/src/assets/icons/isocons/microbiology-9.svg";

const valueIcons = [ShieldPersonIcon, DiamondIcon, PartnerExchangeIcon, MicrobiologyIcon];

export default function Values() {
  return (
    <div className="bg-white dark:bg-[#070707] py-[48px] md:py-[80px] px-[16px] md:px-[72px]">
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
          Our Values
        </Typography>
        <Typography size={16} lineHeight={24} className="max-w-[800px] text-balance">
          Our core values guide every interaction, decision, and service we
          provide. They define who we are and how we serve our clients.
        </Typography>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] max-w-[1100px] mx-auto">
        {companyInfo.values.map((value, idx) => (
          <div
            key={idx}
            className="bg-[#F5F5F5] dark:bg-[#1D1D1D] p-[32px] rounded-[12px] flex flex-col items-start gap-[16px]"
          >
            {(() => {
              const Icon = valueIcons[idx];
              return (
                <div className="w-[56px] h-[56px] flex items-center justify-center mb-[8px]">
                  <Icon className="w-[48px] h-[48px]" />
                </div>
              );
            })()}
            <Typography size={24} weight={600} heading>
              {value.title}
            </Typography>
            <Typography
              size={16}
              sizeMobile={16}
              lineHeight={24}
              color="#666666"
              noDarkMode
              darkColor="#D4D4D4"
              className="text-balance"
            >
              {value.description}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}
