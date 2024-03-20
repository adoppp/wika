import clsx from "clsx";

import ButtonProps from "./button.types";


export default function Button({ children, button, w, h, customContainerStyles, action}: Readonly<ButtonProps>) {
    return (
        <button
            className={clsx(
                button === 'white' && 'wk_bg-th_white wk_rounded-medium wk_text-center wk_py-[16px] wk_px-[30px] wk_text-button_sm wk_font-400',
                button === 'pink' && ''
            )}
            style={
                customContainerStyles ?
                    { width: w, height: h, ...customContainerStyles } :
                    { width: w, height: h }
            }
            onClick={action}
        >
            {children}
        </button>
    )
}