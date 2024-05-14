import { ButtonHTMLAttributes } from 'react';

import { Language } from '@/app/i18n/settings';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: 'white' | 'pink';
  lng: Language;
  className?: string;
  label: string;
}

export default ButtonProps;
