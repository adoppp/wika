import { Language } from '@/app/i18n/settings';

export interface PageProps {
  params: {
    lng: Language;
  };
  searchParams?: Record<string, string> | null | undefined;
}

export interface ErrorProps {
  error: Error & { digest?: string };
  reset?: () => void;
  statusCode: number;
}

export type FormAction = 'create' | 'read' | 'update';

export interface AdminFormsProps<T> {
  action: FormAction;
  enLocaleId?: string;
  plLocaleId?: string;
  values?: T;
}
