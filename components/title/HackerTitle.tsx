"use client";

import { useEffect, useRef, useState } from "react";
import useHover from "@/hooks/useHover";

export default function HackerTitle() {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const title = "picozzimichele";
    const { hovered, eventHandlers } = useHover();
    const [newTitle, setNewTitle] = useState(title);

    useEffect(() => {
        let iterations = 0;
        const interval = setInterval(() => {
            const newTitle = title
                .split("")
                .map((letter, index) => {
                    if (index < iterations) {
                        return title[index];
                    }
                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");

            setNewTitle(newTitle);
            if (iterations >= title.length) {
                clearInterval(interval);
            }
            iterations++;
        }, 50);
    }, [hovered]);

    return (
        <div {...eventHandlers} className="w-40 bg-white">
            {hovered ? newTitle : title}
        </div>
    );
}
