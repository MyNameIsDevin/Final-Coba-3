module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '375px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      colors: {
        'UL1': '#2A4FD2',
        'UL2': '#060D4E',
        'Form': '#EFF2F9',
      },
    },
  },
  plugins: [],
}