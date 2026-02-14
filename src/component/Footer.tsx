"use client";

import Link from "next/link";
import Button from "./Button";

import Logo from "@/src/assets/images/Logo.svg";
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
        <div className="absolute right-[-90%] mt-[-15%] md:mt-[20%] lg:mt-[-3%] md:right-[-15%] bg-[#873AE3] blur-[45px] lg:blur-[96px] w-[570.659px] lg:w-[1242px] h-[120.38px] lg:h-[262px] rounded-[570.659px] lg:rounded-[1242px] rotate-[170.318deg]" />
        <div className="absolute left-[-50%] md:left-[-10%] lg:left-10 mt-[-15%] lg:mt-[-3%] bg-[#F2B611] blur-[45px] md:blur-[96px] w-[678.357px] md:w-[1475px] h-[141.516px] md:h-[308px] rounded-[678.357px] md:rounded-[1475px] rotate-[170.318deg]" />
        <div className="ml-[-20%] mt-[-33%] md:mt-[-40%] lg:mt-[-17%] bg-[#fff] dark:bg-[#070707] blur-[35px] md:blur-[74px] w-[1589.28px] md:w-[3459px] h-[202.956px] md:h-[448px] rounded-[1589.28px] md:rounded-[448px] rotate-[177.318deg]" />
      </div>

      {/* Main Footer Content */}
      <div className="relative px-[16px] pb-[32px] pt-[120px] md:pt-[240px] md:px-[72px] md:pb-[72px] lg:pt-[450px] z-10">
        {/* CTA Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between w-full md:pr-[80px] gap-[32px]">
          <div className="flex flex-col gap-[16px] w-full lg:w-[60%]">
            <div className="text-[#fff] text-[32px] md:text-[40px] font-semibold leading-[41px] md:leading-[48px]">
              Facing Financial Compliance Issues? Get Expert Guidance Today.
            </div>
            <div className="text-[#fff] text-[14px]">
              Don't let regulatory challenges hold your business back. Our team provides immediate support for audit readiness, tax compliance, SSM registration, and authority engagement.
            </div>
          </div>
          <Link href="/contact">
            <Button variant="secondary">SCHEDULE CONSULTATION</Button>
          </Link>
        </div>

        {/* Footer Links */}
        <div className="mt-[64px] md:mt-[107px] flex flex-col lg:flex-row items-start justify-between gap-[48px]">
          {/* Brand Section */}
          <div className="flex flex-col gap-[24px] w-[70%] lg:w-[20%]">
            <Logo className="w-full h-auto" />
            <div className="font-medium text-white leading-[24px]">
              Your Trusted Partner in Accounting, Audit & Regulatory Compliance and Tax Advisory
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
          <div className="flex items-start justify-between w-full lg:w-[35%] md:gap-[100px]">
            <div>
              <div className="text-[#8D8D8D] mb-[24px]">Main Menu</div>
              <div className="flex flex-col items-start gap-[16px] text-white">
                <Link href="/" className="cursor-pointer">Home</Link>
                <Link href="/about" className="cursor-pointer">About Us</Link>
                <Link href="/services" className="cursor-pointer">Services</Link>
                <Link href="/careers" className="cursor-pointer">Careers</Link>
                <Link href="/contact" className="cursor-pointer">Contact</Link>
              </div>
            </div>

            <div>
              <div className="text-[#8D8D8D] mb-[24px]">Services</div>
              <div className="flex flex-col items-start gap-[16px] text-white">
                <Link href="/services/accounting-advisory" className="cursor-pointer">Accounting Advisory</Link>
                <Link href="/services/tax-advisory" className="cursor-pointer">Tax Advisory</Link>
                <Link href="/services/audit-assurance" className="cursor-pointer">Audit & Assurance</Link>
                <Link href="/services/corporate-erp" className="cursor-pointer">Corporate Advisory</Link>
                <Link href="/services/corporate-erp" className="cursor-pointer">ERP System Implementation</Link>
              </div>
            </div>

            <div>
              <div className="text-[#8D8D8D] mb-[24px]">Contact</div>
              <div className="flex flex-col items-start gap-[16px] text-white text-[14px]">
                <div>UOA Business Park Unit 2-1, Level 2, The Podium, Tower 3<br />Jalan Pengaturcara, Seksyen U1/51a<br />40150 Shah Alam Selangor, Malaysia</div>
                <div>+60192257845</div>
                <div>+603-96237617</div>
                <div>+6011-21698236</div>
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
              2025 ANR Dynamic Ventures Sdn. Bhd. All rights reserved
            </div>
          </div>
          <div className="flex justify-between items-center gap-[8px] text-white cursor-pointer">
            CONTACT SUPPORT <Icons name="arrowRight" className="w-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
