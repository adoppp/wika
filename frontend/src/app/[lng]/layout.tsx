import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { dir } from 'i18next';

import { languages } from '../i18n/settings';
import { MetadataHandler, Providers } from '../lib/utils';

interface LayoutProps {
  header: ReactNode;
  hero: ReactNode;
  about: ReactNode;
  services: ReactNode;
  howItWorks: ReactNode;
  photos: ReactNode;
  reviews: ReactNode;
  call: ReactNode;
  footer: ReactNode;
  burgerMenu: ReactNode;
  modal: ReactNode;
  cookie: ReactNode;
  privacyPolicy: ReactNode;
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
      title = 'Твоя персональна фітнес тренерка';
      description =
        'Персональний фітнес тренер для дівчат у Києві. Індивідуальні тренування, програми харчування. Досягніть своїх цілей з професіоналом!';
      break;

    case 'ru':
      title = 'Твой персональный фитнес тренер';
      description =
        'Персональный тренер для девочек в Киеве. Индивидуальные тренировки, программы питания. Достигни свои цели с профессионалом!';
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
  about,
  services,
  photos,
  reviews,
  call,
  howItWorks,
  footer,
  burgerMenu,
  modal,
  cookie,
  privacyPolicy,
  params: { lng },
}: Readonly<LayoutProps>) {
  return (
    <Providers>
      <MetadataHandler lang={lng} dir={dir(lng)} />

      {header}

      <main className="wk_mb-[12px]">
        {hero}
        {about}
        {services}
        {howItWorks}
        {photos}
        {reviews}
        {call}
      </main>

      {footer}
      {burgerMenu}
      {modal}
      {cookie}
      {privacyPolicy}
    </Providers>
  );
}
