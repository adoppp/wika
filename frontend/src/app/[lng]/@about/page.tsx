import { AboutText, Statistics } from '@/app/components';

import { useTranslation } from '@/app/i18n';
import { Language } from '@/app/i18n/settings';

// import video_webm from 'public/video/about.webm';
// import video_mp4 from 'public/video/about.mp4';

interface PageProps {
  params: {
    lng: Language;
  };
}

export default async function Page({ params: { lng } }: Readonly<PageProps>) {
  const { t } = await useTranslation(lng, 'about');

  return (
    <section
      id="about"
      className="wk_w-[calc(100vw-24px)] desktop:wk_w-[1416px] wk_mx-auto wk_mb-[12px] wk_px-[16px] wk_py-[52px] tablet:wk_px-[68px] tablet:wk_pt-[56px] tablet:wk_pb-[68px] desktop:wk_py-[120px] wk_rounded-50 wk_bg-th_black"
    >
      <h2 className="wk_absolute wk_size-[1px] wk_m-[-1px] wk_p-0 wk_overflow-hidden wk_border-0">
        {t('title')}
      </h2>

      <div className="desktop:wk_flex desktop:wk_justify-between wk_mb-[32px] tablet:wk_mb-[52px]">
        <p className="desktop:wk_w-[728px] tablet:wk_mb-[8px] desktop:wk_mb-[0] wk_px-[16px] wk_py-[8px] desktop:wk_p-[0] wk_text-[30px] wk_leading-[calc(36/30)] tablet:wk_text-[50px] tablet:wk_leading-[calc(60/50)] wk_text-gray_300">
          {t('mainText')}
        </p>

        <AboutText lng={lng} />
      </div>

      <div>
        <ul className="wk_flex wk_gap-[8px] tablet: wk_gap-[12px]">
          <li className="wk_px-[20px] wk_py-[10px] wk_rounded-25 wk_leading-[calc(18/16)] tablet:wk_text-[20px] tablet:wk_leading-[calc(24/20)] wk_text-th_white wk_bg-[#FFFFFF33] wk_transition-colors wk_ease-wk_quart wk_duration-400 hover:wk_text-th_accent hover:wk_bg-[#FE59C233] focus:wk_text-th_accent focus:wk_bg-[#FE59C233]">
            <a href="#" target="_blank" className="focus:wk_outline-none">
              Telegram
            </a>
          </li>

          <li className="wk_px-[20px] wk_py-[10px] wk_rounded-25 wk_leading-[calc(18/16)] tablet:wk_text-[20px] tablet:wk_leading-[calc(24/20)] wk_text-th_white wk_bg-[#FFFFFF33] wk_transition-colors wk_ease-wk_quart wk_duration-400 hover:wk_text-th_accent hover:wk_bg-[#FE59C233] focus:wk_text-th_accent focus:wk_bg-[#FE59C233]">
            <a
              href="https://www.instagram.com/viksi_fitness"
              target="_blank"
              className="focus:wk_outline-none"
            >
              Instagram
            </a>
          </li>

          <li className="wk_px-[20px] wk_py-[10px] wk_rounded-25 wk_leading-[calc(18/16)] tablet:wk_text-[20px] tablet:wk_leading-[calc(24/20)] wk_text-th_white wk_bg-[#FFFFFF33] wk_transition-colors wk_ease-wk_quart wk_duration-400 hover:wk_text-th_accent hover:wk_bg-[#FE59C233] focus:wk_text-th_accent focus:wk_bg-[#FE59C233]">
            <a
              href="https://www.tiktok.com/@viksi_fitness"
              target="_blank"
              className="focus:wk_outline-none"
            >
              TikTok
            </a>
          </li>
        </ul>
      </div>

      <Statistics t={t} />
    </section>
  );
}
