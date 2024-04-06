import { differenceInYears } from 'date-fns';

import { StatisticsProps } from '../statistics';

export default function Statistics({ t }: Readonly<StatisticsProps>) {
  const startExperienceDate = new Date(2022, 2, 1);
  const startSportDate = new Date(2015, 8, 1);

  const experienceYears = differenceInYears(new Date(), startExperienceDate);
  const sportYears = differenceInYears(new Date(), startSportDate);

  return (
    <ul className="wk_flex wk_flex-col wk_gap-[12px] desktop:wk_flex-row desktop:wk_gap-[52px]">
      <li className="wk_flex wk_flex-col wk_items-center wk_gap-[12px] desktop:wk_w-[calc((100%-104px)/3)] wk_py-[36px] wk_rounded-40 wk_text-[24px] wk_leading-[calc(28/24)] wk_text-gray_300 wk_bg-th_bg_tertiary">
        <span className="wk_text-[68px] wk_leading-[1] wk_text-th_white after:wk_content-['+'] after:wk_text-[42px] after:wk_text-th_accent after:wk_align-top ">
          {experienceYears}
        </span>

        {t('statExperience')}
      </li>

      <li className="wk_flex wk_flex-col wk_items-center wk_gap-[12px] desktop:wk_w-[calc((100%-104px)/3)] wk_py-[36px] wk_rounded-40 wk_text-[24px] wk_leading-[calc(28/24)] wk_text-gray_300 wk_bg-th_bg_tertiary">
        <span className="wk_text-[68px] wk_leading-[1] wk_text-th_white after:wk_content-['+'] after:wk_text-[42px] after:wk_text-th_accent after:wk_align-top ">
          {sportYears}
        </span>

        {t('statSport')}
      </li>

      <li className="wk_flex wk_flex-col wk_items-center wk_gap-[12px] desktop:wk_w-[calc((100%-104px)/3)] wk_py-[36px] wk_rounded-40 wk_text-[24px] wk_leading-[calc(28/24)] wk_text-gray_300 wk_bg-th_bg_tertiary">
        <span className="wk_text-[68px] wk_leading-[1] wk_text-th_white after:wk_content-['+'] after:wk_text-[42px] after:wk_text-th_accent after:wk_align-top ">
          300
        </span>

        {t('statGirls')}
      </li>
    </ul>
  );
}
