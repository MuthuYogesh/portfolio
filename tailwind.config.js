/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", // all source files
    ],
    theme: {
        extend: {
            colors: {
                // bgcolor: "#2F3542",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
