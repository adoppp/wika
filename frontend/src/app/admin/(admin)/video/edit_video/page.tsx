import { EditVideoFrom } from '@/app/components';

import { getVideo, VideoResponse } from '@/app/lib/api';
import getQueryClient from '@/app/lib/utils/getQueryClient';

export default async function Page() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['video'],
    queryFn: () => getVideo({ cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  const video = queryClient.getQueryData(['video']) as VideoResponse;

  return <EditVideoFrom values={video?.attributes} />;
}
