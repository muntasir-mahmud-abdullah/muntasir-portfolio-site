/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A', // Void Black
        surface: 'rgba(255, 255, 255, 0.03)', // Glass Black
        primary: '#00F0FF', // Electric Cyan
        secondary: '#7000FF', // Neon Violet
        accent: '#00FF94', // Emerald
        'base-100': '#0A0A0A', // DaisyUI override
        'base-200': '#050511', // Deep Navy
        'base-300': '#151520',
        'base-content': '#E0E0E0',
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', 'sans-serif'],
        heading: ['var(--font-outfit)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'noise': "url('/images/noise.png')", // We'll need to create/add this later or use CSS noise
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['dark', 'light'],
    darkTheme: 'dark',
  },
}
