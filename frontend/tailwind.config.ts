import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      th_accent: '#FE59C2',
      th_hover: '#FFFFFF',
      th_white: '#FFFFFF',
      th_black: '#000000',
      th_button: '#0D1017',
      th_bg_primary: '#111010',
      th_bg_secondary: '#000000',
      th_bg_tertiary: '#181818',

      gray_50: '#f6f5f5',
      gray_100: '#e7e6e6',
      gray_200: '#d2cfd0',
      gray_300: '#b3adae',
      gray_400: '#8c8485',
      gray_500: '#71696a',
      gray_600: '#605a5b',
      gray_700: '#514d4d',
      gray_800: '#474343',
      gray_900: '#3e3b3b',
      gray_950: '#111010',

      hotPink_50: '#fef1f9',
      hotPink_100: '#fee5f6',
      hotPink_200: '#feccee',
      hotPink_300: '#ffa2e0',
      hotPink_400: '#fe59c2',
      hotPink_500: '#f93baf',
      hotPink_600: '#e9198d',
      hotPink_700: '#cb0b71',
      hotPink_800: '#a70d5c',
      hotPink_900: '#8b104f',
      hotPink_950: '#56012d',

      red_danger: '#ff073a',
      yellow_warning: '#ffa422',
      green_success: '#39ff14',
      form_black: '#1C232C',

      backdrop: 'rgba(0, 0, 0, 0.5)',
    },
    fontSize: {
      title_mob: ['32px', { lineHeight: `${40 / 32}` }],
      title_tab: ['56px', { lineHeight: `${68 / 56}` }],
      title_desk: ['60px', { lineHeight: `${72 / 60}` }],
    },
    fontWeight: {
      '300': '300',
      '400': '400',
      '500': '500',
      '600': '600',
      '700': '700',
    },
    fontFamily: {
      sans: ['Rubik', 'sans-serif'],
    },
    screens: {
      smallMobile: '320px',
      mobile: '420px',
      middleMobile: '470px',
      tablet: '768px',
      laptop: '1024px',
      desktop: '1440px',
    },
    container: {
      center: true,
      screens: {
        sm: '380px',
        md: '768px',
        xl: '1440px',
      },
    },

    minWidth: {
      smallMobile: '320px',
      mobile: '380px',
    },
    maxWidth: {
      desktop: '1440px',
    },
    borderRadius: {
      '14': '14px',
      '20': '20px',
      '25': '25px',
      '40': '40px',
      '50': '50px',
    },
    transitionTimingFunction: {
      wk_quart: 'cubic-bezier(0.76, 0, 0.24, 1)',
    },
    transitionDuration: {
      '400': '400ms',
    },
    extend: {
      backgroundImage: {
        hero_pattern_smallMob:
          'image-set(url(../../public/images/hero_mobile.webp) 1x type("image/webp"), url(../../public/images/hero_mobile@2x.webp) 2x type("image/webp"), url(../../public/images/hero_mobile@3x.webp) 3x type("image/webp"), url(../../public/images/hero_mobile.jpg) 1x type("image/jpeg"), url(../../public/images/hero_mobile@2x.jpg) 2x type("image/jpeg"), url(../../public/images/hero_mobile@3x.jpg) 3x type("image/jpeg"))',
        hero_pattern_mob:
          'image-set(url(../../public/images/hero_tablet.webp) 1x type("image/webp"), url(../../public/images/hero_tablet@2x.webp) 2x type("image/webp"), url(../../public/images/hero_tablet@3x.webp) 3x type("image/webp"), url(../../public/images/hero_tablet.jpg) 1x type("image/jpeg"), url(../../public/images/hero_tablet@2x.jpg) 2x type("image/jpeg"), url(../../public/images/hero_tablet@3x.jpg) 3x type("image/jpeg"))',
        hero_pattern_tab:
          'image-set(url(../../public/images/hero_desktop.webp) 1x type("image/webp"), url(../../public/images/hero_desktop@2x.webp) 2x type("image/webp"), url(../../public/images/hero_desktop@3x.webp) 3x type("image/webp"), url(../../public/images/hero_desktop.jpg) 1x type("image/jpeg"), url(../../public/images/hero_desktop@2x.jpg) 2x type("image/jpeg"), url(../../public/images/hero_desktop@3x.jpg) 3x type("image/jpeg"))',
        stepLine_pattern_mob:
          'image-set(url(../../public/images/stepline_mob.webp) 1x type("image/webp"), url(../../public/images/stepline_mob@2x.webp) 2x type("image/webp"), url(../../public/images/stepline_mob@3x.webp) 3x type("image/webp"), url(../../public/images/stepline_mob.png) 1x type("image/png"), url(../../public/images/stepline_mob@2x.png) 2x type("image/png"), url(../../public/images/stepline_mob@3x.png) 3x type("image/png"))',
        stepLine_pattern_tablet:
          'image-set(url(../../public/images/stepsLine_tablet.webp) 1x type("image/webp"), url(../../public/images/stepsLine_tablet@2x.webp) 2x type("image/webp"), url(../../public/images/stepsLine_tablet@3x.webp) 3x type("image/webp"), url(../../public/images/stepsLine_tablet.png) 1x type("image/png"), url(../../public/images/stepsLine_tablet@2x.png) 2x type("image/png"), url(../../public/images/stepsLine_tablet@3x.png) 3x type("image/png"))',
        stepLine_pattern_desktop:
          'image-set(url(../../public/images/stepsLine.webp) 1x type("image/webp"), url(../../public/images/stepsLine@2x.webp) 2x type("image/webp"), url(../../public/images/stepsLine@3x.webp) 3x type("image/webp"), url(../../public/images/stepsLine.png) 1x type("image/png"), url(../../public/images/stepsLine@2x.png) 2x type("image/png"), url(../../public/images/stepsLine@3x.png) 3x type("image/png"))',
      },
    },
  },
  plugins: [],
  prefix: 'wk_',
};
export default config;
