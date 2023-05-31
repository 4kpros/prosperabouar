module.exports = {
  corePlugins: {
    preflight: true,
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'my-text-color': '#000',
        'my-text-button-color': '#fff',
      },
      fontFamily: {
        poppinsSans: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'bodybackground': "url('/images/backgrounds/body-background.webp')",
        'prosperabouar': "url('/images/profile/prosperabouar.webp')",
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/typography'),
  ],
}
