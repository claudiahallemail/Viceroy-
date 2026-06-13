import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0A1628',
        gold: '#C9A96E',
        cream: '#F8F5F0',
        charcoal: '#2C2C2C',
        'gold-light': '#E8D4A8',
        'navy-light': '#1A2B4A',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        luxury: '0.25em',
        wide: '0.15em',
      },
    },
  },
  plugins: [],
}
export default config
