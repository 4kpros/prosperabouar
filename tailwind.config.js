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
        'my-footer-color': '#DFC1941A',
        'my-orage-color': '#7fd2f5',
        'my-gray-color': '#8C8C8C',
      },
      fontFamily: {
        poppinsSans: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'default-background': "url('/public/img/bg.jpg')",
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/typography'),
  ],
}
