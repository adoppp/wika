import { Logo, NavBar, LanguageSwitcher, Button } from '@/app/components';

import { useTranslation } from '@/app/i18n';
import { PageProps } from '@/app/types';
import { Svg } from '@/app/utils';
import Link from 'next/link';


export default async function Page({ params: { lng }, searchParams }: Readonly<PageProps>) {
  const { t } = await useTranslation(lng, 'header');
  const { t: navT } = await useTranslation(lng, 'navBar');

  return (
    <header
      className="
        wk_absolute
        wk_top-[40px]
        tablet:wk_top-[50px]
        desktop:wk_top-[40px]
        wk_left-[50%]
        wk_translate-x-[-50%] wk_overflow-hidden
        
        wk_flex 
        wk_items-center
        wk_justify-between
        
        smallMobile:wk_w-[calc(100%-48px)]
        tablet:wk_w-[calc(100%-128px)]
        desktop:wk_w-[1328px]
        
        wk_px-[22px]
        wk_py-[16px]
        
        wk_rounded-20

        wk_bg-th_bg_tertiary
        "
    >
      <Logo lng={lng} className="wk_w-[152px] desktop:wk_w-[248px]" />

      <NavBar t={navT} location="header" />

      <Link
        href='?mobMenu=true'
        className="wk_cursor-pointer desktop:wk_hidden"
        aria-label={t('burger_aria_label')}
      >
        <Svg
          id="burgerMenu"
          className="wk_stroke-th_white hover:wk_stroke-th_accent"
        />
      </Link>

      <div className="smallMobile:wk_hidden tablet:wk_flex wk_items-center wk_gap-[20px]">
        <LanguageSwitcher lng={lng} location="header" />

        <Button color="white" type="button" lng={lng} />
      </div>
    </header>
  );
}
