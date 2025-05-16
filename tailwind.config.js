/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'mela-pink': {
          50: '#FFF0F5',
          100: '#FFE0EB', 
          200: '#FFC1D7',
          300: '#FFA2C3',
          400: '#FF83AF',
          500: '#FF6B95', // primary
          600: '#FF4D7B',
          700: '#FF2E61',
          800: '#FF1047',
          900: '#E0002D',
        },
        'mela-brown': {
          500: '#4A0404',
          600: '#3A0303',
          700: '#2A0202',
          800: '#1A0101',
          900: '#0A0000',
        },
      },
      fontFamily: {
        bangla: ['Hind Siliguri', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s infinite ease-in-out',
      },
      keyframes: {
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
      },
    },
  },
  plugins: [],
};