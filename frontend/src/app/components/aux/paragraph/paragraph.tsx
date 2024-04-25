'use client'

import ParagraphProps from "@/app/components/aux/paragraph/paragraph.types";
import { cn } from "@/app/utils";

export default function paragraph({ children, maxW, styles }: Readonly<ParagraphProps>) {
    return (
        <p className={cn('wk_mx-auto wk_text-[20px] wk_leading-[calc(32/20)] wk_font-300 wk_text-center wk_text-gray_300',
            maxW ? `wk_max-w-[${maxW}]` : 'wk_max-w-[492px]',
            styles && styles
        )}>
            {children}
        </p>
    );
};