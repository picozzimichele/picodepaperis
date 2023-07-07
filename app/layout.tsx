import "./globals.css";
import "./_fonts.css";
import { Figtree } from "next/font/google";
import Layout from "@/components/layout/Layout";

const figtree = Figtree({
    subsets: ["latin"],
    variable: "--font-figtree",
});

export const metadata = {
    title: "picozzimichele",
    description: "Coded and Designed by Michele Picozzi, enjoy a tour of my personal website",
};

function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${figtree.variable}`}>
            <body>{children}</body>
        </html>
    );
}

export default RootLayout;
