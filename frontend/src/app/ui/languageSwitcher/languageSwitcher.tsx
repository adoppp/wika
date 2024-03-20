import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";

import { Language, languages } from "@/app/i18n/settings";

interface LanguageSwitcherProps {
    lng: Language;
}

export default function LanguageSwitcher({ lng }: Readonly<LanguageSwitcherProps>) {
    return (
        <ul className=" 
        wk_hidden 
        
        desktop:wk_flex 
        desktop:wk_flex-row-reverse 
        desktop:wk_gap-[8px]
        ">
            {
                languages.map((language: string): ReactNode => {
                    return (
                        <li key={language}>
                            <Link
                                href={`/${language}`}
                                className={clsx(lng === language ?
                                    'wk_text-th_white' :
                                    'wk_text-gray_300',
                                    'hover:wk_text-gray_500'
                                )}
                            >
                                {
                                    language.includes('ua') && 'Укр' ||
                                    language.includes('ru') && 'Рус'
                                }
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}