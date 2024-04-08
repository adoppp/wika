import { DisableScroll, ModalEventHandlers, Svg, cn, endpoints } from "@/app/utils";
import { BurgerMenuProps } from "./burgerMenu.types";
import { NavBar } from "../navBar";
import Link from "next/link";
import { transition } from "@/app/constants";
import { LanguageSwitcher } from "../languageSwitcher";
import { Button } from "../button";

export default function BurgerMenu({isOpen, t, navT, lng}: Readonly<BurgerMenuProps>) {
    return (
        <div className={cn(isOpen ? ' tablet:wk_-translate-x-[5.5rem] wk_-translate-x-[3rem]' : 'wk_translate-x-full', transition, 'wk_w-max wk_h-max wk_absolute wk_-top-10 desktop:wk_translate-x-full')}>
            {isOpen && (
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
                    <Svg id="close" className=" wk_absolute wk_top-[50px] wk_right-[44px] wk_fill-gray_600 hover:wk_fill-th_hover active:wk_fill-th_accent" />
                </Link>
            
                <div className=" wk_flex wk_flex-col wk_gap-[79px]">       
                    <NavBar t={navT} location="mob_menu" />
                    
                    <div className=" wk_flex wk_gap-[74px] wk_flex-col">
                        <LanguageSwitcher lng={lng} location="mob_menu" />

                        <div>
                            <Button color="pink" lng={lng} type="button" className="wk_w-full tablet:wk_hidden"/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};