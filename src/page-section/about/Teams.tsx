import Tag from "@/src/component/Tag";
import Typography from "@/src/component/Typography";
import Image from "next/image";

import Team1 from "@/src/assets/images/team-1.png";
import Team2 from "@/src/assets/images/team-2.png";
import Team3 from "@/src/assets/images/team-3.png";
import Team4 from "@/src/assets/images/team-4.png";
import Team5 from "@/src/assets/images/team-5.png";

const director = {
  name: "AHMAD NAZRI BIN ABD RAZAK",
  position: "Co-Founder and Director",
  image: Team2,
  description:
    "Established ANR Dynamic Ventures with a vision to deliver trusted financial advisory services. Specializes in navigating complex regulatory landscapes and building lasting partnerships with Malaysian businesses.",
};

const teamMembers = [
  {
    name: "DR. JASSHA ABDOLLAH",
    position: "Co-Founder and Board Advisor",
    image: Team1,
    description:
      "Brings over three decades of corporate advisory experience spanning Southeast Asia and Dubai, providing strategic leadership and regional expertise to drive business transformation and regulatory excellence.",
  },
  {
    name: "HJH UMI FADZLON BINTI SEHAT",
    position: "Head of Corporate Planning",
    image: Team3,
    description:
      "Strategic leader with extensive corporate planning experience. Drives business development initiatives, shapes organizational strategy, and guides clients through complex corporate restructuring and growth challenges.",
  },
  {
    name: "HALMI HALIM",
    position: "Head of Enterprise Resource Planning",
    image: Team4,
    description:
      "Experienced principal partner providing strategic leadership and expert advisory services to drive business excellence through technology and financial strategy.",
  },
  {
    name: "MUMINA ABDULLAH",
    position: "Secretary and Administration",
    image: Team5,
    description:
      "Experienced professional overseeing secretarial functions and administrative operations to ensure smooth business processes.",
  },
];

export default function Teams() {
  return (
    <div className="bg-white dark:bg-[#070707] w-full px-[16px] md:px-[72px] py-[48px] md:py-[80px]">
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-[16px] w-full">
        <div className="flex flex-col items-start gap-[24px] w-full lg:w-[50%]">
          <Tag>
            <Typography size={14} sizeMobile={12} weight={500}>
              Leadership Team
            </Typography>
          </Tag>
          <Typography
            as="div"
            size={48}
            sizeMobile={32}
            weight={700}
            lineHeight={56}
            lineHeightMobile={41.6}
            heading
          >
            Meet Our Leadership
          </Typography>
        </div>
        <div className="flex gap-[10px] w-full lg:w-[40%]">
          <Typography size={16} weight={500} lineHeight={24}>
            Our Team specialises in assisting companies facing challenges with
            regulatory authorities, compliance issues, and changing government
            requirements. Our approach is solution-driven, practical, and
            aligned with current laws and professional standards. Whether you
            are responding to an audit query, managing tax exposure, or
            strengthening internal compliance, we work closely with you to
            resolve issues efficiently and responsibly.
          </Typography>
        </div>
      </div>

      {/* Featured Director Card */}
      <div className="mt-[48px] md:mt-[64px] bg-[#0D0D0D] dark:bg-[#111111] rounded-[16px] overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Image */}
          <div className="relative w-full lg:w-[40%] aspect-[3/4] lg:aspect-auto lg:min-h-[480px] overflow-hidden">
            <Image
              src={director.image}
              alt={director.name}
              fill
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#0D0D0D]/40" />
          </div>

          {/* Info */}
          <div className="relative flex flex-col justify-center gap-[24px] p-[32px] md:p-[48px] lg:p-[64px] w-full lg:w-[60%]">
            <span className="absolute top-[16px] right-[24px] text-[120px] md:text-[200px] font-bold leading-none text-[#F2B611]/[0.04] select-none pointer-events-none font-heading">
              A
            </span>
            <div className="relative z-10 flex flex-col gap-[24px]">
              <div className="inline-flex items-center gap-[8px] bg-gradient-to-r from-[#F2B611] to-[#D4A017] text-white text-[12px] md:text-[13px] font-semibold px-[14px] py-[8px] rounded-full w-fit uppercase tracking-wider">
                {director.position}
              </div>
              <Typography
                as="div"
                size={36}
                sizeTablet={28}
                sizeMobile={24}
                weight={700}
                lineHeight={44}
                lineHeightTablet={36}
                lineHeightMobile={32}
                color="#fff"
                noDarkMode
                heading
              >
                {director.name}
              </Typography>
              <div className="w-[60px] h-[3px] bg-[#F2B611] rounded-full" />
              <Typography
                size={18}
                sizeTablet={16}
                sizeMobile={15}
                weight={400}
                lineHeight={30}
                lineHeightTablet={26}
                lineHeightMobile={24}
                color="#B0B0B0"
                noDarkMode
              >
                {director.description}
              </Typography>
            </div>
          </div>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="mt-[32px] md:mt-[48px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
        {teamMembers.map((member, index) => (
          <div
            key={`team_${index}`}
            className="bg-[#0D0D0D] dark:bg-[#111111] rounded-[16px] overflow-hidden group"
          >
            {/* Image */}
            <div className="relative w-full aspect-[3/4] overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/30 to-transparent" />
              {/* Position badge overlaid on image */}
              <div className="absolute bottom-[16px] left-[16px] right-[16px]">
                <div className="inline-flex items-center gap-[4px] bg-[#F2B611]/[0.15] border border-[#F2B611]/[0.3] text-[#F2B611] text-[11px] font-semibold px-[10px] py-[5px] rounded-full uppercase tracking-wider">
                  {member.position}
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="p-[20px] flex flex-col gap-[12px]">
              <Typography
                size={18}
                sizeMobile={16}
                weight={700}
                color="#fff"
                noDarkMode
                lineHeight={24}
              >
                {member.name}
              </Typography>
              <Typography
                size={13}
                weight={400}
                lineHeight={20}
                color="#B4B4B4"
                noDarkMode
              >
                {member.description}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
