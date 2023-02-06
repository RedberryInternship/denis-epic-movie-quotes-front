/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-btn-background': '#1E1D2A',
        'brand-lightbackground': '#181724',
        'brand-article': '#11101A',
        'brand-background': '#0D0B14',
        'brand-khaki': '#DDCCAA',
        'brand-lightgray': '#D9D9D9',
        'brand-red': '#E31221',
        'brand-crimson': '#DC3545',
        'brand-green': '#198754',
        'brand-subtitle': '#6C757D',
        'brand-pale': '#CED4DA',
        'brand-blue': '#0D6EFD',
        'brand-lightmodal': '#24222F',
        'brand-modal': '#222030',
        'brand-darkblue': '#1C1A26',
        'brand-divide': '#EFEFEF4D',
        'brand-yellow': '#EC9524',
        'brand-purple': '#462676',
      },
      spacing: {
        4.5: '1.125rem',
        5.5: '1.375rem',
        6.5: '1.625rem',
        7.5: '1.875rem',
        8.5: '2.125rem',
        9.5: '2.375rem',
        10.5: '2.625rem',
        11.5: '2.875rem',
        12.5: '3.125rem',
        13: '3.25rem',
        15: '3.75rem',
        17.5: '4.375rem',
        18: '4.5rem',
        19: '4.75rem',
        20.5: '5.125rem',
        21: '5.25rem',
        21.5: '5.375rem',
        22: '5.5rem',
        22.5: '5.625rem',
        30: '7.5rem',
      },
      fontSize: {
        '2xs': '0.5rem',
        '3.5xl': '2rem',
      },
      backgroundImage: {
        'gradient-shadow':
          'linear-gradient(90deg, #000000c7 0%, rgb(0 0 0 / 33%) 35%, rgb(0 0 0 / 17%) 70%);',
        'gradient-modal':
          'linear-gradient(187.16deg, #181623 0.07%, #191725 51.65%, #0D0B14 98.75%);',
        'gradient-nested-modal':
          'linear-gradient(90deg, rgba(27,25,38,1) 0%, rgba(39,37,50,1) 100%);',
        'gradient-profile':
          'linear-gradient(90deg, rgba(24,23,36,1) 0%, rgba(16,14,24,1) 100%);',
      },
      borderWidth: {
        1.5: '1.5px',
      },
      borderRadius: {
        '1.5lg': '0.625rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
};
