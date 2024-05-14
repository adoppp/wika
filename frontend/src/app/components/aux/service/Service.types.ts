import { Language } from '@/app/i18n/settings';
import { PriceItemAttributes } from '@/app/lib/api';

interface ServiceProps {
  data: PriceItemAttributes;
  lng: Language;
}

export default ServiceProps;
