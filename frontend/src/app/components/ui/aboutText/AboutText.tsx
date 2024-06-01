'use client';

import { useState } from 'react';
import clsx from 'clsx';

import { AboutTextProps } from '../aboutText';

import { useTranslation } from '@/app/i18n/client';
import { Svg, cn } from '@/app/lib/utils';
import { transition } from '@/app/lib/constants';

export default function AboutText({
  lng,
  instagram,
}: Readonly<AboutTextProps>) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation(lng, 'about');

  return (
    <div className="wk_max-w-[412px] wk_p-[16px] wk_text-[20px] wk_leading-[calc(24/20)]">
      <p
        className={clsx(
          'wk_mb-[18px] wk_text-gray_400',
          isExpanded ? 'wk_flex wk_flex-col wk_gap-[18px]' : 'wk_line-clamp-3',
        )}
      >
        {t('secondaryText')}

        <span className="wk_text-gray_500">
          {t('secondaryTextSignature')}

          <a
            href={`https://www.instagram.com/${instagram}`}
            target="_blank"
            className="wk_transition-colors wk_ease-wk_quart wk_duration-400 hover:wk_text-th_accent focus:wk_text-th_accent focus:wk_outline-none"
          >
            @viksi_fitness
          </a>
        </span>
      </p>

      <button
        type="button"
        onClick={() => setIsExpanded(value => !value)}
        className="wk_group wk_flex wk_items-center wk_gap-[24px] wk_text-th_accent hover:wk_text-th_white focus:wk_outline-none focus:wk_text-th_white"
      >
        <span className={cn('wk_transition-colors', transition)}>
          {isExpanded ? t('compressBtn') : t('extendBtn')}
        </span>

        <Svg
          id="arrowCorner"
          className={clsx(
            'wk_size-[22px]',
            isExpanded && 'wk_rotate-[-90deg]',
            isExpanded
              ? 'group-hover:wk_rotate-[-135deg] group-focus:wk_rotate-[-135deg]'
              : 'group-hover:wk_rotate-[45deg] group-focus:wk_rotate-[45deg]',
          )}
        />
      </button>
    </div>
  );
}
