"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Test() {
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
        <div ref={heroRef} className="radial-gradient">
            Test
        </div>
    );
}
