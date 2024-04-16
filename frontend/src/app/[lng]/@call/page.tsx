import { Button } from '@/app/components';
import { useTranslation } from '@/app/i18n';
import { PageProps } from '@/app/types';


export default async function Page({ params: { lng } }: Readonly<PageProps>) {
  const { t } = await useTranslation(lng, 'call');

  // throw new Error('501')

  return (
    <section className="wk_mx-auto wk_px-[16px] wk_py-[52px] tablet:wk_px-[68px] tablet:wk_pt-[56px] tablet:wk_pb-[68px] desktop:wk_pt-[120px] desktop:wk_pb-[108px] wk_rounded-50 wk_bg-th_black">
      <h2 className="wk_mb-[28px] tablet:wk_mb-[32px] wk_text-title_mob tablet:wk_text-title_tab desktop:wk_text-title-desk wk_font-500 wk_text-center wk_text-th_white">
        {t('title')}
      </h2>

      <p
        className={`wk_mb-[60px] wk_text-[20px] wk_leading-[${
          32 / 20
        }] wk_font-300 wk_text-center wk_text-gray_300`}
      >
        {t('text')}
      </p>

      <Button color="pink" lng={lng} className="wk_mx-auto" label='label' />
    </section>
  );
};
