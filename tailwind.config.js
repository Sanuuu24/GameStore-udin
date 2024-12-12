module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'game-dark': '#121212',
        'game-primary': '#3B82F6',
        'game-secondary': '#10B981'
      },
      fontFamily: {
        'game-sans': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}