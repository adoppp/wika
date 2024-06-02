import { Language } from '@/app/i18n/settings';
import { ReviewAttributes } from '@/app/lib/api';

interface ReviewProps {
  review: ReviewAttributes;
  lng: Language;
}

export default ReviewProps;
