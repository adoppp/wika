import { ReactNode } from "react";

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
