import { Advantages, Button } from '@/app/components';

import { useTranslation } from '@/app/i18n';

import { PageProps } from '@/app/lib/types';

export default async function Page({ params: { lng } }: Readonly<PageProps>) {
  const { t } = await useTranslation(lng, 'hero');

  return (
    <section className="wk_mx-auto wk_mb-[12px] wk_pt-[384px] tablet:wk_pt-[364px] desktop:wk_w-[1416px] desktop:wk_pt-[308px] wk_pb-[40px] tablet:wk_pb-[86px] desktop:wk_pb-[30px] wk_px-[12px] tablet:wk_px-[52px] desktop:wk_px-[60px] wk_rounded-50 wk_bg-hero_pattern_smallMob mobile:wk_bg-hero_pattern_mob tablet:wk_bg-hero_pattern_tab wk_bg-center wk_bg-cover">
      <h1 className="mobile:wk_w-[314px] tablet:wk_w-[432px] desktop:wk_w-[608px] wk_mb-[52px] desktop:wk_mb-[48px] wk_text-th_white wk_font-500 wk_text-title_mob tablet:wk_text-title_tab desktop:wk_text-[80px] desktop:wk_leading-[calc(96/80)]">
        {t('title')}
      </h1>

      <p className="wk_mb-[12px] wk_text-[22px] wk_leading-[calc(24/22)] tablet:wk_text-[36px] tablet:wk_leading-[calc(40/36)] wk_font-500 wk_text-gray_50">
        {t('textMain')}
      </p>

      <p className="wk_w-[220px] wk_mb-[64px] wk_leading-[calc(20/16)] tablet:wk_w-full tablet:wk_mb-[26px] tablet:wk_text-[20px] tablet:wk_leading-[calc(24/20)] wk_text-gray_300">
        {t('textSecondary')}
      </p>

      <Button
        color="pink"
        label="label"
        lng={lng}
        type="button"
        className="wk_mb-[88px] tablet:wk_mb-[72px] desktop:wk_mb-[112px] tablet:wk_px-[48px] tablet:focus:wk_px-[46px] tablet:wk_py-[24px] tablet:focus:wk_py-[22px] tablet:wk_text-[24px] tablet:wk_rounded-20"
      />

      <Advantages t={t} />
    </section>
  );
}
