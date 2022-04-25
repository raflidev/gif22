module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lansdowne': 'Lansdowne',
        'mermaid': 'Mermaid',
        'fahkwang': 'Fahkwang',
        'axr': 'AXR',
      },
      screens: {
        'laptop-1120': '1120px',
        'laptop-1344': '1344px',
        'laptop-1366': '1366px',
        'laptop-1440': '1440px',
        'laptop-1536': '1536px',
        'laptop-1600': '1600px',
      },
    },
  },
  plugins: []
  // plugins: [
  //   // require('tailwindcss-textshadow'),
  // ]
}