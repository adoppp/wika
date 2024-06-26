import { BurgerMenu } from '@/app/components';

import { useTranslation } from '@/app/i18n';

import { PageProps } from '@/app/lib/types';

export default async function Page({
  params: { lng },
  searchParams,
}: Readonly<PageProps>) {
  const { t } = await useTranslation(lng, 'header');
  const { t: navT } = await useTranslation(lng, 'navBar');
  const showMobMenu: boolean = !!searchParams?.mobMenu;

  return <BurgerMenu showMobMenu={showMobMenu} t={t} navT={navT} lng={lng} />;
}
