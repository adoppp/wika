import { Button, Paragraph, Title } from '@/app/components';

import { useTranslation } from '@/app/i18n';

import { PageProps } from '@/app/lib/types';

export default async function Page({ params: { lng } }: Readonly<PageProps>) {
  const { t } = await useTranslation(lng, 'call');

  return (
    <section className="wk_mx-auto wk_px-[16px] wk_py-[52px] tablet:wk_px-[68px] tablet:wk_pt-[56px] tablet:wk_pb-[68px] desktop:wk_w-[1416px] desktop:wk_pt-[120px] desktop:wk_pb-[108px] wk_rounded-50 wk_bg-th_black">
      <Title>{t('title')}</Title>

      <Paragraph className="wk_mb-[60px]">{t('text')}</Paragraph>

      <Button color="pink" lng={lng} className="wk_mx-auto" label="label" />
    </section>
  );
}
