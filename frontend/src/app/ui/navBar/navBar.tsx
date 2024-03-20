import Link from "next/link";
import { endpoints } from "@/app/utils";

interface ComponentProps {
    t: (name: string) => any,
};

export default function NavBar({ t }: Readonly<ComponentProps>) {
    return (
        <ul className=" 
        wk_text-gray_200 
        wk_flex wk_gap-[38px]
        ">
            <li className="hover:wk_text-gray_500">
                <Link href={`${endpoints.about}`}>
                    {t('headerNav_1')}
                </Link>
            </li>
            <li className="hover:wk_text-gray_500">
                <Link href={`${endpoints.services}`}>
                    {t('headerNav_2')}
                </Link>
            </li>
            <li className="hover:wk_text-gray_500"> 
                <Link href={`${endpoints.photos}`}>
                    {t('headerNav_3')}
                </Link>
            </li>
            <li className="hover:wk_text-gray_500">
                <Link href={`${endpoints.reviews}`}>
                    {t('headerNav_4')}
                </Link>
            </li>
        </ul>
    )
};