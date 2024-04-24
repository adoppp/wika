import { ServicesList, Title } from '@/app/components';
import { useTranslation } from '@/app/i18n';
import { PageProps } from '@/app/types';

export default async function Page({ params: { lng } }: Readonly<PageProps>) {
  const { t } = await useTranslation(lng, 'services');

  return (
    <section
      id="services"
      className="wk_mx-auto wk_mb-[12px] wk_px-[16px] wk_py-[52px] tablet:wk_px-[68px] tablet:wk_pt-[56px] tablet:wk_pb-[68px] desktop:wk_pt-[100px] desktop:wk_pb-[120px] wk_rounded-50 wk_bg-th_black"
    >
      <Title>
        {t('title')}
        <span className='wk_text-th_accent wk_hidden desktop:wk_inline wk_font-[68px]'>.</span>
      </Title>

      <p className="wk_max-w-[492px] wk_mx-auto wk_mb-[40px] tablet:wk_mb-[52px] desktop:wk_mb-[80px] wk_text-[20px] wk_leading-[calc(32/20)] wk_font-300 wk_text-center wk_text-gray_300">
        {t('text')}
      </p>

      <ServicesList lng={lng} />
    </section>
  );
}
