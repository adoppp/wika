import { Language } from '@/app/i18n/settings';

interface LanguageSwitcherProps {
  lng: Language;
  location: 'header' | 'mob_menu';
}

export default LanguageSwitcherProps;
