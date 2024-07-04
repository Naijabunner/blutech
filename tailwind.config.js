/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit', // Just-In-Time mode for faster build times
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

