const production = !process.env.ROLLUP_WATCH;

module.exports = {
  purge: {
    content: [
      "./src/**/*.svelte",
    ],
    enabled: production // disable purge in dev
  },
  darkMode: "media", // false or 'media' or 'class':: https://tailwindcss.com/docs/dark-mode
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
     flex: true,
     gridColumn: true
  }
}