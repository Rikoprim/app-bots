/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#4F46E5',
          200: '#475569',
        },
        gray: {
          100: '#CBD5E1',
          200: '#E2E8F0',
          300: '#EEF2FF',
        },
        black: {
          100: '#1E293B',
        },
      },
    },
  },
  plugins: [],
}
