import HeroBackground from "@/src/component/HeroBackground";
import Typography from "@/src/component/Typography";
import Button from "@/src/component/Button";
import Icons from "@/src/component/Icons";

export default function Hero() {
  return (
    <HeroBackground>
      <div className="w-full lg:w-[60%] lg:mx-auto flex flex-col items-start lg:items-center lg:text-center justify-center gap-[72px] lg:gap-[160px]">
        <div className="w-full flex flex-col items-start lg:items-center gap-[24px]">
          <Typography
            as="div"
            color="#fff"
            size={72}
            sizeTablet={52}
            sizeMobile={40}
            weight={600}
            lineHeight={85}
            lineHeightTablet={64}
            lineHeightMobile={52}
            letterSpacing={-2.16}
            letterSpacingMobile={-1.2}
            noDarkMode
            heading
          >
            Get Expert Financial & Compliance Advisory Support
          </Typography>
          <Typography color="#fff" noDarkMode size={18} className="md:w-[80%]">
            Facing a regulatory challenge, tax issue, or audit requirement? Our
            team is ready to provide immediate guidance and representation for
            Malaysian businesses needing expert financial advisory.
          </Typography>
          <Button variant="primary" className="mt-[32px]">
            CONTACT US NOW
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] w-full">
          <a href="mailto:anrdynamic@gmail.com" className="flex items-center gap-[16px] bg-white/[0.05] border border-white/[0.1] rounded-[12px] p-[20px] hover:bg-white/[0.1] transition-colors">
            <div className="bg-[#F2B611] rounded-[10px] p-[10px] flex-shrink-0">
              <Icons name="chats" className="w-[20px] h-[20px]" color="#fff" noDarkMode />
            </div>
            <div className="flex flex-col items-start gap-[2px]">
              <Typography color="#fff" noDarkMode size={16} weight={600}>
                Email Us
              </Typography>
              <Typography color="#D4D4D4" noDarkMode size={13} weight={400}>
                anrdynamic@gmail.com
              </Typography>
            </div>
          </a>

          <a href="tel:+60189804875" className="flex items-center gap-[16px] bg-white/[0.05] border border-white/[0.1] rounded-[12px] p-[20px] hover:bg-white/[0.1] transition-colors">
            <div className="bg-[#F2B611] rounded-[10px] p-[10px] flex-shrink-0">
              <Icons name="phone" className="w-[20px] h-[20px]" color="#fff" noDarkMode />
            </div>
            <div className="flex flex-col items-start gap-[2px]">
              <Typography color="#fff" noDarkMode size={16} weight={600}>
                Call Us
              </Typography>
              <Typography color="#D4D4D4" noDarkMode size={13} weight={400}>
                +60 18-980 4875
              </Typography>
            </div>
          </a>

          <a href="https://wa.me/60189804875" target="_blank" rel="noopener noreferrer" className="flex items-center gap-[16px] bg-white/[0.05] border border-white/[0.1] rounded-[12px] p-[20px] hover:bg-white/[0.1] transition-colors">
            <div className="bg-[#25D366] rounded-[10px] p-[10px] flex-shrink-0">
              <Icons name="whatsapp" className="w-[20px] h-[20px]" color="#fff" noDarkMode />
            </div>
            <div className="flex flex-col items-start gap-[2px]">
              <Typography color="#fff" noDarkMode size={16} weight={600}>
                WhatsApp Us
              </Typography>
              <Typography color="#D4D4D4" noDarkMode size={13} weight={400}>
                +60 18-980 4875
              </Typography>
            </div>
          </a>
        </div>
      </div>
    </HeroBackground>
  );
}
