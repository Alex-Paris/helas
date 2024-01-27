import { withTV } from 'tailwind-variants/transformer'
import type { Config } from 'tailwindcss'

const config: Config = withTV({
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],

  theme: {
    extend: {
      colors: {
        'accent-blue': '#00B9F2',
        'accent-green': '#009649',

        'field-border': '#BEBEBE',
        'text-on-image': '#FFFFFF',
        'text-on-image-faint': '#FFFFFFB2',

        'bg-50%': '#FFFFFF80',
        'translucent-bg': '#FFFFFFCC',
        background: '#F5F5F5',

        stroke: '#0000001A',

        'pure-black': '#000000',

        gray: '#838393',

        white: '#FFFFFF',
        black: '#555563',
      },

      boxShadow: {
        'card-shadow-light': '0px 24px 32px -12px rgba(0, 0, 0, 0.25)',
        'card-shadow-lighter': '0px 24px 32px -12px rgba(0, 0, 0, 0.10)',
      },

      fontFamily: {
        sans: ['var(--font-roboto-flex)'],
      },
    },
  },

  plugins: [],
})

export default config
