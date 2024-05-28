/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{razor,html,cshtml}"],
  safelist: [
    {
      pattern: /(bg)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(200)/,
    },{
      pattern: /(text)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(500)/,
    },
  ],
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