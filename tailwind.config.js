/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                light: {
                    ...require("daisyui/src/colors/themes")[
                        "[data-theme=light]"
                    ],
                    success: "#63b405",
                    "success-content": "white",
                    neutral: "black",
                    "--rounded-box": "0rem",
                    "--rounded-btn": "0rem",
                },
            },
        ],
    },
};
