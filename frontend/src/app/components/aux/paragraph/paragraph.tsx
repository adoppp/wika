import { cn } from "@/app/utils";
import ParagraphProps from "@/app/components/aux/paragraph/paragraph.types";

export default function paragraph({ children, maxW, mb }: Readonly<ParagraphProps>) {
    return (
        <p className={`wk_max-w-[${maxW ? maxW : '492px'}] wk_mx-auto wk_mb-[${mb.mobile}px] tablet:wk_mb-[${mb.tablet}px] desktop:wk_mb-[${mb.dekstop}px] wk_text-[20px] wk_leading-[calc(32/20)] wk_font-300 wk_text-center wk_text-gray_300`}>
            {children}
        </p>
    );
};