import { ReviewList } from '@/app/components';

import { useTranslation } from '@/app/i18n';
import { PageProps } from '@/app/lib/types';
import { endpoints } from '@/app/lib/utils';

export default async function Page({ params: { lng } }: Readonly<PageProps>) {
  const { t } = await useTranslation(lng, 'reviews');

  return (
    <section
      id={endpoints.reviews.replace('#', '')}
      className="desktop:wk_w-[1428px] wk_mx-auto wk_mb-[12px] wk_px-[16px] wk_py-[52px] tablet:wk_px-[76px] tablet:wk_pt-[56px] tablet:wk_pb-[68px] desktop:wk_pt-[100px] desktop:wk_pb-[120px] desktop:wk_px-[68px] wk_rounded-50 wk_bg-th_black"
    >
      <h2 className="wk_absolute wk_size-[1px] wk_m-[-1px] wk_p-0 wk_overflow-hidden wk_border-0">
        {t('title')}
      </h2>

      <ReviewList lng={lng} />
    </section>
  );
}
