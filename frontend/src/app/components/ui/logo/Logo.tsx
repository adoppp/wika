import Link from 'next/link';

import { LogoProps } from '../Logo';

export default function Logo({ lng }: Readonly<LogoProps>) {
  return (
    <Link
      href={`/${lng}`}
      className="wk_text-[30px] wk_leading-[1.4] wk_text-th_accent wk_font-500"
    >
      Wika.
    </Link>
  );
}
