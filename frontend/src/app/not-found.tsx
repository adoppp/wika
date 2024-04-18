'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Header, BurgerMenu, Button } from './components';
import { useTranslation } from './i18n/client';
import { cn } from '@/app/utils';
import { transition } from '@/app/constants';

export default function NotFound() {
    const pathname = usePathname();
    const lng = pathname.includes('uk') ? 'uk' : 'ru';
    const router = useRouter();
    const { t: headerT } = useTranslation(lng, 'header');
    const { t: navT } = useTranslation(lng, 'navBar')
    const { t: errorT } = useTranslation(lng, 'error')
    const searchParams = useSearchParams();
    const showMobMenu: boolean | string | null = searchParams.get('mobMenu');

    return (
        <>
            <Header lng={lng} t={headerT} navT={navT} />
            
            <section className='wk_mt-[140px] tablet:wk_mt-[180px] desktop:wk_mt-[240px] wk_mx-auto wk_w-fit wk_text-center wk_flex wk_flex-col wk_items-center'>
                <h1 className='wk_font-300 wk_leading-none wk_text-[120px] wk_text-th_accent tablet:wk_text-[239px] wk_mb-[78px] tablet:wk_mb-[32px] desktop:wk_mb-[40px]'>404</h1>
                <p className='wk_font-400 wk_text-[20px] wk_text-gray_400 tablet:wk_text-[40px] wk_mb-[156px] tablet:wk_mb-[66px] desktop:wk_mb-[80px] wk_max-w-[1080px]'>
                    {errorT('notFoundDescription')}
                </p>
                <Button onClick={() => router.replace('/')} color='pink' lng={lng} label='errorBtnNotFound' className='wk_w-fit wk_font-400 tablet:wk_text-[24px]' />
            </section>
                
            <BurgerMenu lng={lng} t={headerT} navT={navT} showMobMenu={showMobMenu} />
        </>
    );
};