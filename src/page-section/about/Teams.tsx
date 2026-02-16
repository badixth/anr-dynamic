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
          <Typography
            as="div"
            size={40}
            sizeMobile={28}
            weight={700}
            lineHeight={48}
            lineHeightMobile={36}
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
      <div className="mt-[48px] md:mt-[64px] bg-[#0D0D0D] dark:bg-[#111111] border border-white/[0.06] rounded-[20px] overflow-hidden group hover:border-[#F2B611]/[0.2] transition-colors duration-300">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-[24px] md:gap-[40px] p-[32px] md:p-[48px] relative">
          {/* Watermark */}
          <span className="absolute top-[16px] right-[24px] text-[100px] md:text-[160px] font-bold leading-none text-[#F2B611]/[0.04] select-none pointer-events-none font-heading">
            ANR
          </span>

          {/* Circular Avatar */}
          <div className="relative flex-shrink-0">
            <div className="relative w-[140px] h-[140px] md:w-[160px] md:h-[160px] rounded-full overflow-hidden ring-[3px] ring-[#F2B611]/[0.3] ring-offset-[3px] ring-offset-[#0D0D0D] dark:ring-offset-[#111111]">
              <Image
                src={director.image}
                alt={director.name}
                fill
                className="object-cover object-[50%_15%]"
              />
            </div>
          </div>

          {/* Info */}
          <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left gap-[16px]">
            <div className="inline-flex items-center w-fit bg-[#F2B611]/[0.15] border border-[#F2B611]/[0.3] text-[#F2B611] text-[11px] md:text-[12px] font-semibold px-[12px] py-[6px] rounded-full uppercase tracking-wider">
              {director.position}
            </div>
            <Typography
              size={18}
              sizeMobile={16}
              weight={700}
              color="#fff"
              noDarkMode
              lineHeight={24}
              lineHeightMobile={22}
              heading
            >
              {director.name}
            </Typography>
            <Typography
              size={16}
              sizeMobile={16}
              weight={400}
              lineHeight={24}
              color="#B4B4B4"
              noDarkMode
            >
              {director.description}
            </Typography>
          </div>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="mt-[16px] md:mt-[24px] grid grid-cols-2 lg:grid-cols-4 gap-[16px] md:gap-[24px]">
        {teamMembers.map((member, index) => (
          <div
            key={`team_${index}`}
            className="bg-[#0D0D0D] dark:bg-[#111111] border border-white/[0.06] rounded-[16px] overflow-hidden group hover:border-[#F2B611]/[0.2] transition-colors duration-300 p-[24px] md:p-[28px] flex flex-col items-center text-center gap-[16px] md:gap-[20px]"
          >
            {/* Circular Avatar */}
            <div className="relative flex-shrink-0">
              <div className="relative w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-full overflow-hidden ring-[2px] ring-[#F2B611]/[0.3] ring-offset-[2px] ring-offset-[#0D0D0D] dark:ring-offset-[#111111] transition-all duration-300 group-hover:ring-[#F2B611]/[0.5]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-[50%_15%]"
                />
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col items-center gap-[10px] md:gap-[12px]">
              <Typography
                size={16}
                sizeMobile={14}
                weight={700}
                color="#fff"
                noDarkMode
                lineHeight={22}
                lineHeightMobile={20}
                heading
              >
                {member.name}
              </Typography>
              <div className="inline-flex items-center bg-[#F2B611]/[0.15] border border-[#F2B611]/[0.3] text-[#F2B611] text-[10px] md:text-[11px] font-semibold px-[10px] py-[4px] rounded-full uppercase tracking-wider">
                {member.position}
              </div>
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
