import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      th_accent: '#FE59C2',
      th_hover: '#FFFFFF',
      th_white: '#FFFFFF',
      th_black: '#000000',
      th_bg_primaty: '#111010',
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
      green_success: '#39ff14'
    },
    fontSize: {
      xs: '12px',
      xs_10: '68px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      xl_2: '22px',
      xl_3: '24px',
      xl_4: '30px',
      xl_5: '36px',
      xl_6: '42px',
      xl_7: '44px',
      xl_8: '50px',
      xl_9: '56px',
    },
    fontFamily: {
      sans: ['Rubik', 'sans-serif']
    }
  },
  plugins: [],
  prefix: 'wk_',
};
export default config;
