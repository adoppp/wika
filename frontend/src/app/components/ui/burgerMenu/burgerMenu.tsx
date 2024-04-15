import Link from "next/link";

import { transition } from "@/app/constants";
import { DisableScroll, Svg, cn, endpoints } from "@/app/utils";
import { Button, LanguageSwitcher, NavBar } from "@/app/components";
import { BurgerMenuProps } from "@/app/components/ui/burgerMenu/burgerMenu.types";


export default function BurgerMenu({ lng, t, navT, showMobMenu }: Readonly<BurgerMenuProps>) {
    return (
        <div className={cn(showMobMenu ? 'wk_translate-x-0' : 'wk_translate-x-full', transition, 'wk_transition-transform wk_w-max wk_h-max wk_fixed wk_top-0 wk_left-0 wk_z-30 desktop:wk_translate-x-full desktop:wk_hidden')}>
            {showMobMenu && (
                <>
                    <DisableScroll />
                </>
            )}

            <div className='wk_bg-th_bg_secondary wk_rounded-50 wk_pr-[44px] wk_pl-[44px] wk_pt-[50px] wk_flex wk_flex-col wk_w-screen wk_h-screen'>
                <Link
                    href={`/${lng.includes('ru') ? endpoints.homeRu : endpoints.homeUa}`}
                        aria-label={t('burger_close_aria_label')}
                        className="wk_w-fit wk_mb-[110px] tablet:wk_mb-[98px]"
                >
                    <Svg id="close" className="wk_absolute wk_top-[50px] wk_right-[44px] wk_fill-gray_600 hover:wk_fill-th_hover active:wk_fill-th_accent" />
                </Link>
            
                <div className="wk_flex wk_flex-col wk_gap-[79px]">       
                    <NavBar t={navT} location="mob_menu" />
                    
                    <div className="wk_flex wk_gap-[74px] wk_flex-col">
                        <LanguageSwitcher lng={lng} location="mob_menu" />
                        
                        <Button color="pink" lng={lng} type="button" label="label" className="wk_w-full tablet:wk_hidden"/>
                    </div>
                </div>
            </div>
        </div>
    )
}