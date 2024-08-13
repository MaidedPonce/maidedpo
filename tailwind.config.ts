/* eslint-disable quotes */
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
        'gradient-radial':
          'linear-gradient(16deg, rgba(30,64,175,1) 0%, rgba(107,33,168,1) 35%, rgba(202,138,4,1) 100%)',
        'fairy-img': "url('/images/background.JPEG')",
        toolsbg: "url('/images/bg_tools.JPEG')",
        programming: "url('/images/bg_programming.JPEG')",
        sorceress: "url('/images/sorceress.JPEG')",
        reading: "url('/images/reading.JPEG')",
        email: "url('/images/email.JPEG')",
        dev: "url('/images/dev.PNG')",
        tools: "url('/images/tools.PNG')",
      },
      colors: {
        brand: {
          blue: '#1e40af',
          yellow: '#ca8a04',
          purple: '#6b21a8',
          gray: '#4b5563',
          cd: '#2dd4bf',
          int: '#3b0764',
          wby: '#db2777',
          uni: '#9d2342',
          plat: '#0ae98a',
          linkedin: '#0a63bc',
        },
      },
    },
  },
  plugins: [],
}
export default config
