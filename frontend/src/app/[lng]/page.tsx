import { Language } from '@/app/i18n/settings';

interface HomeProps {
  params: {
    lng: Language;
  };
}

export default async function Home({ params: { lng } }: Readonly<HomeProps>) {
  return;
}
