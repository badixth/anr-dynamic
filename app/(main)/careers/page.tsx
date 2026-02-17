import { Suspense, lazy } from "react";
import Typography from "@/src/component/Typography";
import Button from "@/src/component/Button";
import Link from "next/link";
import HeroBackground from "@/src/component/HeroBackground";

const Testimonials = lazy(() => import("@/src/page-section/Testimonials"));

export default function CareersPage() {
  const whyWorkItems = [
    {
      title: "Professional Growth",
      description:
        "Work with diverse clients across multiple industries, continuously expanding your technical expertise and industry knowledge. We support professional certification (ACCA, MICPA, CPA) and ongoing learning opportunities.",
    },
    {
      title: "Impactful Work",
      description:
        "Solve critical business challenges and help Malaysian companies navigate complex compliance issues. Your work directly influences business success and regulatory compliance.",
    },
    {
      title: "Collaborative Environment",
      description:
        "Join a supportive team culture that values mentorship, knowledge sharing, and work-life balance. We believe in empowering our people and fostering long-term career development.",
    },
    {
      title: "Career Advancement",
      description:
        "Clear progression paths from associate to manager to partner level, with performance-based recognition, competitive compensation, and opportunities to take on leadership responsibilities.",
    },
  ];

  const currentOpenings = [
    {
      title: "Tax Associate",
      experience: "1-3 years",
      qualifications: "Degree in Accounting/Taxation, tax knowledge",
      description:
        "Prepare tax computations, assist with LHDN audits, conduct tax research, and support tax planning initiatives for diverse clients.",
    },
    {
      title: "Accounting Executive",
      experience: "2-4 years",
      qualifications: "Degree in Accounting, bookkeeping/reporting experience",
      description:
        "Manage full-cycle bookkeeping, prepare financial reports, handle payroll processing, and implement cloud accounting solutions.",
    },
  ];

  const applicationSteps = [
    {
      number: "01",
      title: "Submit Resume",
      description:
        "Email your resume and cover letter to careers@anrdynamic.com with the position title in the subject line.",
    },
    {
      number: "02",
      title: "Initial Screening",
      description:
        "Our team reviews your application and contacts qualified candidates within 5 business days.",
    },
    {
      number: "03",
      title: "Interview",
      description:
        "Meet with our team to discuss your experience, technical skills, and career goals (1-2 rounds).",
    },
    {
      number: "04",
      title: "Reference Checks",
      description:
        "We conduct professional reference checks to verify your experience and qualifications.",
    },
    {
      number: "05",
      title: "Offer & Onboarding",
      description:
        "Receive your offer letter, complete onboarding paperwork, and join our team!",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <HeroBackground>
        <div className="flex flex-col items-center text-center gap-[24px]">
          <Typography
            as="div"
            color="#fff"
            size={64}
            sizeTablet={48}
            sizeMobile={32}
            weight={600}
            lineHeight={76}
            lineHeightTablet={58}
            lineHeightMobile={42}
            letterSpacing={-2.16}
            letterSpacingMobile={-1.2}
            noDarkMode
            heading
          >
            Join Our Team
          </Typography>
          <Typography
            noDarkMode
            color="#F2B611"
            size={20}
            sizeMobile={16}
            weight={600}
            className="max-w-[600px]"
          >
            Build Your Career in Accounting & Advisory
          </Typography>
          <Typography
            noDarkMode
            color="#fff"
            size={18}
            weight={700}
            className="max-w-[700px]"
          >
            We're looking for talented professionals passionate about helping
            Malaysian businesses navigate complex financial and regulatory
            challenges.
          </Typography>
          <Link href="#openings">
            <Button variant="primary" className="mt-[16px]">
              VIEW OPEN POSITIONS
            </Button>
          </Link>
        </div>
      </HeroBackground>

      {/* Why Work With ANR Section */}
      <div className="bg-white dark:bg-[#070707] py-[48px] md:py-[80px] px-[16px] md:px-[72px]">
        <div className="flex flex-col items-center text-center gap-[24px] mb-[64px]">
          <Typography
            as="div"
            size={40}
            sizeMobile={28}
            weight={700}
            lineHeight={48}
            lineHeightMobile={36}
            heading
          >
            Why Work With <span className="text-[#F2B611]">ANR</span> Dynamic
            Ventures
          </Typography>
          <Typography size={16} lineHeight={24} className="max-w-[800px]">
            Join a team that values expertise, integrity, and professional
            growth. We offer meaningful work, career development opportunities,
            and a collaborative environment where your contributions make a real
            difference.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px]">
          {whyWorkItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F5F5F5] dark:bg-[#1D1D1D] p-[32px] rounded-[12px]"
            >
              <Typography size={24} weight={600} heading className="mb-[16px]">
                {item.title}
              </Typography>
              <Typography
                size={16}
                sizeMobile={16}
                lineHeight={24}
                color="#666666"
                darkColor="#D4D4D4"
                noDarkMode
              >
                {item.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      {/* Current Openings Section */}
      <div
        id="openings"
        className="bg-[#F5F5F5] dark:bg-[#0D0D0D] py-[48px] md:py-[80px] px-[16px] md:px-[72px]"
      >
        <div className="flex flex-col items-center text-center gap-[24px] mb-[64px]">
          <Typography
            as="div"
            size={40}
            sizeMobile={28}
            weight={700}
            lineHeight={48}
            lineHeightMobile={36}
            heading
          >
            Open Positions
          </Typography>
          <Typography size={16} lineHeight={24} className="max-w-[800px]">
            Explore our current openings and find the right fit for your skills
            and career goals. Don't see a perfect match? We're always interested
            in connecting with talented accounting professionals.
          </Typography>
        </div>

        <div className="grid grid-cols-1 gap-[24px] max-w-[900px] mx-auto">
          {currentOpenings.map((job, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#1D1D1D] p-[32px] rounded-[12px]"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-[16px] mb-[16px]">
                <div>
                  <Typography
                    size={28}
                    sizeMobile={24}
                    weight={600}
                    heading
                    className="mb-[8px]"
                  >
                    {job.title}
                  </Typography>
                  <div className="flex flex-wrap gap-[12px]">
                    <span className="bg-[#F2B611]/[0.15] border border-[#F2B611]/[0.3]  text-white px-[12px] py-[4px] rounded-[6px] text-sm font-medium">
                      {job.experience}
                    </span>
                    <span className="bg-[#E8E8E8] dark:bg-[#2D2D2D] px-[12px] py-[4px] rounded-[6px] text-sm font-medium text-[#070707] dark:text-[#fff]">
                      {job.qualifications}
                    </span>
                  </div>
                </div>
                <Link href="/contact">
                  <Button variant="primary" className="whitespace-nowrap">
                    APPLY NOW
                  </Button>
                </Link>
              </div>
              <Typography
                size={16}
                sizeMobile={16}
                lineHeight={24}
                color="#666666"
                darkColor="#D4D4D4"
                noDarkMode
              >
                {job.description}
              </Typography>
            </div>
          ))}
        </div>

        <div className="mt-[48px]  text-center">
          <Typography size={16} weight={500} className="mb-[16px]">
            Don't see the right position?
          </Typography>
          <Typography
            size={16}
            sizeMobile={16}
            lineHeight={24}
            color="#666666"
            darkColor="#D4D4D4"
            noDarkMode
            className="mb-[24px]"
          >
            We're always interested in connecting with talented accounting
            professionals. <br />
            Submit your resume for future opportunities.
          </Typography>
          <Link href="/contact" className="flex justify-center">
            <Button variant="secondary">SEND YOUR RESUME</Button>
          </Link>
        </div>
      </div>

      {/* Application Process Section */}
      <div className="bg-white dark:bg-[#070707] py-[48px] md:py-[80px] px-[16px] md:px-[72px]">
        <div className="flex flex-col items-center text-center gap-[24px] mb-[64px]">
          <Typography
            as="div"
            size={40}
            sizeMobile={28}
            weight={700}
            lineHeight={48}
            lineHeightMobile={36}
            heading
          >
            How to Apply
          </Typography>
          <Typography size={16} lineHeight={24} className="max-w-[800px]">
            Our hiring process is designed to be straightforward and respectful
            of your time. Here&apos;s what to expect when you apply to join the{" "}
            <span className="text-[#F2B611]">ANR</span> team.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[24px]">
          {applicationSteps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-start gap-[16px]">
              <div className="bg-[#F2B611] text-white w-[48px] h-[48px] rounded-full flex items-center justify-center font-bold text-[18px]">
                {step.number}
              </div>
              <Typography size={18} weight={600}>
                {step.title}
              </Typography>
              <Typography
                size={16}
                sizeMobile={16}
                lineHeight={24}
                color="#666666"
                darkColor="#D4D4D4"
                noDarkMode
              >
                {step.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <Suspense fallback={<div>Loading...</div>}>
        <Testimonials />
      </Suspense>

      {/* CTA Section */}
      <div className="bg-[#070707] dark:bg-[#1D1D1D] py-[64px] px-[16px] md:px-[72px]">
        <div className="flex flex-col items-center text-center gap-[24px]">
          <Typography
            as="div"
            color="#fff"
            noDarkMode
            size={48}
            sizeMobile={32}
            weight={700}
            lineHeight={56}
            lineHeightMobile={41.6}
            heading
          >
            Ready to Join Our Team?
          </Typography>
          <Typography
            noDarkMode
            color="#D4D4D4"
            size={16}
            lineHeight={24}
            className="max-w-[700px]"
          >
            Take the next step in your accounting career. Send your resume to
            careers@anrdynamic.com or contact us to learn more about current
            opportunities at <span className="text-[#F2B611]">ANR</span> Dynamic
            Ventures.
          </Typography>
          <div className="flex flex-col md:flex-row gap-[16px] mt-[16px]">
            <Link href="/contact">
              <Button variant="primary">APPLY NOW</Button>
            </Link>
            <a href="mailto:careers@anrdynamic.com">
              <Button variant="secondary">EMAIL YOUR RESUME</Button>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
