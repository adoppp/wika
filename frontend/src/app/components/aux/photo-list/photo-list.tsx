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
  {
    id: '5',
    attributes: {
      description: 'End + 1',
      beforeUrl: '',
      afterUrl: '',
    },
  },
  {
    id: '6',
    attributes: {
      description: 'End + 2',
      beforeUrl: '',
      afterUrl: '',
    },
  },
];

export default function PhotoList({ lng }: Readonly<PhotoListProps>) {
  const sliderOptions: Options = {
    itemsToShow: 1,
    itemsToSwipe: 1,
    dots: true,
    gap: 12,
    infinite: true,
    swipe: true,
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
    <>
      <div className="tablet:wk_px-[calc(50%-189px)]">
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
