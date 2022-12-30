/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-background': '#0D0B14',
        'brand-khaki': '#DDCCAA',
        'brand-gray': '#D9D9D9',
        'brand-red': '#E31221',
      },
      spacing: {
        6.5: '1.625rem',
        8.5: '2.125rem',
        9.5: '2.375rem',
        15: '3.75rem',
        17.5: '4.375rem',
      },
      fontSize: {
        '2xs': '0.5rem',
      },
      backgroundImage: {
        'gradient-shadow':
          'linear-gradient(90deg, #000000c7 0%, rgb(0 0 0 / 33%) 35%, rgb(0 0 0 / 17%) 70%);',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
