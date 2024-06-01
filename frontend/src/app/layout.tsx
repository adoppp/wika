import { ReactNode } from 'react';
import { Rubik } from 'next/font/google';

import './globals.css';

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
});

interface LayoutProps {
  children: ReactNode;
  header: ReactNode;
}

export default async function RootLayout({
  children,
  header,
}: Readonly<LayoutProps>) {
  return (
    <html className="wk_scroll-smooth">
      <body className={`${rubik.className} wk_bg-th_bg_primary wk_p-[12px]`}>
        {header}
        {children}
      </body>
    </html>
  );
}
