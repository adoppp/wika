import Link from 'next/link';

import { Svg, cn, endpoints } from '@/app/utils';

import { NavBarProps } from '../navBar';
import { transition } from '@/app/constants';

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
        <li className='wk_group wk_cursor-pointer wk_w-fit'>
          <Link
            href={`${endpoints.about}`}
            className={cn("wk_transition-colors group-hover:wk_text-gray_500 group-focus:wk_outline-none group-focus:wk_text-gray_500", transition, location === 'mob_menu' && 'group-active:wk_text-th_accent group-focus:wk_text-th_accent')}
          >
            {t('nav_1')}
          </Link>
          <Svg
            id="arrowCorner"
            className={cn(location === 'mob_menu' && 'wk_size-[40px] wk_inline wk_ml-[4px] group-hover:wk_rotate-[45deg] group-hover:wk_text-gray_500 group-active:wk_text-th_accent group-focus:wk_text-th_accent',
              location !== 'mob_menu' && 'wk_hidden'
            )}
          />
        </li>

        <li className='wk_group wk_cursor-pointer wk_w-fit'>
          <Link
            href={`${endpoints.services}`}
            className={cn("wk_transition-colors group-hover:wk_text-gray_500 group-focus:wk_outline-none group-focus:wk_text-gray_500", transition, location === 'mob_menu' && 'group-active:wk_text-th_accent group-focus:wk_text-th_accent')}
          >
            {t('nav_2')}
          </Link>
          <Svg
            id="arrowCorner"
            className={cn(location === 'mob_menu' && 'wk_size-[40px] wk_inline wk_ml-[4px] group-hover:wk_rotate-[45deg] group-hover:wk_text-gray_500 group-active:wk_text-th_accent group-focus:wk_text-th_accent',
              location !== 'mob_menu' && 'wk_hidden'
            )}
          />
        </li>

        <li className='wk_group wk_cursor-pointer wk_w-fit'>
          <Link
            href={`${endpoints.photos}`}
            className={cn("wk_transition-colors group-hover:wk_text-gray_500 group-focus:wk_outline-none group-focus:wk_text-gray_500", transition, location === 'mob_menu' && 'group-active:wk_text-th_accent group-focus:wk_text-th_accent')}
          >
            {t('nav_3')}
          </Link>
          <Svg
            id="arrowCorner"
            className={cn(location === 'mob_menu' && 'wk_size-[40px] wk_inline wk_ml-[4px] group-hover:wk_rotate-[45deg] group-hover:wk_text-gray_500 group-active:wk_text-th_accent group-focus:wk_text-th_accent',
              location !== 'mob_menu' && 'wk_hidden'
            )}
          />
        </li>

        <li className='wk_group wk_cursor-pointer wk_w-fit'>
          <Link
            href={`${endpoints.reviews} `}
            className={cn("wk_transition-colors group-hover:wk_text-gray_500 group-focus:wk_outline-none group-focus:wk_text-gray_500", transition, location === 'mob_menu' && 'group-active:wk_text-th_accent group-focus:wk_text-th_accent')}
          >
            {t('nav_4')}
          </Link>
          <Svg
            id="arrowCorner"
            className={cn(location === 'mob_menu' && 'wk_size-[40px] wk_inline wk_ml-[4px] group-hover:wk_rotate-[45deg] group-hover:wk_text-gray_500 group-active:wk_text-th_accent group-focus:wk_text-th_accent',
              location !== 'mob_menu' && 'wk_hidden'
            )}
          />
        </li>
      </ul>
    </nav>
  );
}
