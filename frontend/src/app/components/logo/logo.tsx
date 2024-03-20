import Link from "next/link";

import { Language } from "@/app/i18n/settings";

interface PageProps {
    lng: Language;
}


export default function Logo({ lng }: Readonly<PageProps>) {
    return (
        <Link href={`/${lng}`}>
            <span className=" wk_text-text_4xl wk_text-th_accent wk_font-500">
                .Wika
            </span>
        </Link>
    )
}