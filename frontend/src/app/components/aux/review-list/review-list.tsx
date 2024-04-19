import { ReviewResponse } from '@/app/lib/api';
import { Options } from '@/app/lib/utils';
import { ReviewListProps } from '../review-list';
import { Review, Slider } from '@/app/components';

const reviews = [
  {
    id: '1',
    attributes: {
      reviewerName: 'Олена',
      date: 'Травень, 2, 2023',
      avatarId: '1',
      avatarUrl: '',
      review:
        'Я вважаю, що це ідеальний тренер, підтримає, направить, десь суворіше буде, цього реально не вистачає',
    },
  },
  {
    id: '2',
    attributes: {
      reviewerName: 'Олена',
      date: 'Травень, 2, 2023',
      avatarId: '1',
      avatarUrl: '',
      review:
        'Я вважаю, що це ідеальний тренер, підтримає, направить, десь суворіше буде, цього реально не вистачає',
    },
  },
  {
    id: '3',
    attributes: {
      reviewerName: 'Олена',
      date: 'Травень, 2, 2023',
      avatarUrl: '',
      avatarId: '1',
      review:
        'Я вважаю, що це ідеальний тренер, підтримає, направить, десь суворіше буде, цього реально не вистачає',
    },
  },
];

export default function ReviewList({ lng }: Readonly<ReviewListProps>) {
  const sliderOptions: Options = {
    itemsToShow: 1,
    itemsToSwipe: 1,
    dots: true,
    swipe: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          arrows: true,
        },
      },
    ],
  };

  return (
    <>
      <div>
        <ul className="reviews">
          {reviews?.map((review: ReviewResponse) => (
            <Review key={review.id} review={review.attributes} />
          ))}
        </ul>
      </div>

      <Slider className="reviews" options={sliderOptions} />
    </>
  );
}
