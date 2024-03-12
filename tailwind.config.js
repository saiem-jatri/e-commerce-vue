/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'primary',
        primaryText: '#151414',
        secondaryBlack:'#676769',
        corporateBg: '#F7F7F7',
        corporateBorder: '#DBDBDB',
        corporateAsh: '#8D8D8F',
        corporateSuccess: '#48A43F',
        corporateSecondaryBlack: '#4D4D4F',
        corporateError: '#E0293B',
        corporateSecondaryBlue: '#1E88E5',
        secondaryCorporate: '#FDF0F1',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

