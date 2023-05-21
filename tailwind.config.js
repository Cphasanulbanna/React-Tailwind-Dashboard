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
            1280: { max: "1280px" },
            1180: { max: "1180px" },
            1080: { max: "1080px" },
            sm1: { max: "980px" },
            sm2: { max: "640px" },
            sm3: { max: "480px" },
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
                green: "#21702f",
                red: "#d9340b",
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
