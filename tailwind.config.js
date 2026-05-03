/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary':   '#0d1117',
        'bg-surface':   '#161b22',
        'bg-elevated':  '#1c2230',
        'accent':       '#e85d4a',
        'accent-dark':  '#c04a3a',
        'accent-light': '#f07060',
        'text-primary':   '#ffffff',
        'text-secondary': '#c9d1d9',
        'text-muted':     '#8b949e',
        'border-color':   '#30363d',
      },
      fontFamily: {
        sans:    ['Inter', 'Poppins', 'ui-sans-serif', 'system-ui'],
        heading: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        'glow-accent': '0 0 40px 10px rgba(232, 93, 74, 0.3)',
        'glow-sm':     '0 0 20px 5px rgba(232, 93, 74, 0.2)',
        'card':        '0 4px 24px rgba(0, 0, 0, 0.4)',
        'card-hover':  '0 8px 40px rgba(0, 0, 0, 0.6)',
      },
      animation: {
        'ticker':     'ticker 30s linear infinite',
        'fade-up':    'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        ticker: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      borderRadius: {
        'xl2': '1.25rem',
      },
    },
  },
  plugins: [],
}

