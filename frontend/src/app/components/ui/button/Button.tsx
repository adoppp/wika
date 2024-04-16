'use client';

import { useTranslation } from '@/app/i18n/client';
import { cn } from '@/app/lib/utils';
import { transition } from '@/app/lib/constants';

import { ButtonProps } from '../button';

export default function Button({
  color,
  lng,
  className,
  label,
  ...rest
}: Readonly<ButtonProps>) {
  const { t } = useTranslation(lng, 'button');

  return (
    <button
      className={cn(
        'wk_block wk_rounded-14 wk_text-center wk_py-[16px] wk_px-[30px] wk_text-[16px] wk_leading-[1] wk_font-400 wk_text-th_button wk_transition-shadow focus:wk_outline-none focus:wk_border-[2px] focus:wk_border-th_button focus:wk_px-[28px] focus:wk_py-[14px] disabled:wk_bg-th_bg_tertiary disabled:wk_text-[#535A62]',
        transition,

        color === 'white' &&
          'wk_bg-th_white hover:wk_shadow-[0px_0px_50px_0px_#FFFFFF80]',

        color === 'pink' &&
          'wk_bg-th_accent hover:wk_shadow-[0px_0px_50px_0px_#FE59C280]',

        className,
      )}
      {...rest}
    >
      {t(label)}
    </button>
  );
}
