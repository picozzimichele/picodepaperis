import useLocalStorage from "./useLocalStorage";
import { useEffect } from "react";

export default function useDarkMode() {
    const [colorMode, setColorMode] = useLocalStorage("color-mode", "dark");

    useEffect(() => {
        const className = "dark";
        const bodyClasses = window.document.body.classList;

        colorMode === "dark" ? bodyClasses.add(className) : bodyClasses.remove(className);
    }, [colorMode]);

    return [colorMode, setColorMode];
}
