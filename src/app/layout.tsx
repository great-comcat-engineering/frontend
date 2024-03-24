import "@/styles/globals.css";
import type { Metadata } from "next";
import AppConfig from "@/config/appConfig";
import NavMenu from "@/components/navigation/nav-menu";
import { ThemeProvider } from "@/context/theme-provider";

export const metadata: Metadata = {
    title: AppConfig.metadata.title,
    description: AppConfig.metadata.description,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                    disableTransitionOnChange
                >
                    <NavMenu />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
