'use client';

import { useTranslation } from '@/app/i18n/client';
import { cn } from '@/app/utils';

import { ButtonProps } from '../button';

export default function Button({
  type = 'submit',
  color,
  lng,
  className,
  onClick,
}: Readonly<ButtonProps>) {
  const { t } = useTranslation(lng, 'button');

  return (
    <button
      type={type}
      className={cn(
        'wk_block wk_rounded-14 wk_text-center wk_py-[16px] wk_px-[30px] wk_text-[16px] wk_leading-[1] wk_font-400 wk_text-th_button wk_transition-shadow wk_transition-border wk_transition-p wk_ease-wk_quart wk_duration-400 focus:wk_outline-none focus:wk_border-[2px] focus:wk_border-th_button focus:wk_px-[28px] focus:wk_py-[14px] disabled:wk_bg-th_bg_tertiary disabled:wk_text-[#535A62]',

        color === 'white' &&
          'wk_bg-th_white hover:wk_shadow-[0px_0px_50px_0px_#FFFFFF80]',

        color === 'pink' &&
          'wk_bg-th_accent hover:wk_shadow-[0px_0px_50px_0px_#FE59C280]',

        className,
      )}
      onClick={onClick}
    >
      {t('label')}
    </button>
  );
}
