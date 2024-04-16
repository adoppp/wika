import { Language } from "@/app/i18n/settings";
import { TFunction } from "i18next";

export interface BurgerMenuProps {
    lng: Language;
    t: TFunction<any, string>;
    navT: TFunction<any, string>;
    showMobMenu: boolean | string | null;
};