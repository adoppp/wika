import Image from 'next/image';
import { format } from 'date-fns';
import { ru, uk } from 'date-fns/locale';

import { PROJECT_API } from '@/app/lib/api';

import ReviewProps from './review.types';

export default function Review({
  review: { reviewerName, date, review: reviewText, avatarUrl },
  lng,
}: Readonly<ReviewProps>) {
  return (
    <li className="wk_mb-[30px] desktop:wk_mb-[50px]">
      <div className="wk_mb-[30px] tablet:wk_mb-[40px] desktop:wk_mb-[72px]">
        <Image
          src={`${PROJECT_API}${avatarUrl}`}
          alt="Фото клієнта"
          width={65}
          height={65}
          className="wk_mx-auto wk_mb-[24px] wk_rounded-[50%]"
        />

        <h3 className="wk_text-[18px] wk_leading-[calc(22/18)] wk_text-gray_200 wk_text-center">
          {reviewerName},{' '}
          <span className="wk_text-gray_400 wk_capitalize">
            {format(date, 'LLLL, d, yyyy', { locale: lng === 'uk' ? uk : ru })}
          </span>
        </h3>
      </div>

      <blockquote>
        <p className="wk_max-w-[648px] wk_h-[200px] wk_mx-[auto] wk_text-[24px] tablet:wk_text-[36px] desktop:wk_text-[42px] wk_leading-[calc(28/24)] tablet:wk_leading-[calc(50/36)] desktop:wk_leading-[calc(50/42)] wk_text-gray_200 wk_text-center before:wk_content-['\201C'] after:wk_content-['\201C']">
          {reviewText}
        </p>
      </blockquote>
    </li>
  );
}
