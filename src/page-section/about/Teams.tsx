import Carousel, { member } from "@/src/component/Carousel";
import Tag from "@/src/component/Tag";
import Typography from "@/src/component/Typography";

import Team1 from "@/src/assets/images/team-1.png";
import Team2 from "@/src/assets/images/team-2.png";
import Team3 from "@/src/assets/images/team-3.png";
import Team4 from "@/src/assets/images/team-4.png";
import Team5 from "@/src/assets/images/team-5.png";

const members: member[] = [
  {
    name: "JAZMAN SHAHAR ABDOLLAH",
    experience: "Co-Founder and Board Advisor",
    image: Team1,
    position: "Co-Founder and Board Advisor",
    description:
      "Brings over three decades of corporate advisory experience spanning Southeast Asia and Dubai, providing strategic leadership and regional expertise to drive business transformation and regulatory excellence.",
  },
  {
    name: "AHMAD NAZRI BIN ABD RAZAK",
    experience: "Co-Founder and Director",
    image: Team2,
    position: "Co-Founder and Director",
    description:
      "Established ANR Dynamic Ventures with a vision to deliver trusted financial advisory services. Specializes in navigating complex regulatory landscapes and building lasting partnerships with Malaysian businesses.",
  },
  {
    name: "HJH UMI FADZLON BINTI SEHAT",
    experience: "Head of Corporate Planning",
    image: Team3,
    position: "Head of Corporate Planning",
    description:
      "Experienced professional overseeing all secretarial functions, client coordination, and operational excellence. Ensures seamless engagement processes and maintains the highest standards of confidentiality and professionalism.",
  },
  {
    name: "HALMI HALIM",
    experience: "Head of Enterprise Resource Planning",
    image: Team4,
    position: "Head of Enterprise Resource Planning",
    description:
      "Strategic leader with extensive corporate planning experience. Drives business development initiatives, shapes organizational strategy, and guides clients through complex corporate restructuring and growth challenges.",
  },
  {
    name: "MUMINA ABDULLAH",
    experience: "Secretary and Administration",
    image: Team5,
    position: "Secretary and Administration",
    description:
      "Leads ERP implementation and digital transformation initiatives. Combines deep technical expertise with business acumen to deliver integrated systems that enhance operational efficiency and support sustainable growth.",
  },
];

export default function Teams() {
  return (
    <div className="bg-white dark:bg-[#070707] w-full">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-[16px] w-full px-[16px] md:px-[72px] pt-[48px] md:pt-[60px]">
        <div className="flex flex-col items-start gap-[24px] w-full lg:w-[50%]">
          <Tag>
            <Typography size={14} sizeMobile={12} weight={500}>
              Leadership Team
            </Typography>
          </Tag>
          <div className="text-[32px] md:text-[48px] font-bold leading-[41.6px] md:leading-[56px] text-[#070707] dark:text-[#fff]">
            Experienced Professionals Committed to Your Success
          </div>
        </div>
        <div className="flex gap-[10px] w-full lg:w-[40%]">
          <Typography size={16} weight={500} lineHeight={24}>
            Our leadership brings decades of combined experience in accounting,
            audit, tax advisory, and business strategy to serve your compliance
            and financial management needs.
          </Typography>
        </div>
      </div>
      <div className="mt-[60px] md:mt-[80px] pl-[16px] md:pl-[72px] pb-[48px] md:pb-[80px]">
        <Carousel items={members} />
      </div>
    </div>
  );
}
