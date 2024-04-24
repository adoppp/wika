import TitleProps from "@/app/components/aux/title/title.types";
import { cn } from "@/app/utils";

export default function paragraph({ children }: Readonly<TitleProps>) {
    return (
        <p className='wk_max-w-[492px] wk_mx-auto wk_mb-[40px] tablet:wk_mb-[52px] desktop:wk_mb-[80px] wk_text-[20px] wk_leading-[calc(32/20)] wk_font-300 wk_text-center wk_text-gray_300'>
            {children}
        </p>
    );
};