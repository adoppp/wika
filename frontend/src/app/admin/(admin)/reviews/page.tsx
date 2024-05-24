import { transition } from '@/app/lib/constants';
import { cn, Svg } from '@/app/lib/utils';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="wk_h-[calc(100vh-102px)] wk_overflow-x-scroll">
      <table className="wk_w-[100%] wk_font-500 wk_border-separate wk_border-spacing-y-[8px]">
        <thead className="wk_sticky wk_top-[8px] wk_bg-gray_100">
          <tr>
            <th className="wk_py-[20px] wk_rounded-l-[16px]">No</th>
            <th className="wk_py-[20px] wk_text-left">Ім’я клієнта</th>
            <th className="wk_py-[20px] wk_text-left">Дата</th>
            <th className="wk_py-[20px] wk_text-left">Відгук</th>
            <th className="wk_py-[20px]">Аватар</th>
            <th className="wk_py-[20px] wk_rounded-r-[16px]">Дія</th>
          </tr>
        </thead>

        <tbody className="wk_text-[12px]">
          <tr className="wk_bg-gray_50">
            <td className="wk_w-[72px] wk_py-[20px] wk_rounded-l-[16px] wk_text-center">
              1
            </td>
            <td className="wk_w-[260px]">Олена</td>
            <td className="wk_w-[152px]">Травень, 2, 2023</td>
            <td className="wk_max-w-[524px] wk_truncate">
              Я вважаю, що це ідеальний тренер, підтримає, направить, десь
              суворіше буде, цього реально не вистачає
            </td>
            <td className="wk_w-[76px] wk_align-middle"></td>
            <td className="wk_w-[92px] wk_rounded-r-[16px] wk_align-middle">
              <div className="wk_flex wk_justify-evenly wk_items-center">
                <Link
                  href="reviews/id/edit"
                  className={cn(
                    'wk_text-th_accent hover:wk_scale-125 focus:wk_scale-125 focus:wk_outline-none wk_transition-transform',
                    transition,
                  )}
                >
                  <Svg id="edit" />
                </Link>

                <button
                  className={cn(
                    'wk_text-red_danger hover:wk_scale-125 focus:wk_scale-125 focus:wk_outline-none wk_transition-transform',
                    transition,
                  )}
                >
                  <Svg id="trash" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
