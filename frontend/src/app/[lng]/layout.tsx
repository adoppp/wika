import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { dir } from 'i18next';

import { languages } from '../i18n/settings';
import { MetadataHandler } from '../utils';

interface LayoutProps {
  header: ReactNode;
  hero: ReactNode;
  services: ReactNode;
  call: ReactNode;
  footer: ReactNode;
  params: {
    lng: string;
  };
}

export async function generateMetadata({
  params: { lng },
}: Pick<LayoutProps, 'params'>): Promise<Metadata> {
  let title: string = '';
  let description: string = '';

  switch (lng) {
    case 'uk':
      title = 'Wika. Твоя персональна фітнес тренерка';
      description = '';
      break;

    case 'ru':
      title = 'Wika. Твой персональный фитнес тренер';
      description = '';
      break;

    default:
      break;
  }

  return {
    title,
    description,
  };
}

export async function generateStaticParams() {
  return languages.map(lng => ({ lng }));
}

export default function Layout({
  header,
  hero,
  services,
  call,
  footer,
  params: { lng },
}: Readonly<LayoutProps>) {
  return (
    <>
      <MetadataHandler lang={lng} dir={dir(lng)} />

      {header}

      <main className="wk_mb-[12px]">
        {hero}
        {services}
        {call}
      </main>

      {footer}
    </>
  );
}
