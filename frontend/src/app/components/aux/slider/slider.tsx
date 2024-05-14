'use client';

import { useEffect } from 'react';

import { slider } from '@/app/lib/utils';
import { SliderProps } from '../slider';
import { TSliderReturn } from '@/app/lib/utils/slider/slider';

export default function Slider({ className, options }: Readonly<SliderProps>) {
  useEffect(() => {
    let clear: TSliderReturn;

    if (document) {
      clear = slider(className, options);
    }

    return () => clear();
  }, [className, options]);

  return <></>;
}
