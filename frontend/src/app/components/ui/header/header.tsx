import Link from 'next/link';

import { Logo, NavBar, LanguageSwitcher, Button } from '@/app/components';

import { Svg } from '@/app/utils';
import { HeaderProps } from '@/app/components/ui/header/header.types';

export default function Header({ lng, t, navT }: Readonly<HeaderProps>) {
  return (
    <header
      className="
        wk_absolute
        wk_top-[40px]
        tablet:wk_top-[50px]
        desktop:wk_top-[40px]
        wk_left-[50%]
        wk_translate-x-[-50%]
        
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
        href="?mobMenu=true"
        className="wk_cursor-pointer desktop:wk_hidden"
        aria-label={t('burger_aria_label')}
      >
        <Svg
          id="burgerMenu"
          className="wk_stroke-th_white hover:wk_stroke-th_accent"
        />
      </Link>

      <div className="wk_hidden tablet:wk_flex wk_items-center wk_gap-[20px]">
        <LanguageSwitcher lng={lng} location="header" />

        <Button color="white" type="button" lng={lng} label="label" />
      </div>
    </header>
  );
}
