'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '@/app/components';

import { useTranslation } from '@/app/i18n/client';

import { PageProps } from '@/app/lib/types';

export default function Page({
  params: { lng },
  searchParams,
}: Readonly<PageProps>) {
  const router = useRouter();
  const { t } = useTranslation(lng, 'privacy');

  const dialog = useRef(null);

  useEffect(() => {
    if (searchParams?.privacyPolicy === 'true') {
      (dialog?.current as HTMLDialogElement | null)?.showModal();
      window.addEventListener('keydown', onKeydown);
    } else {
      (dialog?.current as HTMLDialogElement | null)?.close();
      window.removeEventListener('keydown', onKeydown);
    }

    return () => window.removeEventListener('keydown', onKeydown);
  });

  const onKeydown = (e: KeyboardEvent): void => {
    if (e.code === 'Escape') {
      closePrivacyPolicy();
    }
  };

  const closePrivacyPolicy = (): void => {
    if (window.history.length <= 2) {
      (dialog?.current as HTMLDialogElement | null)?.close();
    } else {
      router.back();
    }
  };

  return (
    <dialog
      ref={dialog}
      className="backdrop:wk_bg-backdrop wk_w-[calc(100vw-24px)] wk_max-h-[70vh] wk_p-[20px] tablet:wk_p-[30px] desktop:wk_px-[70px] desktop:wk_py-[50px] wk_rounded-50 wk_bg-th_accent"
    >
      <h2 className="wk_mb-[20px] wk_text-[22px] wk_leading-[calc(32/22)] wk_text-center">
        {t('privacyTitle')}
      </h2>

      <p className="wk_mb-[20px] wk_text-[12px] wk_leading-[calc(16/12)]">
        {t('privacyEffectiveDate')}
      </p>

      <p className="wk_mb-[20px] wk_text-[12px] wk_leading-[calc(16/12)]">
        {t('privacyGeneralText')}{' '}
        <a
          className="wk_underline wk_text-th_white wk_transition-colors hover:wk_text-th_black focus:wk_text-th_black focus:wk_outline-none"
          href="mailto:perkalyuk@gmail.com"
        >
          perkalyuk@gmail.com
        </a>
      </p>

      <h3 className="wk_mb-[8px]">
        <u>{t('privacyPurposeTitle')}</u>
      </h3>

      <p className="wk_mb-[20px] wk_text-[12px] wk_leading-[calc(16/12)]">
        {t('privacyPurposeText')}
      </p>

      <ol className="wk_ml-[28px] wk_mb-[20px] wk_text-[12px] wk_leading-[calc(20/12)] wk_list-decimal">
        <li>{t('privacyPurposeItem1')}</li>
        <li>{t('privacyPurposeItem2')}</li>
        <li>{t('privacyPurposeItem3')}</li>
        <li>{t('privacyPurposeItem4')}</li>
        <li>{t('privacyPurposeItem5')}</li>
      </ol>

      <h3 className="wk_mb-[8px]">
        <u>{t('privacyConsentTitle')}</u>
      </h3>

      <p className="wk_mb-[20px] wk_text-[12px] wk_leading-[calc(16/12)]">
        {t('privacyConsentLabel')}
      </p>

      <ol className="wk_ml-[28px] wk_mb-[20px] wk_text-[12px] wk_leading-[calc(20/12)] wk_list-decimal">
        <li>{t('privacyConsentItem')}</li>
      </ol>

      <p className="wk_mb-[20px] wk_text-[12px] wk_leading-[calc(16/12)]">
        {t('privacyConsentText1')}
      </p>

      <p className="wk_mb-[20px] wk_text-[12px] wk_leading-[calc(16/12)]">
        {t('privacyConsentText2')}
      </p>

      <h3 className="wk_mb-[8px]">
        <u>{t('privacyProcessingTitle')}</u>
      </h3>

      <p className="wk_mb-[20px] wk_text-[12px] wk_leading-[calc(16/12)]">
        {t('privacyProcessingText')}
      </p>

      <p className="wk_mb-[20px] wk_text-[12px] wk_leading-[calc(16/12)]">
        {t('privacyProcessingLabel')}
      </p>

      <ol className="wk_ml-[28px] wk_mb-[20px] wk_text-[12px] wk_leading-[calc(20/12)] wk_list-decimal">
        <li>{t('privacyProcessingItem')}</li>
      </ol>

      <h3 className="wk_mb-[8px]">
        <u>{t('privacyDataCollectionTitle')}</u>
      </h3>

      <p className="wk_mb-[20px] wk_text-[12px] wk_leading-[calc(16/12)]">
        {t('privacyDataCollectionText')}
      </p>

      <h4 className="wk_mb-[4px] wk_text-[14px]">
        <u>{t('privacyDataCollectionSubtitle1')}</u>
      </h4>

      <p className="wk_mb-[20px] wk_text-[12px] wk_leading-[calc(16/12)]">
        {t('privacyDataCollectionSubLabel1')}
      </p>

      <ol className="wk_ml-[28px] wk_mb-[20px] wk_text-[12px] wk_leading-[calc(20/12)] wk_list-decimal">
        <li>{t('privacyDataCollectionSubitem1-1')}</li>
        <li>{t('privacyDataCollectionSubitem1-2')}</li>
      </ol>

      <p className="wk_mb-[20px] wk_text-[12px] wk_leading-[calc(16/12)]">
        {t('privacyDataCollectionSubLabel2')}
      </p>

      <ol className="wk_ml-[28px] wk_mb-[20px] wk_text-[12px] wk_leading-[calc(20/12)] wk_list-decimal">
        <li>{t('privacyDataCollectionSubitem2-1')}</li>
      </ol>

      <h3 className="wk_mb-[8px]">
        <u>{t('privacyDataUsageTitle')}</u>
      </h3>

      <p className="wk_mb-[20px] wk_text-[12px] wk_leading-[calc(16/12)]">
        {t('privacyDataUsageText')}
      </p>

      <p className="wk_mb-[20px] wk_text-[12px] wk_leading-[calc(16/12)]">
        {t('privacyDataUsageLabel')}
      </p>

      <ol className="wk_ml-[28px] wk_mb-[20px] wk_text-[12px] wk_leading-[calc(20/12)] wk_list-decimal">
        <li>{t('privacyDataUsageItem')}</li>
      </ol>

      <h3 className="wk_mb-[8px]">
        <u>{t('privacyDataSharingTitle')}</u>
      </h3>

      <h4 className="wk_mb-[4px] wk_text-[14px]">
        <u>{t('privacyDataSharingSubtitle1')}</u>
      </h4>

      <p className="wk_mb-[20px] wk_text-[12px] wk_leading-[calc(16/12)]">
        {t('privacyDataSharingSubtext1')}
      </p>

      <h4 className="wk_mb-[4px] wk_text-[14px]">
        <u>{t('privacyDataSharingSubtitle2')}</u>
      </h4>

      <p className="wk_mb-[20px] wk_text-[12px] wk_leading-[calc(16/12)]">
        {t('privacyDataSharingSubtext2')}
      </p>

      <ol className="wk_ml-[28px] wk_mb-[20px] wk_text-[12px] wk_leading-[calc(20/12)] wk_list-decimal">
        <li>{t('privacyDataSharingItem1')}</li>
        <li>{t('privacyDataSharingItem2')}</li>
        <li>{t('privacyDataSharingItem3')}</li>
        <li>{t('privacyDataSharingItem4')}</li>
      </ol>

      <p className="wk_mb-[20px] wk_text-[12px] wk_leading-[calc(16/12)]">
        {t('privacyDataSharingSubtext3')}
      </p>

      <h3 className="wk_mb-[8px]">
        <u>{t('privacyDataStorageTitle')}</u>
      </h3>

      <p className="wk_mb-[20px] wk_text-[12px] wk_leading-[calc(16/12)]">
        {t('privacyDataStorageText1')}
      </p>

      <p className="wk_mb-[20px] wk_text-[12px] wk_leading-[calc(16/12)]">
        {t('privacyDataStorageText2')}
      </p>

      <h3 className="wk_mb-[8px]">
        <u>{t('privacyDataProtectionTitle')}</u>
      </h3>

      <p className="wk_mb-[20px] wk_text-[12px] wk_leading-[calc(16/12)]">
        {t('privacyDataProtectionText1')}
      </p>

      <p className="wk_mb-[20px] wk_text-[12px] wk_leading-[calc(16/12)]">
        {t('privacyDataProtectionText2')}
      </p>

      <h3 className="wk_mb-[8px]">
        <u>{t('privacyUserRightsTitle')}</u>
      </h3>

      <p className="wk_mb-[20px] wk_text-[12px] wk_leading-[calc(16/12)]">
        {t('privacyUserRightsLabel')}
      </p>

      <ol className="wk_ml-[28px] wk_mb-[20px] wk_text-[12px] wk_leading-[calc(20/12)] wk_list-decimal">
        <li>{t('privacyUserRightsItem1')}</li>
        <li>{t('privacyUserRightsItem2')}</li>
        <li>{t('privacyUserRightsItem3')}</li>
        <li>{t('privacyUserRightsItem4')}</li>
        <li>{t('privacyUserRightsItem5')}</li>
        <li>{t('privacyUserRightsItem6')}</li>
        <li>{t('privacyUserRightsItem7')}</li>
      </ol>

      <h3 className="wk_mb-[8px]">
        <u>{t('privacyChildrenTitle')}</u>
      </h3>

      <p className="wk_mb-[20px] wk_text-[12px] wk_leading-[calc(16/12)]">
        {t('privacyChildrenText')}
      </p>

      <h3 className="wk_mb-[8px]">
        <u>{t('privacyDataUpdateTitle')}</u>
      </h3>

      <p className="wk_mb-[20px] wk_text-[12px] wk_leading-[calc(16/12)]">
        {t('privacyDataUpdateText')}
      </p>

      <p className="wk_mb-[20px] wk_text-[12px] wk_leading-[calc(16/12)]">
        Olha Liashevska <br />
        <a
          className="wk_underline wk_text-th_white wk_transition-colors hover:wk_text-th_black focus:wk_text-th_black focus:wk_outline-none"
          href="mailto:perkalyuk@gmail.com"
        >
          perkalyuk@gmail.com
        </a>
      </p>

      <h3 className="wk_mb-[8px]">
        <u>{t('privacyCookiePolicyTitle')}</u>
      </h3>

      <p className="wk_mb-[20px] wk_text-[12px] wk_leading-[calc(16/12)]">
        {t('privacyCookiePolicyText')}
      </p>

      <p className="wk_mb-[20px] wk_text-[12px] wk_leading-[calc(16/12)]">
        {t('privacyCookiePolicyLabel')}
      </p>

      <ol className="wk_ml-[28px] wk_mb-[20px] wk_text-[12px] wk_leading-[calc(20/12)] wk_list-decimal">
        <li>{t('privacyCookiePolicyItem')}</li>
      </ol>

      <h3 className="wk_mb-[8px]">
        <u>{t('privacyModificationsTitle')}</u>
      </h3>

      <p className="wk_mb-[20px] wk_text-[12px] wk_leading-[calc(16/12)]">
        {t('privacyModificationsText')}
      </p>

      <h3 className="wk_mb-[8px]">
        <u>{t('privacyComplaintsTitle')}</u>
      </h3>

      <p className="wk_mb-[20px] wk_text-[12px] wk_leading-[calc(16/12)]">
        {t('privacyComplaintsText1')} <em>{t('privacyComplaintsSpan')}</em>
        {t('privacyComplaintsText2')}
      </p>

      <h3 className="wk_mb-[8px]">
        <u>{t('privacyContactsTitle')}</u>
      </h3>

      <p className="wk_mb-[20px] wk_text-[12px] wk_leading-[calc(16/12)]">
        {t('privacyContactsText')}{' '}
        <a
          className="wk_underline wk_text-th_white wk_transition-colors hover:wk_text-th_black focus:wk_text-th_black focus:wk_outline-none"
          href="mailto:perkalyuk@gmail.com"
        >
          perkalyuk@gmail.com
        </a>
      </p>

      <Button
        type="button"
        onClick={() => closePrivacyPolicy()}
        label="OK"
        color="white"
        lng={lng}
        className="wk_ml-auto wk_px-[64px] focus:wk_px-[64px]"
      />
    </dialog>
  );
}
