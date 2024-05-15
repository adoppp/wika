import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';

import { Logo, LoginForm } from '@/app/components';

// import { authOptions } from '@/app/api/auth/[...nextauth]/auth';

export default async function Page() {
  // const session = await getServerSession(authOptions);
  // session && redirect('/admin');

  return (
    <div className="wk_flex wk_justify-center wk_items-center wk_w-[100vw] wk_h-[100vh]">
      <Logo />

      <LoginForm />
    </div>
  );
}
