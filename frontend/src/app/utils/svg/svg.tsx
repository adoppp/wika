import { twMerge } from 'tailwind-merge';

import { SvgTypes, SvgProps } from './svg.types';
import {
    BurgerMenu,
    Globe,
    Handshake,
    Apple,
    CodeMentor
} from './imports';

const transition = 'wk_ease-wk_quart wk_duration-400';

const svg: Readonly<SvgTypes> = {
    burgerMenu: ({ className }) => <BurgerMenu className={twMerge(transition, className)} />,
    globe: ({ className }) => <Globe className={twMerge(transition, className)} />,
    handshake: ({ className }) => <Handshake className={twMerge(transition, className)} />,
    apple: ({ className }) => <Apple className={twMerge(transition, className)} />,
    codeMentor: ({ className }) => <CodeMentor className={twMerge(transition, className)} />
};

function Svg({ className, id }: Readonly<SvgProps>) {
    const SvgComponent = svg[id];
    
    return SvgComponent ? SvgComponent({ className }) : null;
}

export default Svg;