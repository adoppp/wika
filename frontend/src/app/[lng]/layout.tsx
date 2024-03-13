import { ReactNode } from "react"

export const metadata = {
    title: 'Wika',
    description: 'Your online fitness trainer, sport, workout, online, food, trainings, girls',
}

interface LayoutProps {
    header: ReactNode;
    children: ReactNode;
}

export default function RootLayout({
    header,
    children,
}: Readonly<LayoutProps>) {
    return (
        <html lang="en">
            <body>
                {header}
                
                <main>
                    {children}
                </main>
            </body>
        </html>
    )
}
