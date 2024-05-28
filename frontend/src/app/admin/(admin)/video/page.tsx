import { getVideo, PROJECT_API, VideoResponse } from '@/app/lib/api';
import getQueryClient from '@/app/lib/utils/getQueryClient';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

export default async function Page() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['video'],
    queryFn: () => getVideo({ cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  const video = queryClient.getQueryData(['video']) as VideoResponse;

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <div className="wk_flex wk_justify-center wk_items-center wk_h-[calc(100vh-102px)] wk_border-[2px] wk_border-dashed wk_border-[#535A62] wk_rounded-[8px] wk_bg-gray_50">
        <video
          controls
          src={`${PROJECT_API}${video.attributes.url}`}
          className="wk_h-[calc(100vh-106px)] wk_rounded-[8px]"
        ></video>
      </div>
    </HydrationBoundary>
  );
}
