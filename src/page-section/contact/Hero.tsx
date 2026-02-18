import HeroBackground from "@/src/component/HeroBackground";
import Typography from "@/src/component/Typography";
import Button from "@/src/component/Button";

export default function Hero() {
  return (
    <HeroBackground>
      <div className="w-full lg:w-[60%] lg:mx-auto flex flex-col items-start lg:items-center lg:text-center justify-center gap-[24px]">
        <Typography
          as="div"
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
          Contact Us Today
        </Typography>
        <Typography
          color="#fff"
          noDarkMode
          size={18}
          weight={700}
          className="md:w-[80%]"
        >
          Ready to get your business to the next level? Get in touch with our
          team for a consultation.
        </Typography>
        <Button variant="primary" className="mt-[32px]">
          CONTACT US NOW
        </Button>
      </div>
    </HeroBackground>
  );
}
