import { Language } from "@/app/i18n/settings";
import { TFunction } from "i18next";

export interface HeaderProps {
    lng: Language;
    t: TFunction<any, string>;
    navT: TFunction<any, string>;
};