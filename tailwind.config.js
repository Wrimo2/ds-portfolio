/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['ui-sans-serif','system-ui','Segoe UI','Roboto','Ubuntu','Cantarell','Noto Sans','Helvetica Neue','Arial','Apple Color Emoji','Segoe UI Emoji']
      },
      boxShadow: {
        'soft': '0 10px 30px rgba(0,0,0,0.08)'
      },
      keyframes: {
        floaty: { '0%,100%': { transform:'translateY(0px)' }, '50%': { transform:'translateY(-8px)' } },
        shimmer: {'0%': {backgroundPosition: '0% 50%'}, '100%': {backgroundPosition:'100% 50%'}}
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        shimmer: 'shimmer 8s linear infinite'
      },
      backgroundImage: {
        'abstract-gradient': 'linear-gradient(120deg, rgba(16,185,129,0.15), rgba(59,130,246,0.15), rgba(236,72,153,0.15))'
      }
    },
  },
  plugins: [],
}
