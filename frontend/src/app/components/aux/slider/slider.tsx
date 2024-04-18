'use client';

import { useEffect } from 'react';

import { slider } from '@/app/lib/utils';
import { SliderProps } from '../slider';

export default function Slider({ className, options }: Readonly<SliderProps>) {
  useEffect(() => {
    let id: NodeJS.Timeout | undefined;

    if (document) {
      id = slider(className, options);
    }

    return () => clearInterval(id);
  }, [className, options]);

  return <></>;
}
