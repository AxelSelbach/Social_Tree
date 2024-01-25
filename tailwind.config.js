/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#000000',
          200: '#36454F',
          300: '#FFF',
          400: '#bdc3c7',
          500: '#722F37',
        },
      },
      backgroundImage: {
        'hero-pattern': "url('./assets/desktop_bg.jpg')",
      },
      boxShadow: {
        'blue-shadow': '4px 8px #4299e1',
        'wine-shadow': '4px 8px #722F37',
      },
      fontFamily: {
        Nunito: ['Nunito', 'sans-serif'],
      },
      fontWeight: {
        Nunito: ['400', '500'],
      },
      keyframes: {
        topDown: {
          '0%': { opacity: 0, transform: 'translateY(-30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        bottomUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        leftRigth: {
          '0%': { opacity: 0, transform: 'translateX(30px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        rightLeft: {
          '0%': { opacity: 0, transform: 'translateX(-30px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      },
      animation: {
        topDown: 'topDown 700ms 200ms backwards',
        rightLeft: 'rightLeft 700ms 400ms backwards',
        leftRigth: 'leftRigth 700ms 600ms backwards',
        bottomUp: 'bottomUp 700ms 800ms backwards',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
