import { DisableScroll, ModalEventHandlers, Svg, cn, endpoints } from "@/app/utils";
import { BurgerMenuProps } from "./burgerMenu.types";
import { NavBar } from "../navBar";
import Link from "next/link";
import { transition } from "@/app/constants";

export default function BurgerMenu({isOpen, t, navT, lng}: Readonly<BurgerMenuProps>) {
    return (
        <div className={cn(isOpen ? ' tablet:wk_-translate-x-[5.5rem] wk_-translate-x-[3rem]' : 'wk_translate-x-full', transition, 'wk_w-max wk_h-max wk_absolute wk_-top-10')}>
            {isOpen && (
                <>
                    <DisableScroll />
                </>
            )}

            <div className='wk_bg-th_bg_secondary wk_rounded-50 wk_pr-[44px] wk_pl-[44px] wk_pt-[50px] wk_flex wk_flex-col wk_w-screen wk_h-screen'>
            <Link
                href={`/${lng.includes('ru') ? endpoints.homeRu : endpoints.homeUa}`}
                    aria-label={t('burger_close_aria_label')}
                    className="wk_flex wk_justify-end"
            >
                <Svg id="close" className="" />
            </Link>
            
            <NavBar t={navT} location="mob_menu"/>
            </div>

        </div>
    )
};