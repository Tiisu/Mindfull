/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
            "./images",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primaryColor: '#2E584E',
        secondaryColor: '#C3F499',
        primaryLightColor: '#3A685D',

      },
    },
  },
  plugins: [],
}

