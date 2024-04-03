import { cn } from '@/app/utils';

import { ButtonProps } from '../Button';

export default function Button({
  type = 'submit',
  children,
  color,
  className,
  onClick,
}: Readonly<ButtonProps>) {
  return (
    <button
      type={type}
      className={cn(
        'wk_rounded-14 wk_text-center wk_py-[16px] wk_px-[30px] wk_text-[16px] wk_leading-[1] wk_font-400 wk_text-th_button',

        color === 'white' && 'wk_bg-th_white',

        color === 'pink' && 'wk_bg-th_accent',

        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
