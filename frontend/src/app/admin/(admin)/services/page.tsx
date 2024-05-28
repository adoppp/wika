import { getServices, ServiceResponse } from '@/app/lib/api';
import { transition } from '@/app/lib/constants';
import { cn, Svg } from '@/app/lib/utils';
import getQueryClient from '@/app/lib/utils/getQueryClient';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import Link from 'next/link';

export default async function Page() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['services'],
    queryFn: () => getServices('uk', { cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  queryClient.invalidateQueries({ queryKey: ['services'] });

  const services = queryClient.getQueryData(['services']) as ServiceResponse[];

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <div className="wk_h-[calc(100vh-102px)] wk_overflow-x-scroll">
        <table className="wk_w-[100%] wk_font-500 wk_border-separate wk_border-spacing-y-[8px]">
          <thead className="wk_sticky wk_top-[8px] wk_bg-gray_100">
            <tr>
              <th className="wk_py-[20px] wk_rounded-l-[16px]">No</th>

              <th className="wk_py-[20px] wk_text-left">Заголовок</th>

              <th className="wk_py-[20px] wk_text-left">Опис</th>

              <th className="wk_py-[20px] wk_rounded-r-[16px]">Дія</th>
            </tr>
          </thead>

          <tbody className="wk_text-[12px]">
            {services?.map(({ id, attributes }, index) => {
              return (
                <tr key={id} className="wk_bg-gray_50">
                  <td className="wk_w-[72px] wk_py-[20px] wk_rounded-l-[16px] wk_text-center">
                    {index + 1}
                  </td>

                  <td className="wk_w-[260px] wk_py-[20px]">
                    {attributes.title}
                  </td>

                  <td className="wk_max-w-[754px] wk_py-[20px] wk_truncate">
                    {attributes.description.join('; ')}
                  </td>

                  <td className="wk_w-[92px] wk_rounded-r-[16px] wk_align-middle">
                    <div className="wk_flex wk_justify-evenly wk_items-center">
                      <Link
                        href={`services/${id}/edit`}
                        className={cn(
                          'wk_text-th_accent wk_rounded-[4px] hover:wk_text-th_black hover:wk_bg-th_accent focus:wk_text-th_black focus:wk_bg-th_accent focus:wk_outline-none wk_transition-colors',
                          transition,
                        )}
                      >
                        <Svg id="edit" />
                      </Link>

                      <Link
                        href={`services?deleteService=${id},${attributes.ruLocaleId}`}
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
              );
            })}
          </tbody>
        </table>
      </div>
    </HydrationBoundary>
  );
}
