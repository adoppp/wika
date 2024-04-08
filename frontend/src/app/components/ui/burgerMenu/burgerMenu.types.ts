import { Language } from "@/app/i18n/settings";
import { TFunction } from "i18next";

export interface BurgerMenuProps {
    isOpen: boolean;
    t: TFunction;
    navT: TFunction;
    lng: Language;
}