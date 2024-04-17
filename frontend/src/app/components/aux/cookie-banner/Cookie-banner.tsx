'use client';

import { useTranslation } from '@/app/i18n/client';
import { transition } from '@/app/lib/constants';
import { cn } from '@/app/lib/utils';
import { CookieBannerProps } from '.';

export interface CookieBannerContentProps {
  bannerClassName: string;
  onCustomizeClick: () => void;
  onRejectClick: () => void;
  onAcceptClick: () => void;
}

export default function CookieBanner({
  lng,
  onCustomizeClick,
  onRejectClick,
  onAcceptClick,
}: Readonly<
  CookieBannerProps & Omit<CookieBannerContentProps, 'bannerClassName'>
>) {
  const { t } = useTranslation(lng, 'cookie');

  return (
    <div className="wk_fixed wk_top-[0] wk_left-[0] wk_w-[100vw] wk_h-[100vh] wk_z-[1000] wk_bg-backdrop">
      <div className="wk_absolute wk_bottom-[20px] wk_left-[50%] wk_translate-x-[-50%] wk_w-[calc(100%-40px)] mobile:wk_w-[360px] tablet:wk_w-[708px] desktop:wk_w-[1210px] wk_p-[20px] tablet:wk_p-[30px] wk_rounded-20 wk_bg-th_accent ">
        <h2 className="wk_mb-[20px] wk_text-[22px] wk_leading-[calc(32/22)]">
          {t('cookieBannerTitle')}
        </h2>

        <p className="wk_mb-[30px] wk_text-[12px] wk_leading-[calc(16/12)]">
          {t('cookieBannerText')}
        </p>

        <ul className="wk_flex wk_flex-col tablet:wk_flex-row tablet:wk_justify-end wk_gap-[26px]">
          <li>
            <button
              type="button"
              onClick={onCustomizeClick}
              className={cn(
                'wk_block wk_w-[100%] wk_px-[32px] wk_py-[16px] wk_bg-transparent wk_border wk_border-th_black wk_rounded-20 wk_transition-shadow hover:wk_shadow-[0px_0px_50px_0px_#FFFFFF80] focus:wk_shadow-[0px_0px_50px_0px_#FFFFFF80] focus:wk_outline-none',
                transition,
              )}
            >
              {t('cookieCustomizeBtn')}
            </button>
          </li>

          <li>
            <button
              type="button"
              onClick={onRejectClick}
              className={cn(
                'wk_block wk_w-[100%] wk_px-[32px] wk_py-[16px] wk_bg-transparent wk_border wk_border-th_black wk_rounded-20 wk_transition-shadow hover:wk_shadow-[0px_0px_50px_0px_#FFFFFF80] focus:wk_shadow-[0px_0px_50px_0px_#FFFFFF80] focus:wk_outline-none',
                transition,
              )}
            >
              {t('cookieRejectBtn')}
            </button>
          </li>

          <li>
            <button
              type="button"
              onClick={onAcceptClick}
              className={cn(
                'wk_block wk_w-[100%] wk_px-[32px] wk_py-[16px] wk_bg-th_white wk_rounded-20 wk_transition-shadow hover:wk_shadow-[0px_0px_50px_0px_#FFFFFF80] focus:wk_shadow-[0px_0px_50px_0px_#FFFFFF80] focus:wk_outline-none',
                transition,
              )}
            >
              {t('cookieAcceptBtn')}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
