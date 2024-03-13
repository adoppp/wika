import { ReactNode } from 'react';

export const metadata = {
    title: 'Wika',
    description: 'Your online fitness trainer, sport, workout, online, food, trainings, girls',
};

interface LayoutProps {
    children: ReactNode;
};

export default function RootLayout({
    children,
}: Readonly<LayoutProps>) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
};