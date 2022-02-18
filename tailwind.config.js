module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      white: '#ffffff',
      black: '#000000',
      red: '#dc3545',
      blue: '#0d6efd',
      yellow: '#ffc107',
      green: '#198754',
      'gray-dark': '#273444',
      gray: '#8492a6',
      'gray-light': '#d3dce6',
      purple: '#fd97f7',
      'purple-dark': '#aa58cc',
    },
    extend: {},
  },
  plugins: [],
}
