import Link from 'next/link';

import { cn, endpoints } from '@/app/utils';

import { NavBarProps } from '../navBar';

export default function NavBar({ t, location }: Readonly<NavBarProps>) {
  return (
    <nav className={cn(location === 'header' && 'wk_hidden desktop:wk_block')}>
      <ul
        className={cn(
          location !== 'header' &&
            `wk_flex wk_flex-col wk_gap-[${
              location === 'footer' ? '40' : '18'
            }px]`,

          location === 'mob_menu' &&
            `wk_text-[42px] wk_leading-[${50 / 42}] wk_text-th_white`,

          location === 'footer' &&
            `wk_text-[22px] wk_leading-[${
              22 / 18
            }] tablet:wk_flex-row tablet:wk_gap-[38px]`,

          location === 'header' &&
            ' desktop:wk_flex desktop:wk_flex-row desktop:wk_gap-[38px]',

          location !== 'mob_menu' &&
            `desktop:wk_text-[20px] desktop:wk_leading-[${
              24 / 20
            }] wk_text-gray_200`,
        )}
      >
        <li className="hover:wk_text-gray_500">
          <Link href={`${endpoints.about}`}>{t('nav_1')}</Link>
        </li>

        <li className="hover:wk_text-gray_500">
          <Link href={`${endpoints.services}`}>{t('nav_2')}</Link>
        </li>

        <li className="hover:wk_text-gray_500">
          <Link href={`${endpoints.photos}`}>{t('nav_3')}</Link>
        </li>

        <li className="hover:wk_text-gray_500">
          <Link href={`${endpoints.reviews}`}>{t('nav_4')}</Link>
        </li>
      </ul>
    </nav>
  );
}
