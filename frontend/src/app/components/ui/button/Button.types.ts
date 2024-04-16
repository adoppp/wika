import { Language } from '@/app/i18n/settings';

interface ButtonProps {
  type?: 'submit' | 'button' | 'reset';
  color: 'white' | 'pink';
  lng: Language;
  className?: string;
  label: string;
  onClick?: () => void;
};

export default ButtonProps;
