/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0b0f12',
        surface: '#11151a',
        muted: '#161b22',
        primary: {
          DEFAULT: '#22c55e',
          fg: '#052e16',
        },
      },
      boxShadow: {
        card: '0 4px 24px rgba(0,0,0,0.35)'
      },
      borderRadius: {
        xl: '14px'
      }
    },
  },
  plugins: [],
};