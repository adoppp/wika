import { titleStyles } from '@/app/constants';
import { useTranslation } from '@/app/i18n';
import { PageProps } from '@/app/types';
import { cn } from '@/app/utils';

export default async function Page({ params: { lng } }: Readonly<PageProps>) {
    const { t } = await useTranslation(lng, 'howItWorks');

    return (
        <section className='wk_mx-auto wk_px-[16px] wk_py-[52px] tablet:wk_px-[68px] tablet:wk_pt-[56px] tablet:wk_pb-[68px] desktop:wk_pt-[120px] desktop:wk_pb-[108px] wk_rounded-50 wk_bg-th_black'>
            <h1 className={cn(titleStyles)}>
                {t('title')}
            </h1>
        </section>
    );
};
