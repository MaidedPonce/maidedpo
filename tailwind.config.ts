import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'linear-gradient(16deg, rgba(30,64,175,1) 0%, rgba(107,33,168,1) 35%, rgba(202,138,4,1) 100%)',
      },
      colors: {
        brand: {
          blue:  '#1e40af',
          yellow: '#ca8a04',
          purple: '#6b21a8',
          gray: '#4b5563'
        }
      }
    },
  },
  plugins: [],
}
export default config
