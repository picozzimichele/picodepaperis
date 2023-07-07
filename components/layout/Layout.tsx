import React from "react";
import Header from "../header/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-white dark:bg-[#22577A] min-h-screen">
            <Header />
            <div className="flex sm:w-[85%] w-[90%] mx-auto">{children}</div>
        </div>
    );
}
