import { Language } from '@/app/i18n/settings';

interface CookieSettingsProps {
  lng: Language;
  className: string;
  onRejectClick: () => void;
  onAcceptClick: () => void;
}

export default CookieSettingsProps;
