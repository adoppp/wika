import { PhotoList } from '@/app/components';

import { useTranslation } from '@/app/i18n';
import { PageProps } from '@/app/lib/types';
import { endpoints } from '@/app/lib/utils';

export default async function Page({ params: { lng } }: Readonly<PageProps>) {
  const { t } = await useTranslation(lng, 'photos');

  return (
    <section
      id={endpoints.photos.replace('#', '')}
      className="desktop:wk_w-[1428px] wk_mx-auto wk_mb-[12px] wk_px-[16px] wk_py-[52px] tablet:wk_px-[76px] tablet:wk_pt-[56px] tablet:wk_pb-[68px] desktop:wk_pt-[100px] desktop:wk_pb-[120px] desktop:wk_px-[68px] wk_rounded-50 wk_bg-th_black"
    >
      <h2 className="wk_mb-[28px] tablet:wk_mb-[32px] wk_text-title_mob tablet:wk_text-title_tab desktop:wk_text-title-desk wk_font-500 wk_text-center wk_text-th_white">
        {t('title')}
      </h2>

      <p className="wk_max-w-[492px] wk_mx-auto wk_mb-[40px] tablet:wk_mb-[52px] desktop:wk_mb-[80px] wk_text-[20px] wk_leading-[calc(32/20)] wk_font-300 wk_text-center wk_text-gray_300">
        {t('text')}
      </p>

      <PhotoList lng={lng} />
    </section>
  );
}
