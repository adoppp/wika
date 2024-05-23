import { ReactNode } from 'react';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';

import { Sidebar, TitleContent } from '@/app/components';

import { authOptions } from '@/app/api/auth/[...nextauth]/auth';
import { AdminBodyStyles } from '@/app/lib/utils';

export interface LayoutProps {
  children: ReactNode;
}

export default async function Layout({ children }: Readonly<LayoutProps>) {
  const session = await getServerSession(authOptions);
  !session && redirect('/admin/login');

  return (
    <div className="wk_flex wk_gap-[12px]">
      <Sidebar />

      <div className="wk_w-[calc(100%-228px)] wk_p-[12px]">
        <TitleContent />

        <div>{children}</div>
      </div>

      <AdminBodyStyles />
    </div>
  );
}
