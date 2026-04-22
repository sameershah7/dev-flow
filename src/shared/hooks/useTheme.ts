import { useState, useEffect } from "react";

export function useTheme() {
    const [theme, setTheme] = useState<"light" | "dark">(() => {
        return (localStorage.getItem("theme") as "light" | "dark") || "light";
    });

    useEffect(() => {
        const root = document.documentElement;
        if (theme === "light") {
            root.setAttribute("data-theme", "light");
        }
        else {
            root.setAttribute("data-theme", "dark")
        }
        localStorage.setItem("theme", theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(prev => prev === "light" ? "dark" : "light")
    }

    return { theme, toggleTheme }
}
