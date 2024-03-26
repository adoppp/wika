import type { Config } from "tailwindcss";

const config: Config = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
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
            'text_xs': '12px',
            'text_10xs': ['68px', {
                lineHeight: '100%',
            }],
            'text_sm': '14px',
            'text_base': '16px',
            'text_lg': '18px',
            'text_xl': '20px',
            'text_xl_150lH': ['20px', {
                lineHeight: '150%',
            }],
            'text_2xl': '22px',
            'text_3xl': '24px',
            'text_4xl': '30px',
            'text_5xl': '36px',
            'text_6xl': '42px',
            'text_7xl': '44px',
            'text_8xl': '50px',
            'text_9xl': '56px',
            'title_xs': '32px',
            'title_sm': '57px',
            'title_base': '60px',
            'title_lg': '80px',
            'button_xs': ['14px', {
                lineHeight: '100%'
            }],
            'button_sm': ['16px', {
                lineHeight: '100%'
            }],
            'button_base': ['34px', {
                lineHeight: '100%'
            }]
        },
        fontWeight: {
            '300': '300',
            '400': '400',
            '500': '500',
            '700': '700',
        },
        fontFamily: {
            sans: ['Rubik', 'sans-serif']
        },
        screens: {
            'smallMobile': '300px',
            'mobile': '420px',
            'tablet': '768px',
            'laptop': '1024px',
            'desktop': '1440px',
        },
        container: {
            center: true,
            screens: {
                sm: '380px',
                md: '768px',
                xl: '1440px',
            }
        },
        minWidth: {
            'smallMobile': '320px',
            'mobile': '380px',
        },
        maxWidth: {
            'dekstop': '1440px'
        },
        borderRadius: {
            'medium': '14px',
            'large': '20px',
        },
        transitionTimingFunction: {
            'wk_quart': 'cubic-bezier(0.76, 0, 0.24, 1)',
        },
        transitionDuration: {
            '400': '400ms',
        }
    },
    plugins: [],
    prefix: 'wk_',
};
export default config;
