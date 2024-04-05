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
            'wk_text-[42px] wk_leading-[calc(50/42)] wk_text-th_white',

          location === 'footer' &&
            'wk_items-center wk_text-[22px] wk_leading-[calc(22/18)] tablet:wk_flex-row tablet:wk_gap-[38px]',

          location === 'header' &&
            'desktop:wk_flex desktop:wk_flex-row desktop:wk_gap-[38px]',

          location !== 'mob_menu' &&
            'desktop:wk_text-[20px] desktop:wk_leading-[calc(24/20)] wk_text-gray_200',
        )}
      >
        <li>
          <Link
            href={`${endpoints.about}`}
            className="wk_transition-colors wk_ease-wk_quart wk_duration-400 hover:wk_text-gray_500 focus:wk_outline-none focus:wk_text-gray_500"
          >
            {t('nav_1')}
          </Link>
        </li>

        <li>
          <Link
            href={`${endpoints.services}`}
            className="wk_transition-colors wk_ease-wk_quart wk_duration-400 hover:wk_text-gray_500 focus:wk_outline-none focus:wk_text-gray_500"
          >
            {t('nav_2')}
          </Link>
        </li>

        <li>
          <Link
            href={`${endpoints.photos}`}
            className="wk_transition-colors wk_ease-wk_quart wk_duration-400 hover:wk_text-gray_500 focus:wk_outline-none focus:wk_text-gray_500"
          >
            {t('nav_3')}
          </Link>
        </li>

        <li>
          <Link
            href={`${endpoints.reviews} `}
            className="wk_transition-colors wk_ease-wk_quart wk_duration-400 hover:wk_text-gray_500 focus:wk_outline-none focus:wk_text-gray_500"
          >
            {t('nav_4')}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
