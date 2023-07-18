/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        default: '#3A3D60',
        primary: '#40CCFF',
        secondary: '#FFCF00',
      },
      boxShadow: {
        'gradient': '0 0 0 3px #FFCF00, 0 0 0 5px #40CCFF)',
      },
      backgroundImage: {
        'gradient-linear': 'linear-gradient(89deg, #40CCFF 0%, #FFCF00 100%)',
      },
    },
  },
  plugins: [],
}
