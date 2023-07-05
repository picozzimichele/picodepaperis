"use client";
import useDarkMode from "@/hooks/useDarkMode";

export default function Home() {
    const [colorMode, setColorMode] = useDarkMode();
    return (
        <div>
            Cheers
            <button onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}>TOGGLE DARK MODE</button>
        </div>
    );
}
