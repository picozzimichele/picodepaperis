import "./globals.css";
import "./_fonts.css";
import { Figtree } from "next/font/google";

const figtree = Figtree({
    subsets: ["latin"],
    variable: "--font-figtree",
});

export const metadata = {
    title: "Michele Picozzi",
    description: "Coded and Designed by Michele Picozzi, enjoy a tour of my personal website",
};

function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${figtree.variable}`}>
            <head>
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
            </head>
            <body>{children}</body>
        </html>
    );
}

export default RootLayout;
