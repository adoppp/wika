import { Language } from '@/app/i18n/settings';

interface ServiceProps {
  title: string;
  description: string[];
  price: number;
  period: string;
  lng: Language;
}

export default ServiceProps;
