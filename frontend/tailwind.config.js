const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                    sans: ["Nunito", ...defaultTheme.fontFamily.sans],
            },        
        },
    },
    plugins: [],
}