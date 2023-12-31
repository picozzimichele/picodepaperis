/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                lightGreen: "#38a3a5",
                headerDark: "#CCD6F6",
                textDark: "#8892AF",
                bgHover: "#112240",
                bgDark: "#0b192e",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
        fontFamily: {
            inter: ["sans-serif", "Inter"],
            rigidSquare: ["RigidSquare"],
            figtree: ["var(--font-figtree)"],
        },
    },
    plugins: [require("tailwind-scrollbar-hide")],
};
