import Tag from "@/src/component/Tag";
import Typography from "@/src/component/Typography";
import Accordion, { AccordionData } from "@/src/component/Accordion";
import { homeFaqs } from "@/src/data/faqs";

type FaqProps = {
    items?: AccordionData[];
    headline?: string;
    description?: string;
};

export default function Faq({ items, headline, description }: FaqProps = {}) {
    const accordionData: AccordionData[] = items || homeFaqs.map(faq => ({
        title: faq.question,
        content: faq.answer
    }));
    return (
        <div className="bg-white dark:bg-[#070707] w-full px-[16px] md:px-[72px] py-[48px] md:py-[80px]">
            <div className="flex flex-col items-center text-center w-full gap-[24px]">
                <div className="flex flex-col items-center gap-[24px]">
                    <Tag>
                        <Typography size={14} sizeMobile={12} weight={500}>Frequently Asked Questions</Typography>
                    </Tag>
                    <div className="text-[32px] md:text-[48px] font-bold leading-[41.6px] md:leading-[56px] text-[#070707] dark:text-[#fff] font-heading">
                        {headline || (
                            <>
                                Common Questions About Our Advisory Services
                            </>
                        )}
                    </div>
                </div>
                <div className="flex gap-[10px]">
                    <Typography size={16} sizeMobile={14} weight={500} lineHeight={24}>
                        {description || (
                            <>
                                Clear Answers to Compliance Issues, Helping You Move Forward with Confidence
                            </>
                        )}
                    </Typography>
                </div>
            </div>
            <hr className="hidden lg:block border border-[#B2B2B2] w-full my-[64px]" />
            <div className="flex justify-center items-center mt-[48px] lg:mt-0">
                <div className="w-full lg:w-[70%]">
                    <Accordion items={accordionData} />
                </div>
            </div>
        </div>
    )
}
