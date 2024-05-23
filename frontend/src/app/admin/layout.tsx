import { AdminProviders } from '@/app/lib/utils';

export const metadata = {
  title: 'Wika. Admin panel',
  description: 'Wika. Admin panel',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminProviders>{children}</AdminProviders>;
}
