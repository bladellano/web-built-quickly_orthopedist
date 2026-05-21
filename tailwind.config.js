/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        ink: '#0b1a2b',
        slate: '#1b2e3c',
        mist: '#e7eef3',
        tide: '#5aa1b3',
        bone: '#f5f1ea',
        moss: '#2f6c63',
      },
      fontFamily: {
        display: ['"DM Serif Display"', 'serif'],
        sans: ['"Space Grotesk"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(5, 17, 29, 0.18)',
      },
    },
  },
  plugins: [],
}
