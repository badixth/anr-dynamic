import Tag from "@/src/component/Tag";
import Typography from "@/src/component/Typography";
import { companyInfo } from "@/src/data/company";

export default function WhoWeWorkWith() {
  return (
    <div className="bg-white dark:bg-[#070707] py-[48px] md:py-[80px] px-[16px] md:px-[72px]">
      <div className="flex flex-col items-center text-center gap-[24px] mb-[48px]">
        <Tag>
          <Typography size={14} sizeMobile={12} weight={500}>
            Who We Work With
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
          Serving Businesses Across Malaysia
        </Typography>
        <Typography size={16} lineHeight={24} className="max-w-[800px]">
          We partner with diverse organizations, from family-owned businesses to established corporations, providing tailored advisory services that meet their unique needs.
        </Typography>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] max-w-[1200px] mx-auto">
        {companyInfo.clientTypes.map((type, idx) => (
          <div
            key={idx}
            className="bg-[#F5F5F5] dark:bg-[#1D1D1D] p-[24px] rounded-[12px] text-center flex flex-col items-center justify-center gap-[12px]"
          >
            <div className="bg-[#F2B611] dark:bg-[#2A2A8A] rounded-full w-[56px] h-[56px] flex items-center justify-center mb-[8px]">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="7" r="4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <Typography size={16} weight={600} lineHeight={24}>
              {type}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}
