import Image from "next/image";
import Tag from "@/src/component/Tag";
import Typography from "@/src/component/Typography";

import Trends from '@/src/assets/images/trends.png';
import Rocket from '@/src/assets/images/rocket.png';
import TargetBlue from '@/src/assets/images/targetBlue.png';

export default function Approach() {
    return (
        <div className="bg-white dark:bg-[#070707] w-full px-[16px] md:px-[72px] py-[48px] md:py-[80px]">
            <Tag>
                <Typography size={14} weight={500}>Our Methodology</Typography>
            </Tag>
            <div className="flex flex-col lg:flex-row justify-between items-start w-full mt-[24px]">
                <div className="flex flex-col items-start w-full lg:w-[50%]">
                    <div className="text-[32px] md:text-[48px] font-bold leading-[41.6px] md:leading-[56px] text-[#070707] dark:text-[#fff] font-heading">
                        The ANR 5-Stage Approach: From Problem Identification to Resolution
                    </div>
                </div>
                <div className="flex gap-[10px] w-full lg:w-[40%]">
                    <Typography size={16} weight={500} lineHeight={24}>
                        Our structured methodology ensures every compliance challenge is addressed systematically, with clear steps from initial diagnosis through ongoing support.
                    </Typography>
                </div>
            </div>
            <div className="mt-[64px] flex flex-col lg:flex-row items-center gap-[24px]">
                <div className="flex flex-1 shrink-0 basis-0 flex-col items-start gap-[32px] bg-[#EEE] dark:bg-[#1D1D1D] border border-[#EEE] rounded-[12px] p-[24px]">
                    <Image src={Trends} alt="Trends" className="w-15" />
                    <div>
                        <Typography size={20} weight={700} lineHeight={32} heading>
                            Diagnostic Excellence
                        </Typography>
                        <Typography className="mt-[8px]">
                            Thorough investigation to identify root causes of financial, tax, and compliance issues before recommending solutions.
                        </Typography>
                    </div>
                </div>
                <div className="flex flex-1 shrink-0 basis-0 flex-col items-start gap-[32px] bg-[#EEE] dark:bg-[#1D1D1D] border border-[#EEE] rounded-[12px] p-[24px]">
                    <Image src={Rocket} alt="Rocket" className="w-15" />
                    <div>
                        <Typography size={20} weight={700} lineHeight={32} heading>
                            Direct Representation
                        </Typography>
                        <Typography className="mt-[8px]">
                            We stand with you in SSM, LHDN, and audit engagements, advocating for your interests and managing authority communications.
                        </Typography>
                    </div>
                </div>
                <div className="flex flex-1 shrink-0 basis-0 flex-col items-start gap-[32px] bg-[#EEE] dark:bg-[#1D1D1D] border border-[#EEE] rounded-[12px] p-[24px]">
                    <Image src={TargetBlue} alt="TargetBlue" className="w-15" />
                    <div>
                        <Typography size={20} weight={700} lineHeight={32} heading>
                            Sustainable Solutions
                        </Typography>
                        <Typography className="mt-[8px]">
                            Implementation of lasting compliance frameworks and ongoing support to prevent future issues and ensure continuous adherence.
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}
