import { Button } from '@/app/components';
import { titleStyles } from '@/app/constants';
import { useTranslation } from '@/app/i18n';
import { PageProps } from '@/app/types';
import { cn } from '@/app/utils';


export default async function Page({ params: { lng } }: Readonly<PageProps>) {
  const { t } = await useTranslation(lng, 'call');

  return (
    <section className="wk_mx-auto wk_px-[16px] wk_py-[52px] tablet:wk_px-[68px] tablet:wk_pt-[56px] tablet:wk_pb-[68px] desktop:wk_pt-[120px] desktop:wk_pb-[108px] wk_rounded-50 wk_bg-th_black">
      <h2 className={cn(titleStyles)}>
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
