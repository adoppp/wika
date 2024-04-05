import { Svg } from '@/app/utils';
import { AdvantagesProps } from '../advantages';

export default function Advantages({ t }: Readonly<AdvantagesProps>) {
  return (
    <ul className="wk_flex wk_flex-col wk_items-center wk_justify-center wk_gap-[12px] mobile:wk_flex-row wk_flex-wrap desktop:wk_flex-nowrap desktop:wk_w-[1292px] tablet:wk_mx-auto wk_text-gray_300 wk_text-[16px] wk_leading-[calc(20/16)]">
      <li className="wk_flex wk_flex-col wk_gap-[8px] tablet:wk_items-center tablet:wk_gap-[20px] laptop:wk_gap-[48px] desktop:wk_gap-[20px] tablet:wk_flex-row wk_w-[calc(100vw-52px)] mobile:wk_w-[calc((100vw-60px)/2)] tablet:wk_w-[calc((100vw-140px)/2)] desktop:wk_w-[314px] wk_h-[132px] wk_p-[10px] tablet:wk_px-[30px] tablet:wk_py-[25px] wk_rounded-[16px] tablet:wk_rounded-[24px] wk_bg-th_black">
        <div className="wk_p-[8px] tablet:wk_p-[17px]">
          <Svg
            id="globe"
            className="wk_text-th_accent wk_size-[22px] tablet:wk_size-[48px]"
          />
        </div>

        {t('advantage1')}
      </li>

      <li className="wk_flex wk_flex-col wk_gap-[8px] tablet:wk_items-center tablet:wk_gap-[20px] laptop:wk_gap-[48px] desktop:wk_gap-[20px] tablet:wk_flex-row wk_w-[calc(100vw-52px)] mobile:wk_w-[calc((100vw-60px)/2)] tablet:wk_w-[calc((100vw-140px)/2)] desktop:wk_w-[314px] wk_h-[132px] wk_p-[10px] tablet:wk_px-[30px] tablet:wk_py-[25px] wk_rounded-[16px] tablet:wk_rounded-[24px] wk_bg-th_black">
        <div className="wk_p-[8px] tablet:wk_p-[17px]">
          <Svg
            id="handshake"
            className="wk_text-th_accent wk_size-[22px] tablet:wk_size-[48px]"
          />
        </div>

        {t('advantage2')}
      </li>

      <li className="wk_flex wk_flex-col wk_gap-[8px] tablet:wk_items-center tablet:wk_gap-[20px] laptop:wk_gap-[48px] desktop:wk_gap-[20px] tablet:wk_flex-row wk_w-[calc(100vw-52px)] mobile:wk_w-[calc((100vw-60px)/2)] tablet:wk_w-[calc((100vw-140px)/2)] desktop:wk_w-[314px] wk_h-[132px] wk_p-[10px] tablet:wk_px-[30px] tablet:wk_py-[25px] wk_rounded-[16px] tablet:wk_rounded-[24px] wk_bg-th_black">
        <div className="wk_p-[8px] tablet:wk_p-[17px]">
          <Svg
            id="apple"
            className="wk_text-th_accent wk_size-[22px] tablet:wk_size-[48px]"
          />
        </div>

        {t('advantage3')}
      </li>

      <li className="wk_flex wk_flex-col wk_gap-[8px] tablet:wk_items-center tablet:wk_gap-[20px] laptop:wk_gap-[48px] desktop:wk_gap-[20px] tablet:wk_flex-row wk_w-[calc(100vw-52px)] mobile:wk_w-[calc((100vw-60px)/2)] tablet:wk_w-[calc((100vw-140px)/2)] desktop:wk_w-[314px] wk_h-[132px] wk_p-[10px] tablet:wk_px-[30px] tablet:wk_py-[25px] wk_rounded-[16px] tablet:wk_rounded-[24px] wk_bg-th_black">
        <div className="wk_p-[8px] tablet:wk_p-[17px]">
          <Svg
            id="codeMentor"
            className="wk_text-th_accent wk_size-[22px] tablet:wk_size-[48px]"
          />
        </div>

        {t('advantage4')}
      </li>
    </ul>
  );
}
