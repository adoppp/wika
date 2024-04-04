'use client';

import { useEffect } from 'react';

import { MetadataHandlerProps } from '../metadataHandler';

export default function MetadataHandler({
  lang,
  dir,
}: Readonly<MetadataHandlerProps>) {
  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', dir);
  });

  return null;
}
