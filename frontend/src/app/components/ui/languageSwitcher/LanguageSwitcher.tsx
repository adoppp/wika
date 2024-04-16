import { ReactNode } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import { languages } from '@/app/i18n/settings';
import { LanguageSwitcherProps } from '../languageSwitcher';
import { cn } from '@/app/lib/utils';
import { transition } from '@/app/lib/constants';

export default function LanguageSwitcher({
  lng,
  location,
}: Readonly<LanguageSwitcherProps>) {
  return (
    <ul
      className={cn(
        location === 'header' &&
          'wk_hidden desktop:wk_flex desktop:wk_gap-[8px] wk_text-[20px] wk_leading-[calc(24/20)]',

        location === 'mob_menu' &&
          'wk_flex wk_gap-[12px] wk_text-[42px] wk_leading-[calc(52/42)]',
      )}
    >
      {languages.map((language: string): ReactNode => {
        return (
          <li key={language}>
            <Link
              href={`/${language}`}
              className={clsx(
                lng === language
                  ? `wk_text-${
                      location === 'header' ? 'th_white' : 'th_accent'
                    }`
                  : 'wk_text-gray_300',
                'wk_transition-colors hover:wk_text-gray_500 focus:wk_outline-none focus:wk_text-gray_500',
                transition,
              )}
            >
              {(language.includes('uk') && 'Укр') ||
                (language.includes('ru') && 'Рус')}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
