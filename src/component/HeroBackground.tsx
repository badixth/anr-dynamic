interface Props {
  children?: React.ReactNode;
  component?: React.ReactNode;
}
import BgImage from "@/src/assets/images/background.png";
import Image from "next/image";

export default function HeroBackground(props: Props) {
  const { children, component } = props;
  return (
    <div className="relative overflow-hidden">
      {/* Blended background image with smooth bottom fade-out */}
      <div className="absolute inset-0 w-full h-full z-[-5] pointer-events-none">
        <Image
          src={BgImage}
          alt="Background"
          fill
          style={{
            objectFit: "cover",
            mixBlendMode: "overlay",
            opacity: 0.15,
            userSelect: "none",
          }}
          sizes="100vw"
          priority
        />
        {/* Gradient fade to transparent at bottom */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0) 80%, #fff 100%)",
            // For dark mode, this div will be hidden by default Tailwind dark / CSS handling elsewhere, or handle via class
          }}
        />
        {/* For dark mode: fade to dark at bottom */}
        <div
          className="absolute inset-0 z-10 pointer-events-none dark:block hidden"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, #070707 100%)",
          }}
        />
      </div>
      <div className="absolute w-full bg-black pt-[25rem] -z-10">
        <div className="absolute right-[-150%] md:right-[-10%] bg-[#F2C911] blur-[150px] w-[1710px] h-[1367px] rounded-[1710px]" />
        <div className="absolute mt-[-10%] md:mt-0 left-[-200%] md:left-[-25%] bg-[#F2B611] blur-[180px] w-[1537.615px] md:w-[1809px] h-[1444px] rounded-[1537.615px] md:rounded-[1809px]" />
        <div className="ml-[-90%] md:ml-[-50%] lg:ml-[-32%] mt-[10%] md:mt-[7%] bg-[#fff] dark:bg-[#070707] blur-[142px] w-[1502px] md:w-[2774px] h-[1174px] md:h-[1444px] rounded-[1502px] md:rounded-[2774px]" />
      </div>
      <div className="px-[20px] pb-[48px] pt-[118px] md:px-[72px] md:pb-[80px] lg:pt-[192px]">
        {children}
      </div>
      {component}
    </div>
  );
}
