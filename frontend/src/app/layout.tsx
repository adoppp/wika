import { ReactNode, Suspense } from 'react';
import { Rubik } from 'next/font/google';

import './globals.css';
import Loading from './loading';
import dynamic from 'next/dynamic';

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
  variable: '--font-rubik',
});

interface LayoutProps {
  children: ReactNode;
}

export default async function RootLayout({ children }: Readonly<LayoutProps>) {
  return (
    <html className="wk_scroll-smooth">
      <body className={`${rubik.className} wk_bg-th_bg_primary wk_p-[12px]`}>
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
