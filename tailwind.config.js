/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // include all your JS/TS/React files
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1a73e8',
        'my-accent': {
          DEFAULT: '#ff5722',
          light: '#ff8a50',
          dark: '#c41c00',
        },
      },
    },
  },
  plugins: [],
};
