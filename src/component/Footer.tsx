"use client";

import Link from "next/link";
import Button from "./Button";
import Typography from "./Typography";

import LogoImg from "@/src/assets/images/Logo.png";
import Image from "next/image";
import XLogo from "@/src/assets/images/XLogo.svg";
import InstagramLogo from "@/src/assets/images/InstagramLogo.svg";
import LinkedinLogo from "@/src/assets/images/LinkedinLogo.svg";
import IcCopyRight from "@/src/assets/icons/copyRight.svg";
import Icons from "./Icons";

export default function Footer() {
  return (
    <div className="relative overflow-hidden bg-[#070707]">
      {/* Background Blur Elements */}
      <div className="absolute w-full z-0">
        <div className="absolute right-[-90%] mt-[-15%] md:mt-[20%] lg:mt-[-3%] md:right-[-15%] bg-[#C89919] blur-[30px] lg:blur-[96px] w-[300px] lg:w-[1242px] h-[80px] lg:h-[262px] rounded-[300px] lg:rounded-[1242px] rotate-[170.318deg]" />
        <div className="absolute left-[-50%] md:left-[-10%] lg:left-10 mt-[-15%] lg:mt-[-3%] bg-[#FBC737] blur-[30px] md:blur-[96px] w-[350px] md:w-[1475px] h-[80px] md:h-[308px] rounded-[350px] md:rounded-[1475px] rotate-[170.318deg]" />
        <div className="ml-[-20%] mt-[-33%] md:mt-[-40%] lg:mt-[-17%] bg-[#fff] dark:bg-[#070707] blur-[25px] md:blur-[74px] w-[500px] md:w-[3459px] h-[120px] md:h-[448px] rounded-[500px] md:rounded-[448px] rotate-[177.318deg]" />
      </div>

      {/* Main Footer Content */}
      <div className="relative px-[16px] pb-[32px] pt-[120px] md:pt-[240px] md:px-[72px] md:pb-[72px] lg:pt-[450px] z-10">
        {/* CTA Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between w-full md:pr-[80px] gap-[32px]">
          <div className="flex flex-col gap-[16px] w-full lg:w-[60%]">
            <Typography
              as="div"
              size={40}
              sizeMobile={32}
              weight={600}
              lineHeight={48}
              lineHeightMobile={41}
              heading
            >
              Connect With Our Experts Today!
            </Typography>
            <div className="text-[#fff] text-[16px] text-balance">
              From Accounting Support to Strategic Corporate Advice, our
              services are designed to help your business thrive. Let our
              experts provide the insights you need to succeed.
            </div>
          </div>
          <Link href="/contact">
            <Button variant="secondary">SCHEDULE CONSULTATION</Button>
          </Link>
        </div>

        {/* Footer Links */}
        <div className="mt-[64px] md:mt-[107px] flex flex-col lg:flex-row items-start gap-[48px] lg:gap-[72px]">
          {/* Brand Section */}
          <div className="flex flex-col gap-[24px] lg:w-[26%] shrink-0">
            <Image
              src={LogoImg}
              alt="ANR Dynamic Ventures"
              className="w-[200px] h-auto"
            />
            <div className="font-medium text-white leading-[24px]">
              <span className="text-[#F2B611]">ANR</span> Dynamic Ventures Sdn.
              Bhd. (1393044-X) <br />
              <span className="text-[#B4B4B4]">
                Empowering businesses with strategic solutions, innovative
                approaches, and comprehensive support for sustainable growth and
                success.
              </span>
            </div>
            <div className="flex items-center gap-[15px]">
              <div className="bg-[#1D1D1D] rounded-full p-[10px]">
                <XLogo className="w-full h-auto" />
              </div>
              <div className="bg-[#1D1D1D] rounded-full p-[10px]">
                <InstagramLogo className="w-full h-auto" />
              </div>
              <div className="bg-[#1D1D1D] rounded-full p-[10px]">
                <LinkedinLogo className="w-full h-auto" />
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-[40px] gap-y-[40px] md:gap-x-[64px] w-full lg:flex-1">
            <div>
              <div className="text-[#B4B4B4] mb-[24px]">Menu</div>
              <div className="flex flex-col items-start w-full gap-[16px] text-white">
                <Link href="/" className="cursor-pointer">
                  Home
                </Link>
                <Link href="/about" className="cursor-pointer">
                  About Us
                </Link>
                <Link href="/services" className="cursor-pointer">
                  Services
                </Link>
                <Link href="/careers" className="cursor-pointer">
                  Careers
                </Link>
                <Link href="/contact" className="cursor-pointer">
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <div className="text-[#B4B4B4] mb-[24px]">Services</div>
              <div className="flex flex-col items-start gap-[16px] text-white">
                <Link
                  href="/services/accounting-advisory"
                  className="cursor-pointer"
                >
                  Accounting Advisory
                </Link>
                <Link
                  href="/services/audit-assurance"
                  className="cursor-pointer"
                >
                  Audit Advisory & Compliance Assurance
                </Link>
                <Link href="/services/tax-advisory" className="cursor-pointer">
                  Tax Advisory
                </Link>
                <Link
                  href="/services/financial-reporting"
                  className="cursor-pointer"
                >
                  Financial Reporting & Compliance
                </Link>
                <Link
                  href="/services/corporate-advisory"
                  className="cursor-pointer"
                >
                  Corporate Advisory
                </Link>
                <Link href="/services/erp" className="cursor-pointer">
                  Enterprise Resource Planning (ERP)
                </Link>
              </div>
            </div>

            <div className="col-span-2 md:col-span-1">
              <div className="text-[#B4B4B4] mb-[24px]">Contact</div>
              <div className="flex flex-col items-start gap-[16px] text-white text-[16px]">
                <div>
                  UOA Business Park Unit 2-1, Level 2, The Podium, Tower 3 Jalan
                  Pengaturcara, Seksyen U1/51a 40150 Shah Alam Selangor,
                  Malaysia
                </div>
                <div>+60 18-980 4875</div>
                <div>anrdynamic@gmail.com</div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-[24px] mt-[80px] md:mt-[120px]">
          <div className="flex items-center gap-[8px]">
            <IcCopyRight className="w-5" />
            <div className="text-white font-medium">
              2025 <span className="text-[#F2B611]">ANR</span> Dynamic Ventures
              Sdn. Bhd. All rights reserved
            </div>
          </div>
          <Link
            href="/contact"
            className="flex justify-between items-center gap-[8px] text-white cursor-pointer"
          >
            CONTACT SUPPORT <Icons name="arrowRight" className="w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
