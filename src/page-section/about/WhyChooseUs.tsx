import Typography from "@/src/component/Typography";
import { companyInfo } from "@/src/data/company";

import WorkspacePremiumIcon from "@/src/assets/icons/isocons/workspace-premium-2.svg";
import ShieldPersonIcon from "@/src/assets/icons/isocons/shield-person-12.svg";
import FinanceModeIcon from "@/src/assets/icons/isocons/finance-mode-16.svg";
import DomainIcon from "@/src/assets/icons/isocons/domain-19.svg";

const reasonIcons = [WorkspacePremiumIcon, ShieldPersonIcon, FinanceModeIcon, DomainIcon];

export default function WhyChooseUs() {
  return (
    <div className="bg-[#F5F5F5] dark:bg-[#0D0D0D] py-[48px] md:py-[80px] px-[16px] md:px-[72px]">
      <div className="flex flex-col items-center text-center gap-[24px] mb-[48px]">
        <Typography
          as="div"
          size={40}
          sizeMobile={28}
          weight={700}
          lineHeight={48}
          lineHeightMobile={36}
          heading
        >
          Why Choose Us
        </Typography>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] max-w-[1100px] mx-auto">
        {companyInfo.whyChooseUs.map((reason, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-[#1D1D1D] p-[32px] rounded-[12px] flex items-start gap-[16px]"
          >
            {(() => {
              const Icon = reasonIcons[idx];
              return (
                <div className="flex-shrink-0 w-[40px] h-[40px] flex items-center justify-center">
                  <Icon className="w-[36px] h-[36px]" />
                </div>
              );
            })()}
            <Typography size={16} lineHeight={28} className="text-balance">
              {reason}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}
