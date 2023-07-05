"use client";
import MoonSvg from "@/public/svg/MoonSvg";
import useDarkMode from "@/hooks/useDarkMode";
import SunSvg from "@/public/svg/SunSvg";

export default function ToggleDark() {
    const [colorMode, setColorMode] = useDarkMode();
    return (
        <button onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")} className="hover:text-[#38a3a5] items-center justify-center">
            {colorMode === "light" ? <MoonSvg /> : <SunSvg />}
        </button>
    );
}
