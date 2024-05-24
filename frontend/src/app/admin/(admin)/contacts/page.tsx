import { transition } from '@/app/lib/constants';
import { cn, Svg } from '@/app/lib/utils';
import Link from 'next/link';

export default function Page() {
  return (
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
            <a href="#" target="_blank"></a>
          </td>
          <td className="wk_w-[80px] wk_rounded-r-[16px] wk_align-middle">
            <div className="wk_flex wk_justify-evenly wk_items-center">
              <Link
                href="reviews/edit_instagram"
                className={cn(
                  'wk_text-th_accent hover:wk_scale-125 focus:wk_scale-125 focus:wk_outline-none wk_transition-transform',
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
            <a href="#" target="_blank"></a>
          </td>
          <td className="wk_w-[80px] wk_rounded-r-[16px] wk_align-middle">
            <div className="wk_flex wk_justify-evenly wk_items-center">
              <Link
                href="reviews/edit_instagram"
                className={cn(
                  'wk_text-th_accent hover:wk_scale-125 focus:wk_scale-125 focus:wk_outline-none wk_transition-transform',
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
            <a href="#" target="_blank"></a>
          </td>
          <td className="wk_w-[80px] wk_rounded-r-[16px] wk_align-middle">
            <div className="wk_flex wk_justify-evenly wk_items-center">
              <Link
                href="reviews/edit_instagram"
                className={cn(
                  'wk_text-th_accent hover:wk_scale-125 focus:wk_scale-125 focus:wk_outline-none wk_transition-transform',
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
  );
}
