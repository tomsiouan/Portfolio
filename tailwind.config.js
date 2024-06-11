/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/components/**/*.{js,vue,ts}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
    "./src/plugins/**/*.{js,ts}",
    "./src/app.vue",
    "./src/error.vue",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#ff5454',
        secondary: '#333333',
        tertiary: '#fafafa',

        gray: {
          80: '#333333',
          50: '#7e7e7e',
          20: '#c7c7c7',
          5: '#ececec',
        },

        black: '#000000',
        white: '#ffffff',

        dark: '#1a202c',
        'dark-primary': '#ff4545',
        'dark-secondary': '#222222',

      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      keyframes: {
        slideInFromRight: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        kfOpacity: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        blurSlideFromLeft: {
          '0%': { transform: 'translateX(-50%)', opacity: '0', filter: 'blur(5px)' },
          '100%': { transform: 'translateX(0)', opacity: '1', filter: 'blur(0px)' },
        },
        blurSlideFromRight: {
          '0%': { transform: 'translateX(50%)', opacity: '0', filter: 'blur(5px)' },
          '100%': { transform: 'translateX(0)', opacity: '1', filter: 'blur(0px)' },
        },
        blurSlideToLeft: {
          '0%': { transform: 'translateX(0%)', opacity: '1', filter: 'blur(0px)' },
          '100%': { transform: 'translateX(-50%)', opacity: '0', filter: 'blur(5px)' },
        },
        disappear: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        'slide-in-right': 'slideInFromRight 1s ease-in-out forwards',
        'increaseOpacity': 'kfOpacity 2.5s ease-in-out forwards',
        'increaseOpacityFast': 'kfOpacity 1.5s ease-out forwards',
        'blurSlideFromLeft': 'blurSlideFromLeft 0.7s ease-out forwards',
        'blurSlideFromRight': 'blurSlideFromRight 0.7s ease-out forwards',
        'blurSlideToLeft': 'blurSlideToLeft 0.7s ease-out forwards',
        'disappear': 'disappear 0.7s ease-out forwards',
      },
    },
    screens: {

      'xs': '300px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      sans: ['sans-serif'],
      serif: ['serif'],
      movementThin: ['Movement-thin', 'serif'],
      movementBlack: ['Movement-black', 'serif'],
      kineticLight: ['Kinetic-light', 'serif'],
      kineticRegular: ['Kinetic-regular', 'sans'],
    },
  },
  plugins: [],
};
