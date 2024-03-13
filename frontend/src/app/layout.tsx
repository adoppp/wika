import { ReactNode, Suspense } from 'react';

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
            <body>
                <Suspense fallback={loading}>
                    {children}
                </Suspense>
            </body>
        </html>
    );
};