// import { Metadata } from "next";
import { ReactNode } from "react";

// export const metadata: Metadata = {
//     title: 'Wika',
//     description: 'Your online fitness trainer, sport, workout, online, food, trainings, girls',
// }

interface LayoutProps {
    header: ReactNode;
    children: ReactNode;
}

export default function RootLayout({
    header,
    children,
}: Readonly<LayoutProps>) {
    return (
    <>
        {header}
        
        <main>
            {children}
        </main>
    </>
    )
}
