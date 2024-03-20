import { ReactNode } from 'react';

import {
    BurgerMenu,
    Globe,
    Handshake,
    Apple,
    CodeMentor
} from './imports';

type Svg =
    'burgerMenu' |
    'globe' |
    'handshake' |
    'apple' |
    'codeMentor';

type SvgTypes = {
    [K in Svg]: ReactNode;
};

const svg: Readonly<SvgTypes> = {
    burgerMenu: <BurgerMenu />,
    globe: <Globe />,
    handshake: <Handshake />,
    apple: <Apple />,
    codeMentor: <CodeMentor />
};

export default svg;