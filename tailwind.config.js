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
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [],
};
