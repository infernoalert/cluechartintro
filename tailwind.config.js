/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#138aec",
        "primary-dark": "#0b6bc2",
        "background-light": "#f6f7f8",
        "background-dark": "#0a1016",
        "surface-dark": "#15202b",
        "surface-darker": "#0f1720",
        "text-dark": "#0d151b",
      },
      fontFamily: {
        "display": ["Manrope", "sans-serif"]
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.5' },
        }
      }
    },
  },
  plugins: [],
}

