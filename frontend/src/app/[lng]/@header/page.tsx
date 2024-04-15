import { Header } from '@/app/components';
import { useTranslation } from '@/app/i18n';
import { PageProps } from '@/app/types';

export default async function Page({ params: { lng } }: Readonly<PageProps>) {
  const { t } = await useTranslation(lng, 'header');
  const { t: navT } = await useTranslation(lng, 'navBar');

  return <Header lng={lng} t={t} navT={navT} />
}
