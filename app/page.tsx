"use client";
import ToggleDark from "@/components/ToggleDark";
import useDarkMode from "@/hooks/useDarkMode";

export default function Home() {
    return (
        <div>
            Cheers
            <ToggleDark />
        </div>
    );
}
