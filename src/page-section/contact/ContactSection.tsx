"use client";

import Typography from "@/src/component/Typography";
import Button from "@/src/component/Button";
import Icons from "@/src/component/Icons";
import Input from "@/src/component/Input";

const GOOGLE_MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=UOA+Business+Park+Tower+3,+Shah+Alam,+Selangor,+Malaysia";

function getMapSrc() {
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  if (key && key !== "YOUR_API_KEY_HERE") {
    return `https://www.google.com/maps/embed/v1/place?key=${key}&q=UOA+Business+Park+Tower+3,Shah+Alam,Selangor,Malaysia`;
  }
  return "https://www.google.com/maps?q=UOA+Business+Park+Tower+3,Shah+Alam,Selangor&output=embed";
}

const contactItems = [
  {
    icon: "envelope" as const,
    iconBg: "#F2B611",
    label: "Email Us",
    value: "anrdynamic@gmail.com",
    href: "mailto:anrdynamic@gmail.com",
    external: false,
  },
  {
    icon: "phone" as const,
    iconBg: "#F2B611",
    label: "Call Us",
    value: "+60 18-980 4875",
    href: "tel:+60189804875",
    external: false,
  },
  {
    icon: "whatsapp" as const,
    iconBg: "#25D366",
    label: "WhatsApp Us",
    value: "+60 18-980 4875",
    href: "https://wa.me/60189804875",
    external: true,
  },
];

export default function ContactSection() {
  return (
    <div className="bg-[#0D0D0D] py-[48px] md:py-[80px] px-[16px] md:px-[72px]">
      <div className="max-w-[1060px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2.3fr] gap-[24px] lg:gap-[80px] items-start">
        {/* ===== LEFT COLUMN (desktop) / BOTTOM (mobile) ===== */}
        <div className="flex flex-col gap-[16px] order-2 lg:order-1">
          <div className="mb-[8px] text-center lg:text-left">
            <Typography
              as="div"
              size={32}
              sizeMobile={24}
              weight={600}
              lineHeight={40}
              lineHeightMobile={32}
              heading
            >
              Get in Touch
            </Typography>
          </div>

          {/* Contact cards */}
          {contactItems.map((item) => (
            <a
              key={item.icon}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="flex items-center gap-[14px] bg-white/[0.04] border border-white/[0.08] rounded-[12px] p-[14px] hover:bg-white/[0.08] hover:border-[#F2B611]/[0.2] transition-all duration-200"
            >
              <div
                className="rounded-[8px] p-[8px] flex-shrink-0"
                style={{ backgroundColor: item.iconBg }}
              >
                <Icons
                  name={item.icon}
                  className="w-[18px] h-[18px]"
                  color="#fff"
                  noDarkMode
                />
              </div>
              <div className="flex flex-col items-start">
                <Typography color="#fff" noDarkMode size={15} weight={600}>
                  {item.label}
                </Typography>
                <Typography color="#888" noDarkMode size={13} weight={400}>
                  {item.value}
                </Typography>
              </div>
            </a>
          ))}

          {/* Visit Our Office card with embedded map */}
          <a
            href={GOOGLE_MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/[0.04] border border-white/[0.08] rounded-[12px] overflow-hidden hover:border-[#F2B611]/[0.2] transition-all duration-200 block"
          >
            {/* Header */}
            <div className="flex items-center gap-[14px] p-[14px]">
              <div className="bg-[#F2B611] rounded-[8px] p-[8px] flex-shrink-0">
                <Icons
                  name="compass"
                  className="w-[18px] h-[18px]"
                  color="#fff"
                  noDarkMode
                />
              </div>
              <div className="flex flex-col items-start">
                <Typography color="#fff" noDarkMode size={15} weight={600}>
                  Visit Our Office
                </Typography>
                <Typography color="#888" noDarkMode size={13} weight={400}>
                  UOA Business Park, Tower 3, Shah Alam
                </Typography>
              </div>
            </div>

            {/* Map preview */}
            <div className="relative w-full aspect-[2/1] pointer-events-none">
              <iframe
                src={getMapSrc()}
                className="absolute inset-0 w-full h-full"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ANR Dynamic Ventures office location"
                tabIndex={-1}
              />
            </div>

            {/* Address footer */}
            <div className="px-[14px] py-[12px] border-t border-white/[0.06]">
              <Typography size={12} lineHeight={18} color="#666" noDarkMode>
                Unit 2-1, Level 2, The Podium, Jalan Pengaturcara, Seksyen
                U1/51a, 40150 Shah Alam, Selangor
              </Typography>
            </div>
          </a>
        </div>

        {/* ===== RIGHT COLUMN (desktop) / TOP (mobile) ===== */}
        <div className="relative bg-white/[0.04] border border-white/[0.08] rounded-[16px] p-[24px] md:p-[32px] overflow-hidden order-1 lg:order-2">
          {/* Gold accent top line */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#F2B611]/[0.6] to-transparent" />

          <div className="flex flex-col gap-[24px]">
            <div className="flex flex-col gap-[10px] text-center lg:text-left">
              <Typography
                size={28}
                sizeMobile={22}
                weight={600}
                lineHeight={36}
                heading
              >
                Schedule a Consultation
              </Typography>
              <Typography size={14} lineHeight={22} color="#888" noDarkMode>
                Share your compliance challenge and we&apos;ll provide an
                initial assessment and recommend the best path forward.
              </Typography>
            </div>

            <div className="w-full flex flex-col gap-[16px] text-left">
              <div className="w-full flex flex-col sm:flex-row gap-[16px]">
                <Input
                  type="text"
                  isRequired
                  label="First name"
                  placeholder="First name"
                />
                <Input
                  type="text"
                  isRequired
                  label="Last name"
                  placeholder="Last name"
                />
              </div>
              <Input
                type="email"
                isRequired
                label="Email"
                placeholder="Email"
              />
              <Input
                type="textarea"
                isRequired
                label="Message"
                placeholder="Message"
              />
              <Button variant="form" className="px-[32px] py-[14px] mt-[4px]">
                SUBMIT INQUIRY
              </Button>
              <Typography
                size={13}
                weight={400}
                color="#555"
                noDarkMode
                lineHeight={20}
                className="text-center"
              >
                By contacting us, you agree to our{" "}
                <span className="text-[#F2B611]">Terms of Service</span> and{" "}
                <span className="text-[#F2B611]">Privacy Policy</span>.
                <br />
                We will respond within 24 business hours.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
