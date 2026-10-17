/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        green: {
          DEFAULT: '#183F2B',
          50: '#f3f7f4',
          100: '#e2ece6',
          200: '#c5d8cc',
          300: '#9ab8a4',
          400: '#5e8a6c',
          500: '#2f6142',
          600: '#1f4d33',
          700: '#183F2B',
          800: '#143524',
          900: '#0f2a1c',
        },
        lime: {
          DEFAULT: '#D5EB83',
          50: '#fbfdec',
          100: '#f3f9c8',
          200: '#e6f196',
          300: '#D5EB83',
          400: '#c2dd60',
          500: '#a8c93f',
          600: '#8ba82c',
        },
        mist: {
          DEFAULT: '#F1F5F0',
          100: '#F1F5F0',
          200: '#e7eee4',
          300: '#d9e1d5',
        },
        ink: {
          DEFAULT: '#35443B',
          light: '#5a6a5f',
          dark: '#233028',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1120px',
      },
    },
  },
  plugins: [],
};
