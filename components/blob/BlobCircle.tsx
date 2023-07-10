"use client";
import React, { useEffect, useState } from "react";

export default function BlobCircle() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: any) => {
            setMousePos({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            style={{ left: mousePos.x, top: mousePos.y }}
            className={`bg-green-50 translate absolute h-[300px] blur-[600px] aspect-square rounded-full animationrotate left-1/2 top-1/2 pointer-events-none`}
        ></div>
    );
}
