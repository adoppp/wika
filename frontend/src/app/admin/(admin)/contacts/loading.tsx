'use client';

import { useEffect } from 'react';
import { Loading as Loader } from 'notiflix';

export default function Loading() {
  useEffect(() => {
    Loader.circle('Завантажуємо дані з сервера', {
      backgroundColor: '#181818',
      svgColor: '#FE59C2',
    });

    return () => {
      Loader.remove();
    };
  }, []);

  return null;
}
