"use client";

import Typography from "@/src/component/Typography";

// Isocon icon imports
import FinanceIcon from "@/src/assets/icons/isocons/finance-17.svg";
import GroupsIcon from "@/src/assets/icons/isocons/groups-1.svg";
import BarChartIcon from "@/src/assets/icons/isocons/bar-chart-13.svg";
import DataTableIcon from "@/src/assets/icons/isocons/data-table-18.svg";
import AssuredWorkloadIcon from "@/src/assets/icons/isocons/assured-workload-11.svg";
import EditorChoiceIcon from "@/src/assets/icons/isocons/editor-choice-7.svg";
import MountainFlagIcon from "@/src/assets/icons/isocons/mountain-flag-8.svg";
import FinanceModeIcon from "@/src/assets/icons/isocons/finance-mode-16.svg";
import PartnerExchangeIcon from "@/src/assets/icons/isocons/partner-exchange-6.svg";
import ShieldPersonIcon from "@/src/assets/icons/isocons/shield-person-12.svg";
import ActionKeyIcon from "@/src/assets/icons/isocons/action-key-0.svg";
import GroupedBarChartIcon from "@/src/assets/icons/isocons/grouped-bar-chart-15.svg";
import LocalLibraryIcon from "@/src/assets/icons/isocons/local-library-20.svg";
import GavelIcon from "@/src/assets/icons/isocons/gavel-3.svg";
import WorkspacePremiumIcon from "@/src/assets/icons/isocons/workspace-premium-2.svg";
import DomainIcon from "@/src/assets/icons/isocons/domain-19.svg";
import DiamondIcon from "@/src/assets/icons/isocons/diamond-4.svg";
import DonutSmallIcon from "@/src/assets/icons/isocons/donut-small-14.svg";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  finance: FinanceIcon,
  groups: GroupsIcon,
  "bar-chart": BarChartIcon,
  "data-table": DataTableIcon,
  "assured-workload": AssuredWorkloadIcon,
  "editor-choice": EditorChoiceIcon,
  "mountain-flag": MountainFlagIcon,
  "finance-mode": FinanceModeIcon,
  "partner-exchange": PartnerExchangeIcon,
  "shield-person": ShieldPersonIcon,
  "action-key": ActionKeyIcon,
  "grouped-bar-chart": GroupedBarChartIcon,
  "local-library": LocalLibraryIcon,
  gavel: GavelIcon,
  "workspace-premium": WorkspacePremiumIcon,
  domain: DomainIcon,
  diamond: DiamondIcon,
  "donut-small": DonutSmallIcon,
};

type FeatureItem = string | { title: string; description: string };

type ServiceDetailProps = {
  tag: string;
  description: string;
  features: FeatureItem[];
  featureIcons?: string[];
  whyChooseItems?: {
    title: string;
    description: string;
    icon?: string;
  }[];
};

export default function ServiceDetail({
  tag,
  description,
  features,
  featureIcons,
  whyChooseItems,
}: ServiceDetailProps) {
  const hasDetailedFeatures = features.some((f) => typeof f === "object");

  const gridCols = hasDetailedFeatures
    ? "md:grid-cols-2 lg:grid-cols-3"
    : features.length <= 2
      ? "md:grid-cols-2"
      : features.length === 3
        ? "md:grid-cols-3"
        : features.length === 5
          ? "md:grid-cols-2 lg:grid-cols-3"
          : "md:grid-cols-2";

  return (
    <div className="bg-white dark:bg-[#070707] py-[48px] md:py-[80px] px-[16px] md:px-[72px]">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center gap-[24px] mb-[48px] md:mb-[64px]">
        <Typography as="div" size={40} sizeMobile={28} weight={700} lineHeight={48} lineHeightMobile={36} heading>
          {tag}
        </Typography>
        <Typography size={16} lineHeight={24} className="max-w-[800px] text-balance">
          {description}
        </Typography>
      </div>

      {/* Features Grid */}
      <div className={`grid grid-cols-1 ${gridCols} gap-[16px] md:gap-[20px] max-w-[1100px] mx-auto mb-[64px] md:mb-[80px]`}>
        {features.map((feature, idx) => {
          const isDetailed = typeof feature === "object";
          const iconKey = featureIcons?.[idx];
          const Icon = iconKey ? iconMap[iconKey] : null;

          return (
            <div
              key={idx}
              className="relative bg-[#0D0D0D] dark:bg-[#111111] border border-white/[0.06] rounded-[16px] overflow-hidden flex flex-col items-center text-center gap-[12px] p-[28px] md:p-[32px] group hover:border-[#F2B611]/[0.2] transition-colors duration-300"
            >
              {/* Gold accent top line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#F2B611]/[0.5] to-transparent" />

              {/* Icon */}
              {Icon && (
                <div className="w-[48px] h-[48px] md:w-[56px] md:h-[56px] flex items-center justify-center mb-[4px]">
                  <Icon className="w-[44px] h-[44px] md:w-[52px] md:h-[52px]" />
                </div>
              )}

              <Typography
                size={isDetailed ? 18 : 16}
                weight={600}
                lineHeight={isDetailed ? 28 : 24}
                color="#fff"
                noDarkMode
              >
                {isDetailed ? feature.title : feature}
              </Typography>

              {isDetailed && (
                <Typography
                  size={14}
                  sizeMobile={14}
                  lineHeight={22}
                  color="#B4B4B4"
                  noDarkMode
                  className="text-balance"
                >
                  {feature.description}
                </Typography>
              )}
            </div>
          );
        })}
      </div>

      {/* Why Choose ANR Section */}
      {whyChooseItems && whyChooseItems.length > 0 && (
        <div className="max-w-[1100px] mx-auto">
          <div className="mb-[32px] md:mb-[48px] text-center">
            <Typography as="div" size={32} sizeMobile={28} weight={600} lineHeight={40} heading>
              Why Choose <span className="text-[#F2B611]">ANR</span> for {tag}
            </Typography>
          </div>
          <div className={`grid grid-cols-1 ${whyChooseItems.length % 3 === 0 ? "md:grid-cols-3" : "md:grid-cols-2"} gap-[20px] md:gap-[24px]`}>
            {whyChooseItems.map((item, idx) => {
              const Icon = item.icon ? iconMap[item.icon] : null;

              return (
                <div
                  key={idx}
                  className="bg-[#F5F5F5] dark:bg-[#1D1D1D] rounded-[16px] p-[28px] md:p-[32px] flex flex-col items-center text-center gap-[12px]"
                >
                  {/* Numbered badge */}
                  <div className="inline-flex items-center bg-[#F2B611]/[0.12] border border-[#F2B611]/[0.25] text-[#F2B611] text-[12px] font-bold px-[12px] py-[5px] rounded-full tracking-widest">
                    {String(idx + 1).padStart(2, "0")}
                  </div>

                  {Icon && (
                    <div className="w-[48px] h-[48px] flex items-center justify-center">
                      <Icon className="w-[44px] h-[44px]" />
                    </div>
                  )}

                  <Typography size={20} weight={600} lineHeight={28}>
                    {item.title}
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
                    {item.description}
                  </Typography>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
