import { Language } from "@/app/i18n/settings";

export interface PageProps {
    params: {
        lng: Language;
    };
    searchParams?: Record<string, string> | null | undefined;
}