'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { AdminTitle } from '@/app/components';
import { Svg } from '@/app/lib/utils';

export default function AdminTitleContent() {
  const pathname = usePathname();

  const isSubtitle =
    pathname.includes('/video/') ||
    pathname.includes('/services/') ||
    pathname.includes('/photos/') ||
    pathname.includes('/reviews/') ||
    pathname.includes('/contacts/');

  return (
    <div className="wk_flex wk_justify-between wk_items-center wk_py-[12px]">
      <AdminTitle />

      {pathname.endsWith('/video') && (
        <Link
          href="video/edit_video"
          className="wk_p-[12px] wk_rounded-[999px] wk_text-th_white wk_text-[12px] wk_bg-th_accent"
        >
          Замінити відео
        </Link>
      )}

      {pathname.endsWith('/services') && (
        <Link
          href="services/new"
          className="wk_p-[12px] wk_rounded-[999px] wk_text-th_white wk_text-[12px] wk_bg-th_accent"
        >
          + Додати послугу
        </Link>
      )}

      {pathname.endsWith('/photos') && (
        <Link
          href="photos/new"
          className="wk_p-[12px] wk_rounded-[999px] wk_text-th_white wk_text-[12px] wk_bg-th_accent"
        >
          + Додати фото до/після
        </Link>
      )}

      {pathname.endsWith('/reviews') && (
        <Link
          href="reviews/new"
          className="wk_p-[12px] wk_rounded-[999px] wk_text-th_white wk_text-[12px] wk_bg-th_accent"
        >
          + Додати відгук
        </Link>
      )}

      {isSubtitle && (
        <Link
          href="./"
          className="wk_flex wk_items-center wk_gap-[8px] wk_p-[12px] wk_rounded-[999px] wk_text-th_white wk_text-[12px] wk_bg-th_accent"
        >
          <Svg id="adminArrow" />
          Назад
        </Link>
      )}
    </div>
  );
}
