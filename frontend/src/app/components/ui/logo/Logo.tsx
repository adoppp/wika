import Link from 'next/link';

import { LogoProps } from '../logo';
import { cn } from '@/app/utils';

export default function Logo({ lng, className }: Readonly<LogoProps>) {
  return (
    <Link
      href={`/${lng}`}
      className={cn(
        'wk_text-[30px] wk_leading-[1.4] wk_text-th_accent wk_font-500 focus:wk_outline-none',
        className,
      )}
    >
      Wika.
    </Link>
  );
}
