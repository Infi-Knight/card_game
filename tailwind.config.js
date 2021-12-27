module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'courier-prime': ["'Courier Prime'", 'monospace'],
        'alfa-slab-one': ["'Alfa Slab One'", 'cursive'],
      },
      colors: {
        'light-yellow': '#FFF48C',
        'dark-yellow': '#EFCE4B',
        'bright-red': '#F64242',
      },
      screens: {
        xs: '414px',
      },
      boxShadow: {
        low: 'var(--shadow-elevation-low)',
        medium: 'var(--shadow-elevation-medium)',
        high: 'var(--shadow-elevation-high)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
