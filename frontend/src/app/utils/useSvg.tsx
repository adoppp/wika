import { ReactNode } from 'react';

import BurgerMenu from '@/../public/svg/menu.svg';

type Svg = 'BurgerMenu';

type SvgTypes = {
    [K in Svg]: () => ReactNode;
};

const svg: Readonly<SvgTypes>= {
    BurgerMenu: () => <BurgerMenu />,
};

export default svg;