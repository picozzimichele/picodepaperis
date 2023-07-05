import Header from "@/components/Header";
import "./globals.css";
import "./_fonts.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Header />
                <div className="flex w-full">{children}</div>
            </body>
        </html>
    );
}
