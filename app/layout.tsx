import "./globals.css";
import "./_fonts.css";
import { Figtree } from "next/font/google";

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
            <body className="bg-[#22577A]">{children}</body>
        </html>
    );
}

export default RootLayout;
