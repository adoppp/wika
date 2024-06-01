'use client';

import { useEffect, useState } from 'react';
import { hasCookie, setCookie } from 'cookies-next';

import { CookieBanner, CookieSettings } from '@/app/components';

import { cn, Svg } from '@/app/lib/utils';
import { transition } from '@/app/lib/constants';
import { useTranslation } from '@/app/i18n/client';

import { PageProps } from '@/app/lib/types';

export const allRejectedCookies = {
  necessary: true,
  functional: false,
  analytics: false,
  performance: false,
  advertisement: false,
};

export const allAcceptedCookies = {
  necessary: true,
  functional: true,
  analytics: true,
  performance: true,
  advertisement: true,
};

export default function Page({ params: { lng } }: Readonly<PageProps>) {
  const [showConsent, setShowConsent] = useState(false);
  const { t } = useTranslation(lng, 'cookie');

  useEffect(() => {
    setShowConsent(!hasCookie('cookieConsent'));
  }, []);

  const openCookieSettings = () => {
    const dialog = document.querySelector(
      '.cookie_settings',
    ) as HTMLDialogElement;
    dialog?.showModal();
  };

  const rejectAllCookies = () => {
    showConsent && setShowConsent(false);

    setCookie('cookieConsent', allRejectedCookies);
  };

  const acceptAllCookies = () => {
    showConsent && setShowConsent(false);

    setCookie('cookieConsent', allAcceptedCookies);
  };

  return (
    <>
      <button
        type="button"
        onClick={openCookieSettings}
        aria-label={t('cookieSettingsTitle')}
        className={cn(
          'wk_fixed wk_bottom-[20px] wk_left-[20px] wk_z-[1000] wk_flex wk_justify-center wk_items-center wk_size-[40px] wk_p-[8px] wk_rounded-[50%] wk_bg-th_accent wk_transition-shadow hover:wk_shadow-[0px_0px_50px_0px_#FE59C280] focus:wk_shadow-[0px_0px_50px_0px_#FE59C280] focus:wk_outline-none',
          transition,
        )}
      >
        <Svg id="cookie" />
      </button>

      {showConsent && (
        <CookieBanner
          lng={lng}
          onCustomizeClick={() => {
            setShowConsent(false);
            openCookieSettings();
          }}
          onRejectClick={rejectAllCookies}
          onAcceptClick={acceptAllCookies}
        />
      )}

      <CookieSettings
        lng={lng}
        onRejectClick={rejectAllCookies}
        onAcceptClick={acceptAllCookies}
        className="cookie_settings"
      />
    </>
  );
}
