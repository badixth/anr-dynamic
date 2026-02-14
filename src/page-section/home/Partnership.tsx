import Tag from "@/src/component/Tag";
import Typography from "@/src/component/Typography";

export default function Partnership() {
  const partnerships = [
    {
      number: "01",
      title: "TRUSTED PARTNERSHIPS",
      subtitle: "Building Long-Term Client Relationships",
      description: "Our approach is grounded in trust, transparency, and a shared commitment to your success.",
      points: [
        "Open and professional communication",
        "Confidential handling of sensitive matters",
        "Independent and objective advice",
        "A shared commitment to compliance, governance, and integrity"
      ]
    },
    {
      number: "02",
      title: "DEEP REGIONAL EXPERTISE",
      subtitle: "Local Knowledge with Professional Standards",
      description: "Our experience across multiple industries enables us to navigate complex regulatory environments effectively.",
      points: [
        "Interpret and apply local regulations and government requirements accurately",
        "Address issues arising from regulatory reviews, tax audits, and compliance assessments",
        "Advise clients in a manner that is practical, defensible, and aligned with Malaysian standards"
      ]
    },
    {
      number: "03",
      title: "END-TO-END ADVISORY",
      subtitle: "Comprehensive Support Throughout Your Business Journey",
      description: "We work closely with clients to provide complete advisory solutions from diagnosis to implementation.",
      points: [
        "Diagnose accounting, audit, tax, and compliance issues",
        "Advise on regulatory requirements and appropriate responses",
        "Assist in engagement with relevant authorities and stakeholders",
        "Implement corrective measures and strengthen internal controls",
        "Support ongoing compliance and governance improvements"
      ]
    }
  ];

  return (
    <div className="bg-white dark:bg-[#070707] py-[48px] md:py-[80px] px-[16px] md:px-[72px]">
      <div className="flex flex-col items-center text-center gap-[24px] mb-[64px]">
        <Tag>
          <Typography size={14} sizeMobile={12} weight={500}>
            Why Choose Us
          </Typography>
        </Tag>
        <Typography
          as="div"
          size={48}
          sizeMobile={32}
          weight={700}
          lineHeight={56}
          lineHeightMobile={41.6}
        >
          Why Partner With ANR Dynamic Ventures
        </Typography>
        <Typography size={16} lineHeight={24} className="max-w-[800px]">
          We don't just provide services—we build lasting partnerships based on trust, expertise, and comprehensive support for your business success.
        </Typography>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[32px] md:gap-[40px]">
        {partnerships.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#F5F5F5] dark:bg-[#1D1D1D] p-[32px] md:p-[40px] rounded-[16px] flex flex-col gap-[24px]"
          >
            {/* Number Badge */}
            <div className="bg-[#F2B611] text-white w-[56px] h-[56px] rounded-full flex items-center justify-center font-bold text-[20px] mb-[8px]">
              {item.number}
            </div>

            {/* Title */}
            <div>
              <Typography size={24} sizeMobile={20} weight={700} className="mb-[8px]">
                {item.title}
              </Typography>
              <Typography size={16} weight={600} color="#F2B611" noDarkMode className="dark:text-[#5B8EFF]">
                {item.subtitle}
              </Typography>
            </div>

            {/* Description */}
            <Typography size={14} lineHeight={24} color="#666666" noDarkMode className="dark:text-[#B2B2B2]">
              {item.description}
            </Typography>

            {/* Points List */}
            <div className="flex flex-col gap-[12px]">
              <Typography size={14} weight={600} color="#070707" noDarkMode className="dark:text-[#fff] uppercase tracking-wide">
                Our Approach:
              </Typography>
              {item.points.map((point, pointIdx) => (
                <div key={pointIdx} className="flex items-start gap-[12px]">
                  <div className="bg-[#F2B611] rounded-full w-[6px] h-[6px] flex-shrink-0 mt-[8px]"></div>
                  <Typography size={14} lineHeight={22} color="#666666" noDarkMode className="dark:text-[#B2B2B2]">
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
