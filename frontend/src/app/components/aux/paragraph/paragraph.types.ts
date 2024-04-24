import { ReactNode } from "react";

export default interface ParagraphProps {
    children: ReactNode;
    maxW?: number;
    mb: {
        mobile: number;
        tablet: number;
        dekstop: number;
    };
};