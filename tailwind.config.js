/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '100': '#000000'
        }
      },
      backgroundImage: {
        'hero-pattern': "url('./assets/desktop_bg.jpg')"
      },
      boxShadow: {
        'low-shadow': '2px 4px 8px #4299e1'
      }
    },
  },
  plugins: [],
}

