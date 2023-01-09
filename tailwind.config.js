import defaultTheme from "tailwindcss/defaultTheme"

export default {
    theme: {
        screens: {
            xxs: "385px",
            xs: "400px",
            ...defaultTheme.screens,
        },
        extend: {
            fontFamily: {
                myriad: ["Myriad Pro", "sans-serif"],
                myriadLight: ["Myriad Pro Light", "sans-serif"],
            },
            fontSize: {
                title: ["3.5rem", { lineHeight: "3.75rem" }],
                titleSmall: ["3rem", { lineHeight: "3.25rem" }],
                heading: ["2.352rem", { lineHeight: "2.75rem" }],
                subtitle: ["1.53rem", { lineHeight: "2rem" }],
                text: ["1.236rem", { lineHeight: "1.5rem" }],
                annotation: ["0.942rem", { lineHeight: "1rem" }],
            },
            boxShadow: {
                "inner-lg": "inset 8px 8px 5px #CCCACA",
            },
        },
    },
    plugins: [require("daisyui"), require("@formkit/themes/tailwindcss")],
    content: ["./formkit.config.ts"],
    daisyui: {
        styled: true,
        themes: [
            {
                light: {
                    primary: "#BBD800",
                    secondary: "#1A2933",
                    "secondary-focus": "#1E2F3C",
                    accent: "#ebf0c5",
                    neutral: "#777777",
                    "base-100": "#ffffff",
                },
            },
        ],
        logs: false,
    },
}
