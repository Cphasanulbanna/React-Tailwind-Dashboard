/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontSize: {
            sm: "14px",
            base: "16px",
            lg: "18px",
            xl: "20px",
            "2xl": "35px",
        },
        screens: {
            sm: { max: "360px" },
            sm2: { max: "480px" },
            md: { max: "540px" },
            md2: { max: "640px" },
            md3: { max: "680px" },
            md4: { max: "768px" },
            lg: { max: "980px" },
            lg2: { max: "1080px" },
            xl: { max: "1280px" },
            xl2: { max: "1400px" },
            xl3: { max: "1480px" },
        },
        spacing: generateSpacing(1, 500),
        extend: {
            colors: {
                black: "#000000",
                grey: "#CED4D9",
                white: "#FFFFFF",
                darkblue: "#212B33",
                liteorange: "#F6F5F4",
                ash: "#D9D9D9",
                orange: "#FF7B00",
            },
        },
    },
    plugins: [],
};

function generateSpacing(start, end) {
    const spacing = {};

    for (let i = start; i <= end; i++) {
        spacing[i] = `${i}px`;
    }

    return spacing;
}
