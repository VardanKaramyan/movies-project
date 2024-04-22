import type { Config } from 'tailwindcss'

export default {
  content: ['./src/renderer/index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'selector',
  theme: {
    container: {
      center: true
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem'
      }
    }
  },
  plugins: []
} satisfies Config
