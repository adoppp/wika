import { useTranslation } from "@/app/i18n";
import { Language } from "@/app/i18n/settings";
import Logo from "@/app/components/logo/logo";

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
            <div className=" wk_bg-th_bg_tertiary ">
                <Logo />
            </div>
        </header>
    )
};