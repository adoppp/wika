'use client';

import { NextPageContext } from 'next';

import { ErrorProps } from '@/app/types';
import { useParams, useSearchParams } from 'next/navigation';
import { Header, BurgerMenu, Button } from '@/app/components';
import { Language } from './i18n/settings';
import { useTranslation } from './i18n/client';
import { cn } from '@/app/utils';
import { transition } from '@/app/constants';
import { useRouter } from 'next/navigation';

ErrorPage.getInitialProps = ({ res, err }: Readonly<NextPageContext>) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default function ErrorPage({ error, statusCode }: Readonly<ErrorProps>) {
    const { lng } = useParams();
    const router = useRouter();
    const { t: headerT } = useTranslation(lng as Language, 'header');
    const { t: navT } = useTranslation(lng as Language, 'navBar')
    const { t: errorT } = useTranslation(lng as Language, 'error')
    const searchParams = useSearchParams();
    const showMobMenu: boolean | string | null = searchParams.get('mobMenu');

    return (
        <>
            <Header lng={lng as Language} t={headerT} navT={navT} />
            
            <section className='wk_mt-[140px] tablet:wk_mt-[180px] wk_mx-auto wk_w-fit wk_text-center wk_flex wk_flex-col wk_items-center'>
                <h1 className='wk_font-300 wk_leading-none wk_text-[120px] wk_text-th_accent dekstop:wk_text-[239px] wk_mb-[78px] tablet:wk_mb-[32px] desktop:wk_mb-[40px]'>{statusCode ? statusCode : 'Unexpected error'}</h1>
                <p className='wk_font-400 wk_text-[20px] wk_text-gray_400 tablet:wk_text-[40px] wk_mb-[156px] tablet:wk_mb-[66px] desktop:wk_mb-[80px]'>
                    {errorT('errorDescription')}
                    <a className={cn('wk_underline wk_text-th_accent hover:wk_text-hotPink_500 active:wk_text-hotPink_600 focus:wk_text-hotPink_600', transition)} href="https://www.instagram.com/viksi_fitness" target='_blank'>instagram</a>
                </p>
                <Button onClick={() => router.refresh()} color='pink' lng={lng as Language} label='errorBtnRefresh' className='wk_w-fit tablet:wk_text-[24px]' type='button' />
            </section>
                
            <BurgerMenu lng={lng as Language} t={headerT} navT={navT} showMobMenu={showMobMenu} />
        </>
    );
};
