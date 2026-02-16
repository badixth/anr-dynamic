import Image from "next/image";
import Icons from "@/src/component/Icons";
import Typography from "@/src/component/Typography";

import Portofolio1 from '@/src/assets/images/Portfolio-1.png';
import Portofolio2 from '@/src/assets/images/Portfolio-2.png';
import Portofolio3 from '@/src/assets/images/Portfolio-3.png';

export default function LatestProject() {
    return (
        <div className="bg-white dark:bg-[#070707] w-full px-[20px] md:px-[72px] py-[48px] md:py-[80px]">
            <div className="flex flex-col items-center text-center w-full gap-[24px]">
                <div className="flex flex-col items-center gap-[24px]">
                    <Typography as="div" size={40} sizeMobile={28} weight={700} lineHeight={48} lineHeightMobile={36} heading>
                        Latest Projects
                    </Typography>
                </div>
                <div className="flex gap-[10px] border-b border-[#070707] dark:border-[#fff] cursor-pointer">
                    <Typography size={16} weight={500}>SEE ALL PORTOFOLIO</Typography>
                    <Icons name="arrowRight" className="w-5" />
                </div>
            </div>
            <div className="mt-[64px] grid grid-rows-[auto_1fr] gap-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="aspect-[16/9] w-full md:aspect-auto">
                        <Image src={Portofolio1} alt="Portofolio1" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-[16/9] w-full md:aspect-auto">
                        <Image src={Portofolio2} alt="Portofolio2" className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="aspect-[16/9] w-full md:aspect-auto">
                    <Image src={Portofolio3} alt="Portofolio3" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    )
}
