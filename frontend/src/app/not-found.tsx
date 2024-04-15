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
            
            <section className='wk_mt-[280px] tablet:wk_mt-[320px] desktop:wk_mt-[180px] wk_mx-auto wk_w-fit wk_text-center wk_flex wk_flex-col wk_items-center'>
          <h1 className='wk_font-300 wk_text-[150px] wk_text-th_accent tablet:wk_text-[239px] wk_mb-[78px] tablet:wk_mb-[32px] desktop:wk_mb-[40px]'>404</h1>
                <p className='wk_font-400 wk_text-[20px] wk_text-gray_400 tablet:wk_text-[40px] wk_mb-[156px] tablet:wk_mb-[66px] desktop:wk_mb-[80px]'>
                    {errorT('errorDescription')}
                    <a className={cn('wk_underline wk_text-th_accent hover:wk_text-hotPink_500 active:wk_text-hotPink_600 focus:wk_text-hotPink_600', transition)} href="https://www.instagram.com/viksi_fitness" target='_blank'>instagram</a>
                </p>
                <Button onClick={() => router.replace('/')} color='pink' lng={lng} label='errorBtnNotFound' className='wk_w-fit tablet:wk_text-[24px]' />
            </section>
                
            <BurgerMenu lng={lng} t={headerT} navT={navT} showMobMenu={showMobMenu} />
        </>
    );
};