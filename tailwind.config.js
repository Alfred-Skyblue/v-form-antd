function Pixels(number = 1000) {
  return { ...Array.from(Array(number), (v, index) => `${index}px`) }
}
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './packages/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      spacing: {
        ...Pixels()
      }
    }
  },
  plugins: []
}
