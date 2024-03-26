import { ReactNode } from "react";

type Svg =
    'burgerMenu' |
    'globe' |
    'handshake' |
    'apple' |
    'codeMentor';

export type SvgTypes = {
    [K in Svg]: (props: { className?: string }) => ReactNode;
};

export interface SvgProps {
    className?: string,
    id: Svg,
}