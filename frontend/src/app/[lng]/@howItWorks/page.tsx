import { Paragraph, Title } from '@/app/components';
import { useTranslation } from '@/app/i18n';
import { PageProps } from '@/app/types';

export default async function Page({ params: { lng } }: Readonly<PageProps>) {
    const { t } = await useTranslation(lng, 'howItWorks');

    return (
        <section className='wk_mx-auto wk_px-[16px] wk_py-[52px] tablet:wk_px-[68px] tablet:wk_pt-[56px] tablet:wk_pb-[68px] desktop:wk_pt-[120px] desktop:wk_pb-[108px] wk_rounded-50 wk_bg-th_black wk_mb-[12px]'>
            <Title relative styles=' wk_w-fit wk_mx-auto'>
                {t('title')}
                <span className='wk_text-th_accent wk_hidden desktop:wk_inline wk_text-[68px] wk_absolute wk_right-[6.5px] wk_-top-[10px]'>.</span>
            </Title>

            <Paragraph>
                {t('description')}
            </Paragraph>
        </section>
    );
};
