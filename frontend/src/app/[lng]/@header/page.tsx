import { useTranslation } from "@/app/i18n";
import { Language } from "@/app/i18n/settings";
import Logo from "@/app/components/logo/logo";
import Menu from '@/../public/svg/menu.svg'

interface PageProps {
    params: {
        lng: Language;
    };
}

export default async function Header({
    params: { lng }
}: Readonly<PageProps>
) {
    const { t } = await useTranslation(lng);

    return (
        <header>
            <div
            className="
            wk_bg-th_bg_tertiary 
            wk_w-fit 
            wk_min-w-mobile
            wk_max-w-dekstop
            wk_flex 
            wk_flex-row-reverse
            wk_items-center
            wk_justify-between 
            wk_py-[22px] 
            wk_px-[16px] 
            wk_rounded-large 
            wk_absolute 
            wk_top-[40px] 
            wk_left-[50%]
            /* transfrom */

            /* responsive */

            tablet:wk_py-[18px]
            tablet:wk_top-[50px] 

            dekstop:wk_top-[40px]
            "
            >
                <Logo />

                <button>
                    <Menu />
                </button>
            </div>
        </header>
    )
};