function Pixels(number = 1000) {
  return { ...Array.from(Array(number), (v, index) => `${index}px`) }
}
module.exports = {
  prefix: 'v-',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './packages/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      spacing: {
        ...Pixels()
      },
      colors: {
        primary: 'var(--primary-color)',
        shadow: 'var(--shadow-color)'
      },
      backgroundColor: {
        body: 'var(--body-bg)',
        layout: 'var(--layout-bg-color)'
      }
    }
  },
  corePlugins: {
    preflight: false
  },
  plugins: []
}
