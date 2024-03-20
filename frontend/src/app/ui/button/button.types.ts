import { CSSProperties, ReactNode } from "react";

type ButtonTypes = 'white' | 'pink';

interface ButtonProps {
    children: ReactNode,
    button: ButtonTypes,
    w?: number | string,
    h?: number | string,
    customContainerStyles?: CSSProperties,
    action?: () => void
}

export default ButtonProps;