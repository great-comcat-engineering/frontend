"use client";

import "@/styles/globals.css";
import NavMenu from "@/components/navigation/nav-menu";
import { ThemeProvider } from "@/context/theme-provider";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <QueryClientProvider client={queryClient}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="light"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <NavMenu />
                        {children}
                    </ThemeProvider>
                </QueryClientProvider>
            </body>
        </html>
    );
}
