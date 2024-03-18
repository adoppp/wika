import { Language } from "@/app/i18n/settings";
import { useTranslation } from "../i18n";

interface HomeProps {
    params: {
        lng: Language;
    };
}

export default async function Home({ params: { lng } }: Readonly<HomeProps>) {
    const { t } = await useTranslation(lng);
    return;
};