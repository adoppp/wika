import { ReactNode } from "react";

export default interface TitleProps {
    children: ReactNode;
    relative?: boolean;
    styles?: string;
};