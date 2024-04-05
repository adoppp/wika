import { Logo, NavBar } from '@/app/components';
import { useTranslation } from '@/app/i18n';
import { Language } from '@/app/i18n/settings';
import { Svg } from '@/app/utils';

interface PageProps {
  params: {
    lng: Language;
  };
}

export default async function Page({ params: { lng } }: Readonly<PageProps>) {
  const { t } = await useTranslation(lng, 'footer');
  const { t: navT } = await useTranslation(lng, 'navBar');

  return (
    <footer className="wk_w-[calc(100vw-24px)] desktop:wk_w-[1416px] wk_mx-auto wk_px-[12px] wk_py-[48px] desktop:wk_px-[68px] desktop:wk_py-[100px] wk_rounded-50 wk_bg-th_black">
      <div className="wk_flex wk_flex-col wk_items-center wk_gap-[40px] wk_mb-[40px] tablet:wk_mb-[48px] desktop:wk_flex-row desktop:wk_justify-between">
        <Logo lng={lng} className="desktop:wk_w-[152px]" />

        <NavBar location="footer" t={navT} />

        <ul className="wk_flex wk_gap-[44px] tablet:wk_gap-[52px] desktop:wk_gap-[32px]">
          <li>
            <a
              href="#"
              target="_blank"
              aria-label={t('ariaLabelTg')}
              className="wk_flex wk_justify-center wk_items-center wk_size-[35px] tablet:wk_size-[30px] wk_rounded-[4px] wk_bg-th_white wk_transition-colors wk_ease-wk_quart wk_duration-400 hover:wk_bg-th_accent focus:wk_bg-th_accent focus:wk_outline-none"
            >
              <Svg id="telegram" />
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/viksi_fitness"
              target="_blank"
              aria-label={t('ariaLabelIg')}
              className="wk_flex wk_justify-center wk_items-center wk_size-[35px] tablet:wk_size-[30px] wk_rounded-[4px] wk_bg-th_white wk_transition-colors wk_ease-wk_quart wk_duration-400 hover:wk_bg-th_accent focus:wk_bg-th_accent focus:wk_outline-none"
            >
              <Svg id="instagram" />
            </a>
          </li>

          <li>
            <a
              href="https://www.tiktok.com/@viksi_fitness"
              target="_blank"
              aria-label={t('ariaLabelTt')}
              className="wk_flex wk_justify-center wk_items-center wk_size-[35px] tablet:wk_size-[30px] wk_rounded-[4px] wk_bg-th_white wk_transition-colors wk_ease-wk_quart wk_duration-400 hover:wk_bg-th_accent focus:wk_bg-th_accent focus:wk_outline-none"
            >
              <Svg id="tiktok" />
            </a>
          </li>
        </ul>
      </div>

      <p className="wk_text-[12px] wk_leading-[calc(16/12)] tablet:wk_text-[16px] tablet:wk_leading-[calc(20/16)] wk_text-center wk_text-gray_700">
        {t('copyrightStart')}

        <a
          href="https://www.instagram.com/d1g1talsolut1ons"
          target="_blank"
          className="wk_transition-colors wk_ease-wk_quart wk_duration-400 hover:wk_text-th_white focus:wk_text-th_white focus:wk_outline-none"
        >
          &#169; Digital Solutions 2024.
        </a>

        {t('copyrightEnd')}
      </p>
    </footer>
  );
}
