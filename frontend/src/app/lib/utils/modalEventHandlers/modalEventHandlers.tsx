'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import {
  ModalEventHandlersProps,
  KeyboardEvent,
} from './modalEventHandlers.types';

export default function ModalEventHandlers({
  backdropClassName,
  cancelLink,
}: Readonly<ModalEventHandlersProps>) {
  const router = useRouter();

  useEffect(() => {
    const onKeydown = (e: KeyboardEvent): void => {
      if (e.code === 'Escape') {
        router.replace(cancelLink || '/');
      }
    };

    const onBackdropCLick = (e: MouseEvent): void => {
      if ((e.target as Element).classList.contains(backdropClassName)) {
        router.replace(cancelLink || '/');
      }
    };

    window.addEventListener('keydown', onKeydown);
    window.addEventListener('click', onBackdropCLick);

    return () => {
      window.removeEventListener('keydown', onKeydown);
      window.removeEventListener('click', onBackdropCLick);
    };
  });

  return <></>;
}
