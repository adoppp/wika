import { SvgTypes, SvgProps } from './svg.types';
import {
    BurgerMenu,
    Globe,
    Handshake,
    Apple,
    CodeMentor
} from './imports';

const svg: Readonly<SvgTypes> = {
    burgerMenu: ({ className }) => <BurgerMenu className={className} />,
    globe: ({ className }) => <Globe className={className} />,
    handshake: ({ className }) => <Handshake className={className} />,
    apple: ({ className }) => <Apple className={className} />,
    codeMentor: ({ className }) => <CodeMentor className={className} />
};

function SvgConventor({ className, id }: Readonly<SvgProps>) {
    const svgComponent = svg[id];
    if (svgComponent) {
        return svgComponent({ className });
    }
    return null;
}

export default SvgConventor;