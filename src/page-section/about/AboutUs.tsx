"use client";

import Typography from "@/src/component/Typography";

export default function AboutUs() {
  return (
    <div className="bg-white dark:bg-[#070707] w-full px-[16px] md:px-[72px] py-[48px] md:py-[80px] flex flex-col items-center">
      {/* Heading */}
      <Typography
        as="div"
        size={40}
        sizeMobile={28}
        weight={700}
        lineHeight={48}
        lineHeightMo
        color="#fff"
        heading
        className="mb-[40px] md:mb-[56px]"
      >
        About Us
      </Typography>

      {/* Body text */}
      <div className="w-full max-w-[900px] flex flex-col gap-[28px] md:gap-[36px] text-center text-balance">
        {/* Paragraph 1 */}
        <Typography
          size={28}
          sizeMobile={20}
          lineHeight={38}
          lineHeightMobile={30}
          weight={400}
          color="#F2B611"
          noDarkMode
          weight={700}
          heading
        >
          ANR Dynamic Ventures Sdn Bhd is a specialized accounting, audit and
          tax advisory firm dedicated to helping Malaysian businesses navigate
          complex regulatory requirements and resolve critical financial
          compliance matters with accuracy, integrity, and expert guidance.
        </Typography>

        {/* Paragraph 2 — cost savings highlight */}
        <Typography
          size={18}
          sizeMobile={16}
          lineHeight={32}
          lineHeightMobile={28}
          weight={400}
          color="#444444"
          darkColor="#CCCCCC"
        >
          We leverage our proprietary in-house software to deliver efficient,
          reliable solutions that not only address compliance issues promptly
          but also provide cost savings of approximately 10–20% compared to
          prevailing market fees.
        </Typography>

        {/* Paragraph 3 — advisory services */}
        <Typography
          size={18}
          sizeMobile={16}
          lineHeight={32}
          lineHeightMobile={28}
          weight={400}
          color="#444444"
          darkColor="#CCCCCC"
        >
          Beyond our core services, we offer comprehensive corporate advisory
          support including mergers and acquisitions, business valuation,
          business turnaround and optimisation planning, grants and incentives
          application, LHDN tax regularisation and negotiation, as well as SSM
          compliance and rectification.
        </Typography>

        {/* Paragraph 4 — closing commitment */}
        <Typography
          size={18}
          sizeMobile={16}
          lineHeight={32}
          lineHeightMobile={28}
          weight={400}
          color="#444444"
          darkColor="#CCCCCC"
        >
          We are committed to delivering practical, strategic, and
          results-driven solutions, and we welcome businesses seeking a trusted
          partner to strengthen their financial governance and long-term growth.
        </Typography>
      </div>
    </div>
  );
}
