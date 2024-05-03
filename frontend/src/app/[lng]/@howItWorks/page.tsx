import { Paragraph, Title } from '@/app/components';
import { useTranslation } from '@/app/i18n';
import { PageProps } from '@/app/types';
import { Svg } from '@/app/utils';

export default async function Page({ params: { lng } }: Readonly<PageProps>) {
    const { t } = await useTranslation(lng, 'howItWorks');

    return (
        <section className='wk_mx-auto wk_px-[8px] wk_py-[52px] tablet:wk_px-[8px] tablet:wk_pt-[56px] tablet:wk_pb-[68px] desktop:wk_pt-[120px] desktop:wk_pb-[108px] wk_rounded-50 wk_bg-th_black wk_mb-[12px]'>
            <Title relative styles=' wk_w-fit wk_mx-auto'>
                {t('title')}
                <span className='wk_text-th_accent wk_hidden desktop:wk_inline wk_text-[68px] wk_absolute wk_right-[6.5px] wk_-top-[10px]'>.</span>
            </Title>

            <Paragraph styles='wk_mb-[93px] tablet:wk_mb-[50px] desktop:wk_mb-[80px]'>
                {t('description')}
            </Paragraph>

            <ul className="wk_text-gray_50 wk_font-400 wk_mx-auto wk_relative tablet:wk_text-center wk_max-w-[351px] mobile:wk_max-w-[367px] tablet:wk_max-w-[700px] middleMobile:wk_max-w-[419px] desktop:wk_max-w-[1140px] tablet:wk_flex tablet:wk_justify-between tablet:wk_h-[258px] desktop:wk_max-h-[225px]">
                <li className="wk_flex wk_flex-row tablet:wk_flex-col tablet:wk_w-fit wk_relative wk_justify-end wk_mb-[51px] wk_z-10 tablet:wk_mb-0 tablet:wk_justify-normal tablet:wk_mr-[20px]">
                    <Svg id="dot" className="wk_size-[120px] wk_absolute wk_-top-[40px] wk_right-[92px] wk_z-10 tablet:wk_top-[16px] tablet:wk_left-[10px] desktop:wk_top-[13px]" />
                    <span className="wk_mr-[15px] wk_text-[24px] tablet:wk_mb-[68px] tablet:wk_mr-0">
                        1
                    </span>
                    <p className="wk_max-w-[92px] wk_text-[12px] wk_mt-[12px] tablet:wk_max-w-[142px]">
                        {t('step_1')}
                    </p>
                </li>
                <li className="wk_flex wk_flex-row-reverse tablet:wk_flex-col tablet:wk_w-fit wk_relative wk_justify-end wk_mb-[103px] tablet:wk_mb-0 tablet:wk_ml-[16px] tablet:wk_mr-[68px]">
                    <Svg id="dot" className="wk_size-[120px] wk_absolute wk_-top-[45px] wk_left-[100px] wk_z-10 tablet:wk_top-[115.5px] tablet:wk_-left-[14.5px] desktop:wk_top-[85px]" />
                    <span className="wk_ml-[15px] wk_text-[24px] tablet:wk_mb-[68px] tablet:wk_ml-0">
                        2
                    </span>
                    <p className="wk_w-[92px] wk_text-[12px] wk_mt-[4px]">
                        {t('step_2_1')}<br />
                        {t('step_2_2')}
                    </p>
                </li>
                <li className="wk_flex wk_flex-row tablet:wk_flex-col tablet:wk_w-fit wk_relative wk_justify-end wk_mb-[97px] tablet:wk_mb-0 tablet:wk_justify-normal tablet:wk_mr-[26px] desktop:wk_ml-[16px]">
                    <Svg id="dot" className="wk_size-[120px] wk_absolute wk_-top-[43px] wk_right-[96px] wk_z-10 tablet:wk_top-[8px] tablet:wk_-right-[13.5px]" />
                    <span className="wk_mr-[15px] wk_text-[24px] tablet:wk_mb-[68px] tablet:wk_mr-[8px] desktop:wk_mr-0">
                        3
                    </span>
                    <p className="wk_max-w-[92px] wk_text-[12px] wk_mt-[4px] tablet:wk_mr-[8px] desktop:wk_mr-0">
                        {t('step_3')}
                    </p>
                </li>
                <li className="wk_flex wk_flex-row-reverse tablet:wk_flex-col tablet:wk_w-fit wk_relative wk_justify-end wk_mb-[55px] tablet:wk_mb-0 desktop:wk_ml-[28px]">
                    <Svg id="dot" className="wk_size-[120px] wk_absolute wk_-top-[40px] wk_left-[98px] wk_z-10 tablet:wk_top-[120px] tablet:wk_left-[10px] desktop:wk_top-[85px]" />
                    <span className="wk_ml-[15px] wk_text-[24px] tablet:wk_mb-[68px] tablet:wk_ml-0">
                        4
                    </span>
                    <p className="wk_w-[92px] wk_text-[12px] wk_mt-[8px] tablet:wk_w-[142px]">
                        {t('step_4')}
                    </p>
                </li>
                <li className="wk_flex wk_flex-row tablet:wk_flex-col tablet:wk_w-fit wk_relative wk_justify-end tablet:wk_mb-0 tablet:wk_justify-normal">
                    <Svg id="dot" className="wk_size-[120px] wk_absolute wk_-top-[44px] wk_right-[94px] wk_z-10 tablet:wk_top-[9px] tablet:wk_left-[10px]" />
                    <span className="wk_mr-[15px] wk_text-[24px] tablet:wk_mb-[68px] tablet:wk_mr-0">
                        5
                    </span>
                    <p className="wk_max-w-[92px] wk_text-[12px] wk_mt-[8px] tablet:wk_max-w-[142px]">
                        {t('step_5')}
                    </p>
                </li>
                <li className="wk_w-full wk_max-w-[130px] tablet:wk_max-w-[578px] desktop:wk_max-w-[1002px] wk_h-full wk_bg-stepLine_pattern_mob tablet:wk_bg-stepLine_pattern_tablet desktop:wk_bg-stepLine_pattern_dekstop wk_bg-no-repeat wk_bg-[length:50px_565px] mobile:wk_bg-[length:75px_565px] middleMobile:wk_bg-[length:130px_565px] tablet:wk_bg-[length:578px_133px] desktop:wk_bg-[length:1002px_96px] wk_absolute wk_top-[4px] wk_left-[4px] mobile:wk_left-auto wk_translate-x-[115%] tablet:wk_translate-x-[11.9%] desktop:wk_translate-x-[7%] tablet:wk_top-[61px]"></li>
            </ul>
        </section>
    );
};
