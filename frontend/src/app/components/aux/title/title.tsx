import TitleProps from "@/app/components/aux/title/title.types";
import { cn } from "@/app/utils";

export default function Title({ children, relative, styles }: Readonly<TitleProps>) {
    return (
        <h2 className={cn('wk_mb-[28px] tablet:wk_mb-[32px] wk_text-title_mob tablet:wk_text-title_tab desktop:wk_text-title-desk wk_font-500 wk_text-center wk_text-th_white',
            relative && 'wk_relative',
            styles
        )}>
            {children}
        </h2>
    );
};