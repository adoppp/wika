import { Contacts, getContacts } from '@/app/lib/api';
import { transition } from '@/app/lib/constants';
import { cn, Svg } from '@/app/lib/utils';
import getQueryClient from '@/app/lib/utils/getQueryClient';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import Link from 'next/link';

export default async function Page() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['contacts'],
    // queryFn: getContacts,
    queryFn: () => getContacts({ cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  const contacts = queryClient.getQueryData(['contacts']) as Contacts;

  const { instagram, telegram, tiktok } = contacts.attributes;

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <table className="wk_w-[100%] wk_font-500 wk_border-separate wk_border-spacing-y-[8px]">
        <thead className="wk_bg-gray_100">
          <tr>
            <th className="wk_py-[20px] wk_rounded-l-[16px]">No</th>
            <th className="wk_py-[20px] wk_text-left">Контакт</th>
            <th className="wk_py-[20px] wk_text-left">Інформація</th>
            <th className="wk_py-[20px] wk_rounded-r-[16px]">Дія</th>
          </tr>
        </thead>

        <tbody className="wk_text-[12px]">
          <tr className="wk_bg-gray_50">
            <td className="wk_w-[72px] wk_py-[20px] wk_rounded-l-[16px] wk_text-center">
              1
            </td>
            <td className="wk_w-[260px]">Instagram</td>
            <td>
              <a
                href={`https://www.instagram.com/${instagram}`}
                target="_blank"
                className="wk_text-th_accent hover:wk_underline focus:wk_underline focus:wk_outline-none"
              >
                {instagram}
              </a>
            </td>
            <td className="wk_w-[80px] wk_rounded-r-[16px] wk_align-middle">
              <div className="wk_flex wk_justify-evenly wk_items-center">
                <Link
                  href="contacts/edit_instagram"
                  className={cn(
                    'wk_text-th_accent wk_rounded-[4px] hover:wk_text-th_black hover:wk_bg-th_accent focus:wk_text-th_black focus:wk_bg-th_accent focus:wk_outline-none wk_transition-colors',
                    transition,
                  )}
                >
                  <Svg id="edit" />
                </Link>
              </div>
            </td>
          </tr>

          <tr className="wk_bg-gray_50">
            <td className="wk_w-[72px] wk_py-[20px] wk_rounded-l-[16px] wk_text-center">
              2
            </td>
            <td className="wk_w-[260px]">Telegram</td>
            <td>
              <a
                href={`https://t.me/${telegram}`}
                target="_blank"
                className="wk_text-th_accent hover:wk_underline focus:wk_underline focus:wk_outline-none"
              >
                {telegram}
              </a>
            </td>
            <td className="wk_w-[80px] wk_rounded-r-[16px] wk_align-middle">
              <div className="wk_flex wk_justify-evenly wk_items-center">
                <Link
                  href="contacts/edit_telegram"
                  className={cn(
                    'wk_text-th_accent wk_rounded-[4px] hover:wk_text-th_black hover:wk_bg-th_accent focus:wk_text-th_black focus:wk_bg-th_accent focus:wk_outline-none wk_transition-colors',
                    transition,
                  )}
                >
                  <Svg id="edit" />
                </Link>
              </div>
            </td>
          </tr>

          <tr className="wk_bg-gray_50">
            <td className="wk_w-[72px] wk_py-[20px] wk_rounded-l-[16px] wk_text-center">
              3
            </td>
            <td className="wk_w-[260px]">Tik Tok</td>
            <td>
              <a
                href={`https://www.tiktok.com/@${tiktok}`}
                target="_blank"
                className="wk_text-th_accent hover:wk_underline focus:wk_underline focus:wk_outline-none"
              >
                {tiktok}
              </a>
            </td>
            <td className="wk_w-[80px] wk_rounded-r-[16px] wk_align-middle">
              <div className="wk_flex wk_justify-evenly wk_items-center">
                <Link
                  href="contacts/edit_tiktok"
                  className={cn(
                    'wk_text-th_accent wk_rounded-[4px] hover:wk_text-th_black hover:wk_bg-th_accent focus:wk_text-th_black focus:wk_bg-th_accent focus:wk_outline-none wk_transition-colors',
                    transition,
                  )}
                >
                  <Svg id="edit" />
                </Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </HydrationBoundary>
  );
}
