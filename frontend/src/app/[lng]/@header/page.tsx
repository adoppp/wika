import { useTranslation } from "@/app/i18n";
import { Language } from "@/app/i18n/settings";
import { svg } from "@/app/utils";
import { Logo } from "@/app/components";
import {
    NavBar,
    LanguageSwitcher,
    Button
} from "@/app/ui";

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
                <Logo lng={lng} />

                <NavBar t={t} />

                <LanguageSwitcher lng={lng} />

                <button className='wk_cursor-pointer hover:wk_transition-all hover:wk_stroke-gray_300 desktop:wk_hidden'>
                    {svg.burgerMenu}
                </button>

                <Button button="white">
                    {t('buttonHeader')}
                </Button>
            </div>
        </header>
    )
};