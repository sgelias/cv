/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    { pattern: /^bg-/, variants: ['dark', 'hover', 'dark:hover'] },
    { pattern: /^text-/, variants: ['dark'] },
    { pattern: /^border-/, variants: ['dark'] },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
