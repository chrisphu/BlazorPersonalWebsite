/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{razor,html,cshtml}"],
  safelist: [
    {
      pattern: /(bg)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(200)/,
    },
    {
      pattern: /(text)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(500)/,
    },
    {
      pattern: /(my)-(0|0.5|1|1.5|2|2.5|3|3.5|4|5|6|7|8|9|10)/,
    }
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