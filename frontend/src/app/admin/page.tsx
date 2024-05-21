import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';

import { Sidebar } from '@/app/components';

import { authOptions } from '../api/auth/[...nextauth]/auth';

import { AdminBodyStyles } from '../lib/utils';

export default async function Page() {
  const session = await getServerSession(authOptions);
  !session && redirect('admin/login');

  return (
    <>
      <AdminBodyStyles />

      <div className="wk_flex">
        <Sidebar />

        <div className="wk_w-[540px] wk_mx-auto wk_my-auto wk_px-[56px] wk_py-[40px] wk_rounded-[30px] wk_text-th_white wk_bg-th_accent">
          <h1 className="wk_mb-[20px] wk_text-[32px] wk_text-center wk_font-500">
            Вітаємо!
          </h1>

          <p className="wk_text-[18px] wk_text-center">
            Ласкаво просимо до адміністративної панелі сайту персонального
            онлайн тренера
          </p>
        </div>
      </div>
    </>
  );
}
