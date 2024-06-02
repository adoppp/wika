'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { AdminTitle } from '@/app/components';

import { cn, Svg } from '@/app/lib/utils';
import { transition } from '@/app/lib/constants';

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
          className={cn(
            'wk_p-[12px] wk_rounded-[999px] wk_text-th_white wk_text-[12px] wk_bg-th_accent hover:wk_text-[#0D1017] hover:wk_shadow-[0px_0px_50px_0px_rgba(4,217,255,0.50)] focus:wk_shadow-[0px_0px_50px_0px_rgba(4,217,255,0.50)] focus:wk_text-[#0D1017] focus:wk_outline-none wk_transition',
            transition,
          )}
        >
          Замінити відео
        </Link>
      )}

      {pathname.endsWith('/services') && (
        <Link
          href="services/new"
          className={cn(
            'wk_p-[12px] wk_rounded-[999px] wk_text-th_white wk_text-[12px] wk_bg-th_accent hover:wk_text-[#0D1017] hover:wk_shadow-[0px_0px_50px_0px_rgba(4,217,255,0.50)] focus:wk_shadow-[0px_0px_50px_0px_rgba(4,217,255,0.50)] focus:wk_text-[#0D1017] focus:wk_outline-none wk_transition',
            transition,
          )}
        >
          + Додати послугу
        </Link>
      )}

      {pathname.endsWith('/photos') && (
        <Link
          href="photos/new"
          className={cn(
            'wk_p-[12px] wk_rounded-[999px] wk_text-th_white wk_text-[12px] wk_bg-th_accent hover:wk_text-[#0D1017] hover:wk_shadow-[0px_0px_50px_0px_rgba(4,217,255,0.50)] focus:wk_shadow-[0px_0px_50px_0px_rgba(4,217,255,0.50)] focus:wk_text-[#0D1017] focus:wk_outline-none wk_transition',
            transition,
          )}
        >
          + Додати фото до/після
        </Link>
      )}

      {pathname.endsWith('/reviews') && (
        <Link
          href="reviews/new"
          className={cn(
            'wk_p-[12px] wk_rounded-[999px] wk_text-th_white wk_text-[12px] wk_bg-th_accent hover:wk_text-[#0D1017] hover:wk_shadow-[0px_0px_50px_0px_rgba(4,217,255,0.50)] focus:wk_shadow-[0px_0px_50px_0px_rgba(4,217,255,0.50)] focus:wk_text-[#0D1017] focus:wk_outline-none wk_transition',
            transition,
          )}
        >
          + Додати відгук
        </Link>
      )}

      {isSubtitle && (
        <Link
          href="./"
          className={cn(
            'wk_flex wk_items-center wk_gap-[8px] wk_p-[12px] wk_rounded-[999px] wk_text-th_white wk_text-[12px] wk_bg-th_accent hover:wk_text-[#0D1017] hover:wk_shadow-[0px_0px_50px_0px_rgba(4,217,255,0.50)] focus:wk_shadow-[0px_0px_50px_0px_rgba(4,217,255,0.50)] focus:wk_text-[#0D1017] focus:wk_outline-none wk_transition',
            transition,
          )}
        >
          <Svg id="adminArrow" />
          Назад
        </Link>
      )}
    </div>
  );
}
