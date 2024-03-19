import { useTranslation } from "@/app/i18n";
import { Language } from "@/app/i18n/settings";
import Logo from "@/app/components/logo/logo";
import BurgerMenu from '@/../public/svg/menu.svg'
import { svg } from "@/app/utils";

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
            wk_min-w-smallMobile
            wk_max-w-dekstop
            wk_flex 
            wk_flex-row-reverse
            wk_items-center
            wk_justify-between 
            wk_py-[22px] 
            wk_px-[16px] 
            wk_rounded-large 
            wk_absolute 
            wk_mt-[80px] 
            wk_left-[50%]

            wk_translate-x-[-50%] 
            wk_translate-y-[-50%] 
            
            mobile:wk_min-w-mobile

            tablet:wk_py-[18px]
            tablet:wk_mt-[100px] 

            desktop:wk_mt-[80px]
            "
            >
                <Logo />



                <button>
                    {/* {svg.BurgerMenu} */}
                    <BurgerMenu />
                </button>
            </div>
        </header>
    )
};