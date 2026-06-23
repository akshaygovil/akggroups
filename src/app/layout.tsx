import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Active Directory Forest & Windows Server Migration Services",
    description:
        "Professional services for large Active Directory forest migration, Windows Server migration, domain consolidation, and Microsoft identity modernization.",
    keywords: [
        "Active Directory migration",
        "AD forest migration",
        "Windows Server migration",
        "domain migration",
        "forest consolidation",
        "Microsoft identity migration",
        "enterprise server migration",
        "hybrid identity"
    ],
    openGraph: {
        title: "Active Directory Forest & Windows Server Migration Services",
        description:
            "Structured migration services for complex Microsoft identity and Windows Server environments.",
        type: "website",
        locale: "en_US"
    },
    robots: {
        index: true,
        follow: true
    }
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#f8fafc"
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}