import Tag from "@/src/component/Tag";
import Typography from "@/src/component/Typography";
import Image from "next/image";

import Team1 from "@/src/assets/images/team-1.png";
import Team2 from "@/src/assets/images/team-2.png";
import Team3 from "@/src/assets/images/team-3.png";
import Team4 from "@/src/assets/images/team-4.png";
import Team5 from "@/src/assets/images/team-5.png";

const director = {
  name: "DR. JASSHA ABDOLLAH",
  position: "Co-Founder and Board Advisor",
  image: Team1,
  description:
    "Brings over three decades of corporate advisory experience spanning Southeast Asia and Dubai, providing strategic leadership and regional expertise to drive business transformation and regulatory excellence.",
};

const teamMembers = [
  {
    name: "AHMAD NAZRI BIN ABD RAZAK",
    position: "Co-Founder and Director",
    image: Team2,
    description:
      "Established ANR Dynamic Ventures with a vision to deliver trusted financial advisory services. Specializes in navigating complex regulatory landscapes and building lasting partnerships with Malaysian businesses.",
  },
  {
    name: "HJH UMI FADZLON BINTI SEHAT",
    position: "Head of Corporate Strategy",
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
      <div className="flex flex-col items-center text-center gap-[24px] w-full">
        <div className="flex flex-col items-center gap-[24px]">
          <Tag>
            <Typography size={14} sizeMobile={12} weight={500}>
              Leadership Team
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
            Meet Our Leadership
          </Typography>
        </div>
        <div className="max-w-[700px]">
          <Typography size={16} weight={500} lineHeight={24} className="text-balance">
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
      <div className="mt-[48px] md:mt-[64px] bg-[#0D0D0D] dark:bg-[#111111] border border-white/[0.06] rounded-[20px] overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Image */}
          <div className="relative w-full lg:w-[25%] aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
            <Image
              src={director.image}
              alt={director.name}
              fill
              className="object-cover object-[50%_15%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#0D0D0D]/60" />
          </div>

          {/* Info */}
          <div className="relative flex flex-col justify-center gap-[24px] p-[32px] md:p-[48px] lg:p-[64px] w-full lg:w-[75%]">
            <span className="absolute top-[16px] right-[24px] text-[120px] md:text-[200px] font-bold leading-none text-[#F2B611]/[0.04] select-none pointer-events-none font-heading">
              ANR
            </span>
            <div className="relative z-10 flex flex-col gap-[24px]">
              <div className="inline-flex items-center w-fit bg-[#F2B611]/[0.15] border border-[#F2B611]/[0.3] text-[#F2B611] text-[11px] md:text-[12px] font-semibold px-[12px] py-[6px] rounded-full uppercase tracking-wider">
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
                size={13}
                sizeMobile={12}
                weight={400}
                lineHeight={20}
                lineHeightMobile={18}
                color="#B4B4B4"
                noDarkMode
                className="max-w-[480px] text-balance"
              >
                {director.description}
              </Typography>
            </div>
          </div>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="mt-[32px] md:mt-[48px] grid grid-cols-2 lg:grid-cols-4 gap-[16px] md:gap-[24px]">
        {teamMembers.map((member, index) => (
          <div
            key={`team_${index}`}
            className="bg-[#0D0D0D] dark:bg-[#111111] border border-white/[0.06] rounded-[16px] overflow-hidden group hover:border-[#F2B611]/[0.2] transition-colors duration-300"
          >
            {/* Image */}
            <div className="relative w-full aspect-[4/5] overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover object-[50%_15%] transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/20 to-transparent" />
              {/* Position badge overlaid on image */}
              <div className="absolute bottom-[12px] left-[12px] right-[12px] md:bottom-[16px] md:left-[16px] md:right-[16px]">
                <div className="inline-flex items-center bg-[#F2B611]/[0.15] border border-[#F2B611]/[0.3] text-[#F2B611] text-[11px] md:text-[12px] font-semibold px-[12px] py-[6px] rounded-full uppercase tracking-wider">
                  {member.position}
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="p-[16px] md:p-[20px] flex flex-col gap-[8px] md:gap-[12px]">
              <Typography
                size={16}
                sizeMobile={14}
                weight={700}
                color="#fff"
                noDarkMode
                lineHeight={22}
                lineHeightMobile={20}
              >
                {member.name}
              </Typography>
              <Typography
                size={13}
                sizeMobile={12}
                weight={400}
                lineHeight={20}
                lineHeightMobile={18}
                color="#B4B4B4"
                noDarkMode
                className="text-balance"
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
