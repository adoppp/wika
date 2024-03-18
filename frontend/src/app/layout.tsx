import type { Metadata } from "next";
import { ReactNode, Suspense } from 'react';
import { Rubik } from 'next/font/google'
import { dir } from "i18next";

import { languages } from "./i18n/settings";
import "./globals.css";

const font = Rubik({ subsets: ['latin'], weight: ['300', '400', '500', '700'] }); 


export const metadata: Metadata = {
    title: 'Wika',
    description: 'Your online fitness trainer, sport, workout, online, food, trainings, girls',
};

export async function generateStaticParams() {
    return languages.map(lng => ({ lng }));
};

interface LayoutProps {
    children: ReactNode;
    loading: ReactNode;
    params: {
        lng: string
    }
};

export default async function RootLayout({
    children,
    loading,
    params: { lng }
}: Readonly<LayoutProps>) {
    return (
        <html lang={lng} dir={dir(lng)}>
            <body className={font.className}>
                <Suspense fallback={loading}>
                    {children}
                </Suspense>
            </body>
        </html>
    );
};
