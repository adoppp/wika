'use client';

import { useState } from 'react';
import { hasCookie, getCookie, setCookie } from 'cookies-next';

import {
  allAcceptedCookies,
  allRejectedCookies,
} from '@/app/[lng]/@cookie/page';
import { useTranslation } from '@/app/i18n/client';
import { CookieSettingsProps } from '.';
import { cn, Svg } from '@/app/lib/utils';
import { Toggle } from '@/app/components';
import { transition } from '@/app/lib/constants';

export default function CookieSettings({
  lng,
  className,
  onRejectClick,
  onAcceptClick,
}: Readonly<CookieSettingsProps>) {
  const [isDescriptionFull, setIsDescriptionFull] = useState(false);
  const [cookieSettings, setCookieSettings] = useState<
    typeof allRejectedCookies
  >(
    (hasCookie('cookieConsent') &&
      JSON.parse(getCookie('cookieConsent') as string)) ||
      allRejectedCookies,
  );

  const { t } = useTranslation(lng, 'cookie');

  const handleToggle = (id: string): void => {
    setCookieSettings(values => ({ ...values, [id]: !(values as any)[id] }));
  };

  const closeDialog = () => {
    const dialog = document.querySelector(`.${className}`) as HTMLDialogElement;
    dialog.close();
  };

  return (
    <dialog
      className={cn(
        'backdrop:wk_bg-backdrop wk_w-[calc(100vw-24px)] wk_max-h-[70vh] wk_p-[20px] tablet:wk_p-[30px] desktop:wk_px-[70px] desktop:wk_py-[50px] wk_rounded-50 wk_bg-th_accent',
        className,
      )}
    >
      <div className="wk_pb-[12px] wk_border-b wk_border-solid wk_border-th_white">
        <h2 className="wk_mb-[20px] wk_text-[22px] wk_leading-[calc(32/22)] wk_text-center">
          {t('cookieSettingsTitle')}
        </h2>

        <p className="wk_mb-[20px] wk_text-[12px] wk_leading-[calc(16/12)]">
          {t('cookieSettingsText1')}
        </p>

        <p className="wk_mb-[20px] wk_text-[12px] wk_leading-[calc(16/12)]">
          {t('cookieSettingsText2')}
          {!isDescriptionFull && (
            <>
              ...{' '}
              <button
                type="button"
                onClick={() => setIsDescriptionFull(true)}
                className="wk_p-0 wk_text-th_white hover:wk_text-th_black focus:wk_text-th_black focus:wk_outline-none"
              >
                {t('cookieSettingsShowMore')}
              </button>
            </>
          )}
        </p>

        {isDescriptionFull && (
          <>
            <p className="wk_mb-[20px] wk_text-[12px] wk_leading-[calc(16/12)]">
              {t('cookieSettingsText3')}
            </p>

            <p className="wk_text-[12px] wk_leading-[calc(16/12)]">
              {t('cookieSettingsText4')}
            </p>

            <button
              type="button"
              onClick={() => setIsDescriptionFull(false)}
              className="wk_p-0 wk_text-[12px] wk_leading-[calc(16/12)] wk_text-th_white"
            >
              {t('cookieSettingsShowLess')}
            </button>
          </>
        )}
      </div>

      <ul>
        <li className="wk_py-[12px] wk_border-b wk_border-solid wk_border-th_white">
          <details className="wk_group">
            <summary className="wk_relative wk_flex wk_items-center wk_flex-wrap wk_gap-[12px] wk_list-none wk_cursor-pointer group-open:wk_mb-[12px] focus:wk_outline-none">
              <Svg
                id="arrowCorner"
                className="wk_size-[22px] group-open:wk_rotate-[-90deg]"
              />

              <h3>{t('cookieSettingsNecessaryTitle')}</h3>

              <p className="wk_text-[12px] wk_leading-[calc(16/12)]">
                {t('cookieSettingsNecessaryText')}
              </p>

              <span className="wk_absolute wk_top-0 wk_right-0 wk_text-green_success">
                {t('cookieSettingsAlwaysActive')}
              </span>
            </summary>

            <ul className="wk_bg-hotPink_300 wk_rounded-[8px]">
              <li className="wk_p-[8px] wk_text-[12px] wk_leading-[calc(20/12)]">
                <table>
                  <tbody>
                    <tr>
                      <th scope="row" className="wk_w-[100px] wk_font-600">
                        Cookie
                      </th>
                      <td>i18next</td>
                    </tr>

                    <tr>
                      <th scope="row" className="wk_w-[100px] wk_font-600">
                        {t('cookieSettingsDuration')}
                      </th>
                      <td>{t('cookieSettingsDurationSession')}</td>
                    </tr>

                    <tr>
                      <th scope="row" className="wk_w-[100px] wk_font-600">
                        {t('cookieSettingsDescription')}
                      </th>
                      <td>
                        {lng === 'uk'
                          ? 'Ми встановлюємо цей файл cookie, щоб запам’ятовувати бажану мову для цього веб-сайту. Він буде автоматично видалений, коли ви закриєте сайт.'
                          : 'Мы устанавливаем этот файл cookie для запоминания желаемого языка для этого веб-сайта. Он будет автоматически удален, когда вы закроете сайт.'}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </li>
            </ul>
          </details>
        </li>

        <li className="wk_py-[12px] wk_border-b wk_border-solid wk_border-th_white">
          <details className="wk_group">
            <summary className="wk_relative wk_flex wk_items-center wk_flex-wrap wk_gap-[12px] wk_list-none wk_cursor-pointer group-open:wk_mb-[12px] focus:wk_outline-none">
              <Svg
                id="arrowCorner"
                className="wk_size-[22px] group-open:wk_rotate-[-90deg] "
              />

              <h3>{t('cookieSettingsFunctionalTitle')}</h3>

              <p className="wk_text-[12px] wk_leading-[calc(16/12)]">
                {t('cookieSettingsFunctionalText')}
              </p>

              <Toggle
                checked={cookieSettings.functional}
                id="functional"
                handleToggle={handleToggle}
              />
            </summary>

            <ul className="wk_bg-hotPink_300 wk_rounded-[8px]">
              <li className="wk_p-[8px] wk_text-[12px] wk_leading-[calc(20/12)]">
                {t('cookieSettingsNoCookies')}
              </li>
            </ul>
          </details>
        </li>

        <li className="wk_py-[12px] wk_border-b wk_border-solid wk_border-th_white">
          <details className="wk_group">
            <summary className="wk_relative wk_flex wk_items-center wk_flex-wrap wk_gap-[12px] wk_list-none wk_cursor-pointer group-open:wk_mb-[12px] focus:wk_outline-none">
              <Svg
                id="arrowCorner"
                className="wk_size-[22px] group-open:wk_rotate-[-90deg] "
              />

              <h3>{t('cookieSettingsAnalyticsTitle')}</h3>

              <p className="wk_text-[12px] wk_leading-[calc(16/12)]">
                {t('cookieSettingsAnalyticsText')}
              </p>

              <Toggle
                checked={cookieSettings.analytics}
                id="analytics"
                handleToggle={handleToggle}
              />
            </summary>

            <ul className="wk_bg-hotPink_300 wk_rounded-[8px]">
              <li className="wk_p-[8px] wk_text-[12px] wk_leading-[calc(20/12)]">
                {t('cookieSettingsNoCookies')}
              </li>
            </ul>
          </details>
        </li>

        <li className="wk_py-[12px] wk_border-b wk_border-solid wk_border-th_white">
          <details className="wk_group">
            <summary className="wk_relative wk_flex wk_items-center wk_flex-wrap wk_gap-[12px] wk_list-none wk_cursor-pointer group-open:wk_mb-[12px] focus:wk_outline-none">
              <Svg
                id="arrowCorner"
                className="wk_size-[22px] group-open:wk_rotate-[-90deg] "
              />

              <h3>{t('cookieSettingsPerformanceTitle')}</h3>

              <p className="wk_text-[12px] wk_leading-[calc(16/12)]">
                {t('cookieSettingsPerformanceText')}
              </p>

              <Toggle
                checked={cookieSettings.performance}
                id="performance"
                handleToggle={handleToggle}
              />
            </summary>

            <ul className="wk_bg-hotPink_300 wk_rounded-[8px]">
              <li className="wk_p-[8px] wk_text-[12px] wk_leading-[calc(20/12)]">
                {t('cookieSettingsNoCookies')}
              </li>
            </ul>
          </details>
        </li>

        <li className="wk_py-[12px]">
          <details className="wk_group">
            <summary className="wk_relative wk_flex wk_items-center wk_flex-wrap wk_gap-[12px] wk_list-none wk_cursor-pointer group-open:wk_mb-[12px] focus:wk_outline-none">
              <Svg
                id="arrowCorner"
                className="wk_size-[22px] group-open:wk_rotate-[-90deg] "
              />

              <h3>{t('cookieSettingsAdvertisementTitle')}</h3>

              <p className="wk_text-[12px] wk_leading-[calc(16/12)]">
                {t('cookieSettingsAdvertisementText')}
              </p>

              <Toggle
                checked={cookieSettings.advertisement}
                id="advertisement"
                handleToggle={handleToggle}
              />
            </summary>

            <ul className="wk_bg-hotPink_300 wk_rounded-[8px]">
              <li className="wk_p-[8px] wk_text-[12px] wk_leading-[calc(20/12)]">
                {t('cookieSettingsNoCookies')}
              </li>
            </ul>
          </details>
        </li>
      </ul>

      <ul className="wk_flex wk_flex-col tablet:wk_flex-row tablet:wk_justify-end wk_gap-[26px] wk_mt-[30px]">
        <li>
          <button
            type="button"
            onClick={() => {
              setCookieSettings(allRejectedCookies);
              onRejectClick();
              closeDialog();
            }}
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
            onClick={() => {
              setCookie('cookieConsent', cookieSettings);
              closeDialog();
            }}
            className={cn(
              'wk_block wk_w-[100%] wk_px-[32px] wk_py-[16px] wk_bg-transparent wk_border wk_border-th_black wk_rounded-20 wk_transition-shadow hover:wk_shadow-[0px_0px_50px_0px_#FFFFFF80] focus:wk_shadow-[0px_0px_50px_0px_#FFFFFF80] focus:wk_outline-none',
              transition,
            )}
          >
            {t('cookieSaveBtn')}
          </button>
        </li>

        <li>
          <button
            type="button"
            onClick={() => {
              setCookieSettings(allAcceptedCookies);
              onAcceptClick();
              closeDialog();
            }}
            className={cn(
              'wk_block wk_w-[100%] wk_px-[32px] wk_py-[16px] wk_bg-th_white wk_rounded-20 wk_transition-shadow hover:wk_shadow-[0px_0px_50px_0px_#FFFFFF80] focus:wk_shadow-[0px_0px_50px_0px_#FFFFFF80] focus:wk_outline-none',
              transition,
            )}
          >
            {t('cookieAcceptBtn')}
          </button>
        </li>
      </ul>
    </dialog>
  );
}
