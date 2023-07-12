"use client";
import React, { useEffect, useRef, useState } from "react";
import Header from "../header/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
    const heroRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: any) => {
            if (!heroRef.current) return;
            setMousePos({ x: event.clientX, y: event.clientY });
            heroRef.current.style.setProperty("--x", `${event.clientX}px`);
            heroRef.current.style.setProperty("--y", `${event.clientY}px`);
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            ref={heroRef}
            className="bg-white dark:bg-[#0b192e] dark:bg-[radial-gradient(circle_farthest-side_at_var(--x,_100px)_var(--y,_100px),_var(--color-secondary)_0%,_transparent_80%)] dark:text-textDark min-h-screen overflow-hidden relative"
        >
            <Header />
            <div className="flex sm:w-[85%] w-[90%] mx-auto">{children}</div>
            <div className="pb-16 sm:pb-0"></div>
        </div>
    );
}
