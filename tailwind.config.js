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
    },
  },
  plugins: [],
  darkMode: 'class',
}
