'use client';

import { useEffect } from 'react';

export default function AdminBodyStyles() {
  useEffect(() => {
    document.body.className = 'wk_bg-th_white wk_pr-[12px] wk_py-[12px]';
  });

  return null;
}
