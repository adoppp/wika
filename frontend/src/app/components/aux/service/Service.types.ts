import { Language } from '@/app/i18n/settings';
import { ServiceAttributes } from '@/app/lib/api';

interface ServiceProps {
  data: ServiceAttributes;
  lng: Language;
}

export default ServiceProps;
