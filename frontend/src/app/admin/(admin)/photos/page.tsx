import Link from 'next/link';
import Image from 'next/image';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { getPhotos, PhotosResponse, PROJECT_API } from '@/app/lib/api';
import { transition } from '@/app/lib/constants';
import { cn, Svg } from '@/app/lib/utils';
import getQueryClient from '@/app/lib/utils/getQueryClient';

export default async function Page() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['photos'],
    queryFn: () => getPhotos('uk', { cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  queryClient.invalidateQueries({ queryKey: ['photos'] });

  const photos = queryClient.getQueryData(['photos']) as PhotosResponse[];

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <div className="wk_h-[calc(100vh-102px)] wk_overflow-x-scroll">
        <table className="wk_w-[100%] wk_font-500 wk_border-separate wk_border-spacing-y-[8px]">
          <thead className="wk_sticky wk_top-[8px] wk_bg-gray_100">
            <tr>
              <th className="wk_py-[20px] wk_rounded-l-[16px]">No</th>
              <th className="wk_py-[20px] wk_text-left">Опис</th>
              <th className="wk_py-[20px]">До</th>
              <th className="wk_py-[20px]">Після</th>
              <th className="wk_py-[20px] wk_rounded-r-[16px]">Дія</th>
            </tr>
          </thead>

          <tbody className="wk_text-[12px]">
            {photos &&
              photos.map(
                (
                  {
                    attributes: {
                      description,
                      beforeUrl,
                      beforeMediaId,
                      afterUrl,
                      afterMediaId,
                      ruLocaleId,
                    },
                    id,
                  },
                  index,
                ) => (
                  <tr className="wk_bg-gray_50" key={id}>
                    <td className="wk_w-[72px] wk_py-[20px] wk_rounded-l-[16px] wk_text-center">
                      {index + 1}
                    </td>

                    <td>{description}</td>

                    <td className="wk_w-[76px] wk_align-middle">
                      <div className="wk_relative wk_w-[56px] wk_h-[36px] wk_mx-auto wk_border wk_border-dashed wk_border-[#535A62] wk_rounded-[4px] wk_bg-[#22262D]">
                        <Image
                          src={`${PROJECT_API}${beforeUrl}`}
                          alt="Before photo"
                          fill={true}
                          className="wk_object-contain"
                        />
                      </div>
                    </td>

                    <td className="wk_w-[76px] wk_align-middle">
                      <div className="wk_relative wk_w-[56px] wk_h-[36px] wk_mx-auto wk_border wk_border-dashed wk_border-[#535A62] wk_rounded-[4px] wk_bg-[#22262D]">
                        <Image
                          src={`${PROJECT_API}${afterUrl}`}
                          alt="After photo"
                          fill={true}
                          className="wk_object-contain"
                        />
                      </div>
                    </td>

                    <td className="wk_w-[92px] wk_rounded-r-[16px] wk_align-middle">
                      <div className="wk_flex wk_justify-evenly wk_items-center">
                        <Link
                          href={`photos/${id}/edit`}
                          className={cn(
                            'wk_text-th_accent wk_rounded-[4px] hover:wk_text-th_black hover:wk_bg-th_accent focus:wk_text-th_black focus:wk_bg-th_accent focus:wk_outline-none wk_transition-colors',
                            transition,
                          )}
                        >
                          <Svg id="edit" />
                        </Link>

                        <Link
                          href={`photos?deletePhoto=${id},${ruLocaleId}&media=${beforeMediaId},${afterMediaId}`}
                          className={cn(
                            'wk_flex wk_justify-center wk_items-center wk_size-[32px] wk_text-red_danger wk_rounded-[4px] hover:wk_text-th_black hover:wk_bg-red_danger focus:wk_text-th_black focus:wk_bg-red_danger focus:wk_outline-none wk_transition-colors',
                            transition,
                          )}
                        >
                          <Svg id="trash" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ),
              )}
          </tbody>
        </table>
      </div>
    </HydrationBoundary>
  );
}
