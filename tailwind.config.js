module.exports = {
  corePlugins: {
    preflight: true,
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'my-footer-color': '#DFC1941A',
        'my-orage-color': '#DFC194',
        'my-gray-color': '#8C8C8C',
      },
      fontFamily: {
        poppinsSans: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'default-background': "url('/public/img/blog-background.jpg')",
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/typography'),
  ],
}
