import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { Photo, Slider } from '@/app/components';

import { getPhotos, PhotosResponse } from '@/app/lib/api';
import { Options } from '@/app/lib/utils';
import getQueryClient from '@/app/lib/utils/getQueryClient';
import { PhotoListProps } from '../photo-list';

export default async function PhotoList({ lng }: Readonly<PhotoListProps>) {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['photos'],
    queryFn: () => getPhotos(lng),
    staleTime: 10 * 1000,
  });

  queryClient.invalidateQueries({ queryKey: ['photos'] });

  const photos = queryClient.getQueryData(['photos']) as PhotosResponse[];

  const dehydratedState = dehydrate(queryClient);

  const sliderOptions: Options = {
    itemsToShow: 1,
    itemsToSwipe: 1,
    dots: true,
    gap: 12,
    infinite: true,
    swipe: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 434,
        settings: {
          itemsToShow: 3,
          itemWidth: 378,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
        },
      },
    ],
  };

  return (
    <HydrationBoundary state={dehydratedState}>
      <div className="tablet:wk_px-[calc(50%-189px)]">
        <ul className="photos">
          {photos?.map((photo: PhotosResponse) => (
            <Photo key={photo.id} data={photo.attributes} />
          ))}
        </ul>
      </div>

      <Slider className="photos" options={sliderOptions} />
    </HydrationBoundary>
  );
}
