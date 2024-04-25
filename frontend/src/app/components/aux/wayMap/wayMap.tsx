'use client'

import { Svg } from "@/app/utils";
import { useMediaQuery } from "react-responsive";

export default function WayMap() {
    const isTablet = useMediaQuery({ query: 'min-width: 768px' })
    
    return (
        <ul className="wk_text-gray_50 wk_font-400 wk_max-w-[430px] wk_mx-auto wk_bg-stepLine_pattern wk_bg-center wk_bg-cover">
            <li className="wk_flex wk_flex-row wk_relative wk_justify-end wk_mb-[51px]">
                <Svg id="dot" className="wk_size-[120px] wk_absolute wk_-top-[40px] wk_right-[92px]" />
                <span className="wk_mr-[15px] wk_text-[24px]">
                    1
                </span>
                <p className="wk_max-w-[92px] wk_text-[12px] wk_mt-[12px]">
                    Зрозуміла, що потрібно змінити щось у своєму житті
                </p>
            </li>
            <li className="wk_flex wk_flex-row-reverse wk_relative wk_justify-end wk_mb-[103px]">
                <Svg id="dot" className="wk_size-[120px] wk_absolute wk_-top-[43px] wk_left-[90px]" />
                <span className="wk_ml-[10px] wk_text-[24px]">
                    2
                </span>
                <p className="wk_w-[92px] wk_text-[12px] wk_mt-[4px]">
                        Вирішила діяти
                </p>
            </li>
            <li className="wk_flex wk_flex-row wk_relative wk_justify-end wk_mb-[97px]">
                <Svg id="dot" className="wk_size-[120px] wk_absolute wk_-top-[43px] wk_right-[92px]" />
                <span className="wk_mr-[15px] wk_text-[24px]">
                    3
                </span>
                <p className="wk_max-w-[92px] wk_text-[12px] wk_mt-[4px]">
                    Зв'язалася зі мною
                </p>
            </li>
            <li className="wk_flex wk_flex-row-reverse wk_relative wk_justify-end wk_mb-[55px]">
                <Svg id="dot" className="wk_size-[120px] wk_absolute wk_-top-[44px] wk_left-[90px]" />
                <span className="wk_ml-[10px] wk_text-[24px]">
                    4
                </span>
                <p className="wk_w-[92px] wk_text-[12px] wk_mt-[8px]">
                        Вибрала зручний продукт для себе
                </p>
            </li>
            <li className="wk_flex wk_flex-row wk_relative wk_justify-end">
                <Svg id="dot" className="wk_size-[120px] wk_absolute wk_-top-[44px] wk_right-[92px]" />
                <span className="wk_mr-[15px] wk_text-[24px]">
                    5
                </span>
                <p className="wk_max-w-[92px] wk_text-[12px] wk_mt-[8px]">
                    Досягла мети i насолоджуєшся результатами свого шляху
                </p>
            </li>
        </ul>
    );
};