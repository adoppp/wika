import { Language } from "@/app/i18n/settings";

export interface PageProps {
    params: {
        lng: Language;
    };
    searchParams?: Record<string, string> | null | undefined;
};

export interface ErrorProps {
    error: Error & { digest?: string };
    reset?: () => void;
    statusCode: number;
};