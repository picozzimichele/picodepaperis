import Header from "@/components/Header";
import "./globals.css";
import "./_fonts.css";
import { Figtree } from "next/font/google";

const figtree = Figtree({
    subsets: ["latin"],
    variable: "--font-figtree",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${figtree.variable}`}>
            <body>
                <Header />
                <div className="flex sm:w-[85%] w-[90%] mx-auto">{children}</div>
            </body>
        </html>
    );
}
