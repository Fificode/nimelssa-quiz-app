/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
 "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    fontFamily: {
      sans: ['Inter var', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif'],
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'light-grey': '#717171',
      'light-purple-bg': '#cd9cf2',
      'white-bg' : '#f6f3ff ',
     
    },
    extend: {
      animation: {
        'breathe': 'breathe 2s ease-in-out infinite',
        
      },
      keyframes: {
        breathe: {
          '0%': {transform: 'scale(1)'},
          '50%': {transform: 'scale(1.1)'},
          '100%': {transform: 'scale(1)'},
        },
       
      }
    },
  },
  plugins: [],
}

