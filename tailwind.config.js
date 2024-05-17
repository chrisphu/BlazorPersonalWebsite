/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
    content: ["./**/*.{razor,html,cshtml}"],
    theme: {
        extend: {
            keyframes: {
                'sliding-background': {
                    '0%': { backgroundPosition: '0 0' },
                    '100%': { backgroundPosition: '-4rem 4rem' },
                },
            },
            animation: {
                'sliding-background': 'sliding-background 10s linear infinite',
            },
        },
    },
    safelist: [
        {
            // https://tailwindcss.com/docs/content-configuration#safelisting-classes
            pattern: /(bg|text)-(red|green|blue|yellow|slate|indigo)-(100|200|300|400|500|600|700|800|900)/,
            variants: ['hover', 'active'],
        },
    ],
}