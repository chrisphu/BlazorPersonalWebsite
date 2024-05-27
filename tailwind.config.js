/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{razor,html,cshtml}"],
  theme: {
    extend: {
      keyframes: {
        'sliding-background': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '-3rem 3rem' },
        },
      },
      animation: {
        'sliding-background': 'sliding-background 10s linear infinite',
      },
    },
  },
}