import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { AboutText, Statistics } from '@/app/components';

import { useTranslation } from '@/app/i18n';
import { cn } from '@/app/lib/utils';
import { transition } from '@/app/lib/constants';
import getQueryClient from '@/app/lib/utils/getQueryClient';
import {
  Contacts,
  getContacts,
  getVideo,
  PROJECT_API,
  VideoResponse,
} from '@/app/lib/api';

import { PageProps } from '@/app/lib/types';

export default async function Page({ params: { lng } }: Readonly<PageProps>) {
  const { t } = await useTranslation(lng, 'about');

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['contacts'],
    queryFn: getContacts,
    staleTime: 10 * 1000,
  });

  await queryClient.prefetchQuery({
    queryKey: ['video'],
    queryFn: getVideo,
    staleTime: 10 * 1000,
  });

  const contacts = queryClient.getQueryData(['contacts']) as Contacts;
  const video = queryClient.getQueryData(['video']) as VideoResponse;

  const { instagram, telegram, tiktok } = contacts.attributes;

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <section
        id="about"
        className="wk_mx-auto wk_mb-[12px] wk_px-[16px] wk_py-[52px] tablet:wk_px-[68px] tablet:wk_pt-[56px] tablet:wk_pb-[68px] desktop:wk_w-[1416px] desktop:wk_py-[120px] wk_rounded-50 wk_bg-th_black"
      >
        <h2 className="wk_absolute wk_size-[1px] wk_m-[-1px] wk_p-0 wk_overflow-hidden wk_border-0">
          {t('title')}
        </h2>

        <div className="desktop:wk_flex desktop:wk_justify-between wk_mb-[32px] tablet:wk_mb-[52px]">
          <p className="desktop:wk_w-[728px] tablet:wk_mb-[8px] desktop:wk_mb-[0] wk_px-[16px] wk_py-[8px] desktop:wk_p-[0] wk_text-[30px] wk_leading-[calc(36/30)] tablet:wk_text-[50px] tablet:wk_leading-[calc(60/50)] wk_text-gray_300">
            {t('mainText')}
          </p>

          <AboutText lng={lng} instagram={instagram} />
        </div>

        <div className="wk_relative">
          <ul className="wk_absolute wk_top-[571px] tablet:wk_top-[30px] desktop:wk_top-[32px] tablet:wk_left-[calc(100vw-578px)] desktop:wk_left-[32px] wk_flex wk_justify-center wk_flex-wrap wk_gap-[8px] tablet:wk_gap-[12px] wk_w-[100%] tablet:wk_w-[388px]">
            <li>
              <a
                href={`https://t.me/${telegram}`}
                target="_blank"
                className={cn(
                  'wk_block wk_px-[20px] wk_py-[10px] wk_rounded-25 wk_leading-[calc(18/16)] tablet:wk_text-[20px] tablet:wk_leading-[calc(24/20)] wk_text-th_white wk_bg-[#FFFFFF33] wk_transition-colors hover:wk_text-th_accent hover:wk_bg-[#FE59C233] focus:wk_text-th_accent focus:wk_bg-[#FE59C233] focus:wk_outline-none',
                  transition,
                )}
              >
                Telegram
              </a>
            </li>

            <li>
              <a
                href={`https://www.instagram.com/${instagram}`}
                target="_blank"
                className={cn(
                  'wk_block wk_px-[20px] wk_py-[10px] wk_rounded-25 wk_leading-[calc(18/16)] tablet:wk_text-[20px] tablet:wk_leading-[calc(24/20)] wk_text-th_white wk_bg-[#FFFFFF33] wk_transition-colors hover:wk_text-th_accent hover:wk_bg-[#FE59C233] focus:wk_text-th_accent focus:wk_bg-[#FE59C233] focus:wk_outline-none',
                  transition,
                )}
              >
                Instagram
              </a>
            </li>

            <li>
              <a
                href={`https://www.tiktok.com/@${tiktok}`}
                target="_blank"
                className={cn(
                  'wk_block wk_px-[20px] wk_py-[10px] wk_rounded-25 wk_leading-[calc(18/16)] tablet:wk_text-[20px] tablet:wk_leading-[calc(24/20)] wk_text-th_white wk_bg-[#FFFFFF33] wk_transition-colors hover:wk_text-th_accent hover:wk_bg-[#FE59C233] focus:wk_text-th_accent focus:wk_bg-[#FE59C233] focus:wk_outline-none',
                  transition,
                )}
              >
                TikTok
              </a>
            </li>
          </ul>

          <video
            controls
            src={`${PROJECT_API}${video.attributes.url}`}
            className="wk_w-[100%] wk_h-[635px] wk_rounded-[52px]"
            poster={`${PROJECT_API}${video.attributes.posterUrl}`}
          ></video>
        </div>

        <Statistics t={t} />
      </section>
    </HydrationBoundary>
  );
}
