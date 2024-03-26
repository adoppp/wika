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

function Svg({ className, id }: Readonly<SvgProps>) {
    const SvgComponent = svg[id];
    
    return SvgComponent ? SvgComponent({ className }) : null;
}

export default Svg;