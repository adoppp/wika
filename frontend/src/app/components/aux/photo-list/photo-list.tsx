import { Photo, Slider } from '@/app/components';

import { PhotosResponse } from '@/app/lib/api';
import { Options } from '@/app/lib/utils';
import { PhotoListProps } from '../photo-list';

const photos = [
  {
    id: '1',
    attributes: {
      description: 'З 105 кг до 99 кг',
      beforeUrl: '',
      afterUrl: '',
    },
  },
  {
    id: '2',
    attributes: {
      description: 'До/після на онлайні за місяць',
      beforeUrl: '',
      afterUrl: '',
    },
  },
  {
    id: '3',
    attributes: {
      description: '9 кг за 4 місяці без обмежень',
      beforeUrl: '',
      afterUrl: '',
    },
  },
  {
    id: '4',
    attributes: {
      description: 'End',
      beforeUrl: '',
      afterUrl: '',
    },
  },
];

export default function PhotoList({ lng }: Readonly<PhotoListProps>) {
  const sliderOptions: Options = {
    itemsToShow: 3,
    itemsToSwipe: 1,
    dots: true,
    gap: 12,
    itemWidth: 378,
    infinite: true,
    swipe: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
        },
      },
    ],
  };

  return (
    <>
      <div className="wk_px-[62px]">
        <ul className="photos">
          {photos?.map((photo: PhotosResponse) => (
            <Photo key={photo.id} data={photo.attributes} />
          ))}
        </ul>
      </div>

      <Slider className="photos" options={sliderOptions} />
    </>
  );
}
