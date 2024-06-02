import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { Review, Slider } from '@/app/components';

import { getReviews, ReviewResponse } from '@/app/lib/api';
import { Options } from '@/app/lib/utils';
import { ReviewListProps } from '../review-list';
import getQueryClient from '@/app/lib/utils/getQueryClient';

export default async function ReviewList({ lng }: Readonly<ReviewListProps>) {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['reviews'],
    queryFn: () => getReviews(lng),
    staleTime: 10 * 1000,
  });

  queryClient.invalidateQueries({ queryKey: ['reviews'] });

  const reviews = queryClient.getQueryData(['reviews']) as ReviewResponse[];

  const dehydratedState = dehydrate(queryClient);

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
    <HydrationBoundary state={dehydratedState}>
      <div>
        <ul className="reviews">
          {reviews?.map((review: ReviewResponse) => (
            <Review key={review.id} review={review.attributes} lng={lng} />
          ))}
        </ul>
      </div>

      <Slider className="reviews" options={sliderOptions} />
    </HydrationBoundary>
  );
}
