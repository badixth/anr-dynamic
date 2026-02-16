import Tag from "@/src/component/Tag";
import Typography from "@/src/component/Typography";
import { companyInfo } from "@/src/data/company";

export default function Values() {
  return (
    <div className="bg-white dark:bg-[#070707] py-[48px] md:py-[80px] px-[16px] md:px-[72px]">
      <div className="flex flex-col items-center text-center gap-[24px] mb-[64px]">
        <Tag>
          <Typography size={14} sizeMobile={12} weight={500}>
            Our Values
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
          Built on Integrity, Excellence, Collaboration & Innovation
        </Typography>
        <Typography size={16} lineHeight={24} className="max-w-[800px] text-balance">
          Our core values guide every interaction, decision, and service we
          provide. They define who we are and how we serve our clients.
        </Typography>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
        {companyInfo.values.map((value, idx) => (
          <div
            key={idx}
            className="bg-[#F5F5F5] dark:bg-[#1D1D1D] p-[32px] rounded-[12px] flex flex-col items-start gap-[16px]"
          >
            <div className="bg-[#F2B611] rounded-full w-[48px] h-[48px] flex items-center justify-center mb-[8px]">
              <Typography size={24} weight={700} color="#fff" noDarkMode>
                {value.title.charAt(0)}
              </Typography>
            </div>
            <Typography size={24} weight={600} heading>
              {value.title}
            </Typography>
            <Typography
              size={14}
              lineHeight={22}
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
