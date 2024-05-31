'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { transition } from '../lib/constants';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: Readonly<ErrorProps>) {
  return (
    <div className="wk_flex wk_flex-col wk_justify-center wk_items-center wk_gap-[40px] wk_h-[60vh]">
      <h1 className="wk_mt-[72px] wk_text-[46px] wk_font-500 wk_leading-[calc(64/46)]">
        Упс... Щось пішло не так
      </h1>

      <p className="wk_text-th_black">
        Спробуйте повторити спробу. Якщо помилка не зникає, звʼяжіться, будь
        ласка, із розробниками
      </p>

      <div className="wk_flex wk_items-center wk_gap-[40px]">
        <button
          type="button"
          onClick={() => reset()}
          className={clsx(
            'wk_text-[14px] wk_bg-transparent hover:wk_text-th_accent focus:wk_text-th_accent focus:wk_outline-none wk_transition-colors',
            transition,
          )}
        >
          Повторити спробу
        </button>

        <Link
          href="/admin"
          className={clsx(
            'wk_p-[12px] wk_bg-th_accent wk_rounded-[12px] wk_text-th_white hover:wk_text-th_black focus:wk_text-th_black focus:wk_outline-none wk_transition-colors',
            transition,
          )}
        >
          На головну
        </Link>
      </div>

      <p className="wk_absolute wk_bottom-[20px] wk_text-[12px]">
        {error.stack}
      </p>
    </div>
  );
}
