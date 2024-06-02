import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { Service } from '@/app/components';

import getQueryClient from '@/app/lib/utils/getQueryClient';
import { getServices, ServiceResponse } from '@/app/lib/api';
import { ServicesListProps } from '../servicesList';

export default async function ServicesList({
  lng,
}: Readonly<ServicesListProps>) {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['services'],
    queryFn: () => getServices(lng),
    staleTime: 10 * 1000,
  });

  queryClient.invalidateQueries({ queryKey: ['services'] });

  const services = queryClient.getQueryData(['services']) as ServiceResponse[];

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <ol className="wk_flex wk_flex-col wk_gap-[12px] wk_text-gray_200 wk_list-decimal wk_list-inside marker:wk_text-[24px] marker:wk_leading-[calc(28/24)] marker:wk_font-500">
        {services.map(service => (
          <Service key={service.id} data={service.attributes} lng={lng} />
        ))}
      </ol>
    </HydrationBoundary>
  );
}
