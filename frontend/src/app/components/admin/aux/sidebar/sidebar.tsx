'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';
import clsx from 'clsx';

import { Logo } from '@/app/components';
import { Svg } from '@/app/lib/utils';
import { transition } from '@/app/lib/constants';

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="wk_relative wk_w-[216px] wk_h-[calc(100vh-24px)] wk_p-[16px] wk_rounded-[10px] wk_bg-gray_50">
      <Logo className="wk_block wk_mb-[32px]" />

      <nav className="">
        <ul className="wk_text-[14px] wk_mb-[32px] wk_pb-[32px] wk_border-solid wk_border-b wk_border-gray_300">
          <li
            className={clsx(
              'wk_flex wk_items-center wk_gap-[12px] wk_p-[12px] hover:wk_text-th_accent focus:outline-none focus:wk_text-th_accent',
              pathname.includes('/video') && 'wk_text-th_accent',
            )}
          >
            <Svg id="youtube" />

            <Link
              href="/admin/video"
              className={clsx('wk_transition-colors', transition)}
            >
              Відео
            </Link>
          </li>

          <li
            className={clsx(
              'wk_flex wk_items-center wk_gap-[12px] wk_p-[12px] hover:wk_text-th_accent focus:outline-none focus:wk_text-th_accent',
              pathname.includes('/services') && 'wk_text-th_accent',
            )}
          >
            <Svg id="heart" />

            <Link
              href="/admin/services"
              className={clsx('wk_transition-colors', transition)}
            >
              Послуги
            </Link>
          </li>

          <li
            className={clsx(
              'wk_flex wk_items-center wk_gap-[12px] wk_p-[12px] hover:wk_text-th_accent focus:outline-none focus:wk_text-th_accent',
              pathname.includes('/photos') && 'wk_text-th_accent',
            )}
          >
            <Svg id="columns" />

            <Link
              href="/admin/photos"
              className={clsx('wk_transition-colors', transition)}
            >
              До і після
            </Link>
          </li>

          <li
            className={clsx(
              'wk_flex wk_items-center wk_gap-[12px] wk_p-[12px] hover:wk_text-th_accent focus:outline-none focus:wk_text-th_accent',
              pathname.includes('/reviews') && 'wk_text-th_accent',
            )}
          >
            <Svg id="review" />

            <Link
              href="/admin/reviews"
              className={clsx('wk_transition-colors', transition)}
            >
              Відгуки
            </Link>
          </li>

          <li
            className={clsx(
              'wk_flex wk_items-center wk_gap-[12px] wk_p-[12px] hover:wk_text-th_accent focus:outline-none focus:wk_text-th_accent',
              pathname.includes('/contacts') && 'wk_text-th_accent',
            )}
          >
            <Svg id="contacts" />

            <Link
              href="/admin/contacts"
              className={clsx('wk_transition-colors', transition)}
            >
              Контакти
            </Link>
          </li>
        </ul>
      </nav>

      <button
        className="wk_flex wk_items-center wk_gap-[12px] wk_p-[12px] hover:wk_text-th_accent focus:outline-none focus:wk_text-th_accent"
        onClick={() => signOut()}
      >
        <Svg id="logout" />

        <span className={clsx('wk_transition-colors', transition)}>Вийти</span>
      </button>

      <a
        href="https://www.instagram.com/d1g1talsolut1ons"
        className={clsx(
          'wk_absolute wk_bottom-[12px] wk_left-0 wk_w-[100%] wk_text-[10px] wk_text-gray_700 wk_text-center hover:wk_text-th_accent focus:outline-none focus:wk_text-th_accent wk_transition-colors',
          transition,
        )}
      >
        &#169; Digital Solutions 2024.
      </a>
    </aside>
  );
}
