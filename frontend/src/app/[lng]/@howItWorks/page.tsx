import { Paragraph, Title } from '@/app/components';

import { useTranslation } from '@/app/i18n';
import { PageProps } from '@/app/types';
import { Svg } from '@/app/utils';

export default async function Page({ params: { lng } }: Readonly<PageProps>) {
  const { t } = await useTranslation(lng, 'howItWorks');

  return (
    <section className="wk_mx-auto wk_px-[8px] wk_py-[52px] tablet:wk_px-[16px] tablet:wk_pt-[56px] tablet:wk_pb-[68px] desktop:wk_w-[1416px] desktop:wk_pt-[120px] desktop:wk_pb-[108px] wk_rounded-50 wk_bg-th_black wk_mb-[12px]">
      <Title className="wk_relative wk_w-fit wk_mx-auto">
        {t('title')}

        <span className="wk_text-th_accent wk_hidden desktop:wk_inline wk_text-[68px] wk_absolute wk_right-[6.5px] wk_-top-[10px]">
          .
        </span>
      </Title>

      <Paragraph className="wk_max-w-[490px] wk_mx-auto wk_mb-[93px] tablet:wk_mb-[50px] desktop:wk_mb-[80px]">
        {t('description')}
      </Paragraph>

      <ol className="wk_relative tablet:wk_flex tablet:wk_justify-between wk_w-[25vw] tablet:wk_w-[80%] wk_h-[530px] tablet:wk_h-[34vw] desktop:wk_h-[256px] wk_mx-auto wk_text-[12px] wk_leading-[calc(14/12)] wk_text-gray_50 wk_font-400 [counter-reset:counter] wk_bg-stepLine_pattern_mob tablet:wk_bg-stepLine_pattern_tablet desktop:wk_bg-stepLine_pattern_desktop wk_bg-no-repeat wk_bg-[length:115%_90%] tablet:wk_bg-[length:100%_50%] wk_bg-[center_top_7px] tablet:wk_bg-[center_top_61px]">
        <li className="wk_absolute wk_left-[calc(100%+30px)] tablet:wk_top-[3%] tablet:wk_left-[-60px] wk_w-[25vw] wk_max-w-[108px] tablet:wk_w-[142px] tablet:wk_max-w-[100%] wk_pl-[16px] tablet:wk_px-[0] [counter-increment:counter] tablet:wk_text-center before:wk_content-[counter(counter)'.'] before:wk_absolute before:wk_left-[-16px] tablet:before:wk_static tablet:before:wk_block before:wk_text-[24px] before:wk_text-gray_100">
          <Svg
            id="dot"
            className="wk_size-[120px] wk_absolute wk_top-[-50px] wk_left-[-98px] wk_z-10 tablet:wk_static tablet:wk_mx-auto tablet:wk_my-[-18px]"
          />

          {t('step_1')}
        </li>

        <li className="wk_absolute wk_top-[22%] wk_right-[calc(100%+15px)] tablet:wk_bottom-0 tablet:wk_right-[75%] tablet:wk_translate-x-[38%] tablet:wk_self-end wk_w-[25vw] wk_max-w-[104px] tablet:wk_w-[102px] tablet:wk_max-w-[100%] tablet:wk_h-[20vw] desktop:wk_h-[156px] wk_pr-[16px] tablet:wk_px-[0] [counter-increment:counter] tablet:wk_text-center before:wk_content-[counter(counter)'.'] before:wk_absolute before:wk_right-0 tablet:before:wk_static tablet:before:wk_block before:wk_text-[24px] before:wk_text-gray_100">
          <Svg
            id="dot"
            className="wk_size-[120px] wk_absolute wk_top-[-52px] wk_right-[-76px] wk_z-10 tablet:wk_static tablet:wk_mx-[-9px] tablet:wk_my-[-18px]"
          />

          {t('step_2')}
        </li>

        <li className="wk_absolute wk_top-[45%] wk_left-[calc(100%+30px)] tablet:wk_top-[0.5%] tablet:wk_left-[50%] tablet:wk_translate-x-[-50%] wk_w-[25vw] wk_max-w-[108px] tablet:wk_w-[134px] tablet:wk_max-w-[100%] wk_pl-[16px] tablet:wk_px-[0] [counter-increment:counter] tablet:wk_text-center before:wk_content-[counter(counter)'.'] before:wk_absolute before:wk_left-[-16px] tablet:before:wk_static tablet:before:wk_block before:wk_text-[24px] before:wk_text-gray_100">
          <Svg
            id="dot"
            className="wk_size-[120px] wk_absolute wk_top-[-50px] wk_left-[-98px] wk_z-10 tablet:wk_static tablet:wk_mx-auto tablet:wk_my-[-18px]"
          />

          {t('step_3')}
        </li>

        <li className="wk_absolute wk_top-[68%] wk_right-[calc(100%+15px)] tablet:wk_bottom-0 tablet:wk_right-[25%] tablet:wk_translate-x-[50%] tablet:wk_self-end wk_w-[25vw] wk_max-w-[108px] tablet:wk_w-[148px] tablet:wk_max-w-[100%] tablet:wk_h-[19.5vw] desktop:wk_h-[152px] wk_pr-[16px] tablet:wk_px-[0] [counter-increment:counter] tablet:wk_text-center before:wk_content-[counter(counter)'.'] before:wk_absolute before:wk_right-0 tablet:before:wk_static tablet:before:wk_block before:wk_text-[24px] before:wk_text-gray_100">
          <Svg
            id="dot"
            className="wk_size-[120px] wk_absolute wk_top-[-52px] wk_right-[-76px] wk_z-10 tablet:wk_static tablet:wk_mx-auto tablet:wk_my-[-18px]"
          />

          {t('step_4')}
        </li>

        <li className="wk_absolute wk_bottom-0 wk_left-[calc(100%+30px)] tablet:wk_top-[1%] tablet:wk_left-[100%] tablet:wk_translate-x-[-80px] wk_w-[25vw] wk_max-w-[108px] tablet:wk_w-[142px] tablet:wk_max-w-[100%] wk_pl-[16px] tablet:wk_px-[0] [counter-increment:counter] tablet:wk_text-center before:wk_content-[counter(counter)'.'] before:wk_absolute before:wk_left-[-16px] tablet:before:wk_static tablet:before:wk_block before:wk_text-[24px] before:wk_text-gray_100">
          <Svg
            id="dot"
            className="wk_size-[120px] wk_absolute wk_top-[-50px] wk_left-[-98px] wk_z-10 tablet:wk_static tablet:wk_mx-auto tablet:wk_my-[-18px]"
          />

          {t('step_5')}
        </li>
      </ol>
    </section>
  );
}
