import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        red:   '#E4052E',
        black: '#0A0A0A',
        light: '#F4F4F4',
        mid:   '#6B6B6B',
      },
      fontFamily: {
        display: ['"Clash Display"', 'sans-serif'],
        sans:    ['var(--font-manrope)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 18s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
