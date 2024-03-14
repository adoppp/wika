import { ReactNode, Suspense } from 'react';
import { Rubik } from 'next/font/google'

const font = Rubik({ subsets: ['latin'], weight: ['300', '400', '500'] }); 

export const metadata = {
    title: 'Wika',
    description: 'Your online fitness trainer, sport, workout, online, food, trainings, girls',
};

interface LayoutProps {
    children: ReactNode;
    loading: ReactNode;
};

export default function RootLayout({
    children,
    loading,
}: Readonly<LayoutProps>) {
    return (
        <html lang="en">
            <body className={font.className}>
                <Suspense fallback={loading}>
                    {children}
                </Suspense>
            </body>
        </html>
    );
};