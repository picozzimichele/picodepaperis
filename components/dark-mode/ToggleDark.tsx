"use client";
import MoonSvg from "@/public/svg/MoonSvg";
import useDarkMode from "@/hooks/useDarkMode";
import SunSvg from "@/public/svg/SunSvg";

export default function ToggleDark() {
    const [colorMode, setColorMode] = useDarkMode();
    return (
        <button
            onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
            className="hover:text-lightGreen dark:text-headerDark dark:hover:text-lightGreen w-10 flex items-center justify-center rounded-full p-1"
        >
            {colorMode === "light" ? <MoonSvg /> : <SunSvg />}
        </button>
    );
}
