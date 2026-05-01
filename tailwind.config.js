/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: '#00FFFF',
          purple: '#9B59B6',
        },
        dark: {
          bg: '#0A0A0A',
        }
      },
      fontFamily: {
        orbitron: ['Orbitron', 'monospace'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'glow-cyan': 'glow-cyan 2s ease-in-out infinite alternate',
        'glow-purple': 'glow-purple 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'glow-cyan': {
          '0%': { textShadow: '0 0 10px #00FFFF, 0 0 20px #00FFFF, 0 0 30px #00FFFF' },
          '100%': { textShadow: '0 0 20px #00FFFF, 0 0 30px #00FFFF, 0 0 40px #00FFFF' },
        },
        'glow-purple': {
          '0%': { textShadow: '0 0 10px #9B59B6, 0 0 20px #9B59B6, 0 0 30px #9B59B6' },
          '100%': { textShadow: '0 0 20px #9B59B6, 0 0 30px #9B59B6, 0 0 40px #9B59B6' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
