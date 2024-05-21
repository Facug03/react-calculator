/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        blink: {
          '0%, 50%': { visibility: 'hidden' },
          '50.01%, 100%': { visibility: 'visible' },
        },
      },
      animation: {
        blink: 'blink 1.4s step-start infinite',
      },
    },
  },
  plugins: [],
}
