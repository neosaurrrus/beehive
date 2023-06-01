/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        sectionBackground: {
          DEFAULT: '#275E7A',
        },
        appBackground: {
          DEFAULT: '#194B53',
        },
        accent: {
          DEFAULT: '#71F9D3',
        },
        lightText: {
          DEFAULT: '#F2F2F2',
        },
        darkText: {
          DEFAULT: '#0F0F0F',
        },
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
