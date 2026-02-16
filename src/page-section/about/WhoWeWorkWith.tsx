import Tag from "@/src/component/Tag";
import Typography from "@/src/component/Typography";

import GroupsIcon from "@/src/assets/icons/isocons/groups-1.svg";
import GavelIcon from "@/src/assets/icons/isocons/gavel-3.svg";
import MountainFlagIcon from "@/src/assets/icons/isocons/mountain-flag-8.svg";
import DomainIcon from "@/src/assets/icons/isocons/domain-19.svg";

const clientTypes = [
  {
    label: "Family-Owned Businesses",
    Icon: GroupsIcon,
  },
  {
    label: "Companies Undergoing Restructuring or Regulatory Review",
    Icon: GavelIcon,
  },
  {
    label: "SMEs and Growing Businesses",
    Icon: MountainFlagIcon,
  },
  {
    label: "Established Corporations",
    Icon: DomainIcon,
  },
];

export default function WhoWeWorkWith() {
  return (
    <div className="bg-white dark:bg-[#070707] py-[48px] md:py-[80px] px-[16px] md:px-[72px]">
      <div className="flex flex-col items-center text-center gap-[24px] mb-[48px] md:mb-[64px]">
        <Tag>
          <Typography size={14} sizeMobile={12} weight={500}>
            Who We Work With
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
          Serving Businesses Across Malaysia
        </Typography>
        <Typography size={16} lineHeight={24} className="max-w-[800px] text-balance">
          We partner with diverse organizations, from family-owned businesses to
          established corporations, providing tailored advisory services that
          meet their unique needs.
        </Typography>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px] md:gap-[24px] max-w-[1200px] mx-auto">
        {clientTypes.map((item, idx) => (
          <div
            key={idx}
            className="relative bg-[#0D0D0D] dark:bg-[#111111] border border-white/[0.06] p-[32px] rounded-[16px] text-center flex flex-col items-center justify-center gap-[16px] overflow-hidden group hover:border-[#F2B611]/[0.2] transition-colors duration-300"
          >
            <div className="w-[64px] h-[64px] md:w-[72px] md:h-[72px] flex items-center justify-center">
              <item.Icon className="w-[56px] h-[56px] md:w-[64px] md:h-[64px]" />
            </div>
            <Typography
              size={16}
              sizeMobile={15}
              weight={600}
              lineHeight={24}
              color="#fff"
              noDarkMode
            >
              {item.label}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}
