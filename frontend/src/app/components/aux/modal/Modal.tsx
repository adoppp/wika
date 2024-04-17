'use client';

import { ChangeEvent, RefObject, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Notify } from 'notiflix';

import { Button } from '@/app/components/ui';
import { ModalProps } from '../modal';

import { notifyOptions, Svg } from '@/app/lib/utils';
import { useTranslation } from '@/app/i18n/client';
import { submitForm } from '@/app/lib/api';

type Inputs = {
  name: string;
  phoneNumber: string;
  text: string;
  consent: boolean;
};

export default function Modal({
  serviceTitle,
  lng,
  isOpen,
}: Readonly<ModalProps>) {
  const [number, setNumber] = useState('');

  const dialogRef = useRef<HTMLDialogElement>(null);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const { t } = useTranslation(lng, 'modal');

  useEffect(() => {
    const handleOpenModal = () => {
      dialogRef?.current?.showModal();
      document.body.style.overflow = 'hidden';
    };

    if (isOpen) handleOpenModal();
  }, [isOpen]);

  const handleCloseModal = () => {
    reset();
    setNumber('');

    (dialogRef as RefObject<HTMLDialogElement>).current?.close();
    document.body.style.overflow = 'auto';
    router.back();
  };

  const onPhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const rawValue = value.replace(/\D/g, '');

    let formattedValue = '';
    if (rawValue.length > 0) {
      formattedValue = '+(' + rawValue.slice(0, 3);
      if (rawValue.length > 3) {
        formattedValue += ') ' + rawValue.slice(3, 6);
      }
      if (rawValue.length > 6) {
        formattedValue += '-' + rawValue.slice(6, 9);
      }
      if (rawValue.length > 9) {
        formattedValue += '-' + rawValue.slice(9, 12);
      }
    }

    setNumber(formattedValue);
  };

  const onSubmit: SubmitHandler<Inputs> = async values => {
    try {
      await submitForm({ serviceTitle, values });
      handleCloseModal();
    } catch (error) {
      Notify.failure((error as any).message, notifyOptions);
    }
  };

  return (
    <dialog
      ref={dialogRef}
      className="backdrop:wk_bg-backdrop wk_rounded-50 wk_bg-th_accent"
    >
      <button
        type="button"
        onClick={handleCloseModal}
        className="wk_absolute wk_top-[20px] wk_right-[20px] tablet:wk_top-[50px] tablet:wk_right-[50px] hover:wk_outline-none focus:wk_outline-none"
        aria-label={t('closeLabel')}
      >
        <Svg
          id="close"
          className="wk_fill-hotPink_100 hover:wk_fill-th_black active:wk_fill-th_black"
        />
      </button>

      <div className="wk_flex wk_flex-col-reverse desktop:wk_flex-row wk_gap-[86px] wk_max-h-[90vh] wk_pl-[20px] wk_pr-[72px] wk_pt-[68px] wk_pb-[68px] tablet:wk_px-[120px] tablet:wk_pt-[100px] tablet:wk_pb-[156px] desktop:wk_pt-[120px] desktop:wk_pr-[110px] desktop:wk_pb-[76px] desktop:wk_pl-[96px] wk_overflow-x-scroll">
        <div className="wk_max-w-[568px] desktop:wk_flex desktop:wk_flex-col desktop:wk_justify-between">
          <p className="wk_hidden desktop:wk_block desktop:wk_text-[42px] desktop:wk_leading-[calc(50/42)]">
            {t('mainText')}
          </p>

          <div className="wk_flex wk_flex-col wk_gap-[12px] tablet:wk_flex-row tablet:wk_justify-between tablet:wk_items-center desktop:wk_flex-col desktop:wk_items-start tablet:wk_w-[485px]">
            <Svg id="modalStats" />

            <p className="wk_max-w-[304px] wk_text-[18px] wk_leading-[calc(22/18)] wk_font-500">
              {t('secondaryText')}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="tablet:wk_w-[485px]">
          <div className="wk_mb-[40px]">
            <input
              type="text"
              placeholder={t('namePlaceholder')}
              {...register('name', { required: true })}
              className="wk_w-[100%] wk_border-b-[1px] wk_text-[18px] wk_leading-[calc(28/18)] wk_text-form_black wk_bg-th_accent placeholder:wk_text-form_black hover:wk_outline-none focus:wk_outline-none"
            />

            {errors.name?.type === 'required' && (
              <p className="wk_text-th_white wk_pt-[8px]">
                {t('requiredError')}
              </p>
            )}
          </div>

          <div className="wk_mb-[40px]">
            <input
              type="tel"
              {...register('phoneNumber', {
                required: true,
                minLength: 18,
                maxLength: 18,
              })}
              onChange={onPhoneNumberChange}
              value={number}
              placeholder="+(XXX) XXX-XXX-XXX"
              className="wk_w-[100%] wk_border-b-[1px] wk_text-[18px] wk_leading-[calc(28/18)] wk_text-form_black placeholder:wk_text-form_black wk_bg-th_accent hover:wk_outline-none focus:wk_outline-none"
            />

            {errors.phoneNumber?.type === 'required' && (
              <p className="wk_text-th_white wk_pt-[8px]">
                {t('requiredError')}
              </p>
            )}

            {(errors.phoneNumber?.type === 'minLength' ||
              errors.phoneNumber?.type === 'maxLength') && (
              <p className="wk_text-th_white wk_pt-[8px]">
                {t('phoneNumberError')}
              </p>
            )}
          </div>

          <textarea
            cols={30}
            rows={5}
            placeholder={t('textPlaceholder')}
            {...register('text')}
            className="wk_w-[100%] wk_mb-[64px] tablet:wk_mb-[28px] wk_border-b-[1px] wk_text-[18px] wk_leading-[calc(28/18)] wk_text-form_black wk_bg-th_accent placeholder:wk_text-form_black wk_resize-none hover:wk_outline-none focus:wk_outline-none"
          ></textarea>

          <div className="wk_mb-[64px] tablet:wk_mb-[26px]">
            <input
              type="checkbox"
              id="consent-checkbox"
              {...register('consent', { required: true })}
              className="wk_peer wk_hidden"
            />

            <label
              htmlFor="consent-checkbox"
              className="wk_flex wk_leading-[calc(18/16)] wk_text-hotPink_50 before:wk_content-[''] before:wk_flex before:wk_justify-center before:items-center before:wk_size-[18px] before:wk_mr-[18px] before:wk_border-[1px] before:wk_border-hotPink_50 before:wk_rounded-[4px] before:wk_cursor-pointer peer-checked:before:wk_content-['⎷']"
            >
              <span className="wk_w-[180px] tablet:wk_w-auto">
                {t('consentText')}
                <button
                  onClick={() => router.push('?privacyPolicy=true')}
                  className="wk_underline wk_text-left hover:wk_text-th_black focus:wk_text-th_black hover:wk_outline-none focus:wk_outline-none"
                >
                  {t('consentLink')}
                </button>
              </span>
            </label>

            {errors.consent?.type === 'required' && (
              <p className="wk_text-th_white wk_pt-[8px]">
                {t('requiredError')}
              </p>
            )}
          </div>

          <Button
            color="white"
            lng={lng}
            label="label"
            className="wk_w-[100%] tablet:wk_w-[314px]"
          />
        </form>
      </div>
    </dialog>
  );
}
