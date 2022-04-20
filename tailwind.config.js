module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lansdowne': 'Lansdowne',
        'mermaid': 'Mermaid',
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ]
}