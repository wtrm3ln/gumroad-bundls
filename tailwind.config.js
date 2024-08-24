/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#FF90E8',
        bggray: '#242423',
        'custom-gold': '#FFC900',
        'custom-green': '#23A094',
        'custom-purple': '#90A8ED',
        'custom-yellow': '#F1F333',
        'custom-orange': '#FF7051',
        'custom-grape': '#B23386',
        'custom-brown': '#98282A',
        'custom-red': '#DC341E',
      },
    },
  },
  plugins: [],
};