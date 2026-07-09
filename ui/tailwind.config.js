/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'dencent-dark': '#0f172a',
        'dencent-darker': '#0a0e27',
        'dencent-purple': '#a78bfa',
        'dencent-blue': '#3b82f6',
        'dencent-cyan': '#06b6d4',
        'dencent-accent': '#ec4899',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
