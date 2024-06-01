import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { Logo, NavBar } from '@/app/components';

import { transition } from '@/app/lib/constants';
import { useTranslation } from '@/app/i18n';
import { Svg, cn } from '@/app/lib/utils';
import getQueryClient from '@/app/lib/utils/getQueryClient';
import { Contacts, getContacts } from '@/app/lib/api';

import { PageProps } from '@/app/lib/types';

export default async function Page({ params: { lng } }: Readonly<PageProps>) {
  const { t } = await useTranslation(lng, 'footer');
  const { t: navT } = await useTranslation(lng, 'navBar');

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['contacts'],
    queryFn: getContacts,
    staleTime: 10 * 1000,
  });

  const contacts = queryClient.getQueryData(['contacts']) as Contacts;

  const { instagram, telegram, tiktok } = contacts.attributes;

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <footer className="wk_mx-auto wk_px-[12px] wk_py-[48px] desktop:wk_w-[1416px] desktop:wk_px-[68px] desktop:wk_py-[100px] wk_rounded-50 wk_bg-th_black">
        <div className="wk_flex wk_flex-col wk_items-center wk_gap-[40px] wk_mb-[40px] tablet:wk_mb-[48px] desktop:wk_flex-row desktop:wk_justify-between">
          <Logo lng={lng} className="desktop:wk_w-[152px]" />

          <NavBar location="footer" t={navT} />

          <ul className="wk_flex wk_gap-[44px] tablet:wk_gap-[52px] desktop:wk_gap-[32px]">
            <li>
              <a
                href={`https://t.me/${telegram}`}
                target="_blank"
                aria-label={t('ariaLabelTg')}
                className={cn(
                  'wk_flex wk_justify-center wk_items-center wk_size-[35px] tablet:wk_size-[30px] wk_rounded-[4px] wk_bg-th_white wk_transition-colors hover:wk_bg-th_accent focus:wk_bg-th_accent focus:wk_outline-none',
                  transition,
                )}
              >
                <Svg id="telegram" />
              </a>
            </li>

            <li>
              <a
                href={`https://www.instagram.com/${instagram}`}
                target="_blank"
                aria-label={t('ariaLabelIg')}
                className={cn(
                  'wk_flex wk_justify-center wk_items-center wk_size-[35px] tablet:wk_size-[30px] wk_rounded-[4px] wk_bg-th_white wk_transition-colors hover:wk_bg-th_accent focus:wk_bg-th_accent focus:wk_outline-none',
                  transition,
                )}
              >
                <Svg id="instagram" />
              </a>
            </li>

            <li>
              <a
                href={`https://www.tiktok.com/@${tiktok}`}
                target="_blank"
                aria-label={t('ariaLabelTt')}
                className={cn(
                  'wk_flex wk_justify-center wk_items-center wk_size-[35px] tablet:wk_size-[30px] wk_rounded-[4px] wk_bg-th_white wk_transition-colors hover:wk_bg-th_accent focus:wk_bg-th_accent focus:wk_outline-none',
                  transition,
                )}
              >
                <Svg id="tiktok" />
              </a>
            </li>
          </ul>
        </div>

        <p className="wk_text-[12px] wk_leading-[calc(16/12)] tablet:wk_text-[16px] tablet:wk_leading-[calc(20/16)] wk_text-center wk_text-gray_300">
          {t('copyrightStart')}

          <a
            href="https://www.instagram.com/d1g1talsolut1ons"
            target="_blank"
            className={cn(
              'wk_transition-colors hover:wk_text-th_white focus:wk_text-th_white focus:wk_outline-none',
              transition,
            )}
          >
            &#169; Digital Solutions 2024.
          </a>

          {t('copyrightEnd')}
        </p>
      </footer>
    </HydrationBoundary>
  );
}
