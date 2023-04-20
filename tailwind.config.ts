
import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/**/*.{html,js,svelte}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFF8F0',
        interest: '#FFECD6',
        'dark-green': '#406e72',
        accent: '#ffbf80',
        divider: '#9DD9D2'
      },
    },
  },
  plugins: [],
} satisfies Config
