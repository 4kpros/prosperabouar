module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
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
        'my-logo': "url('/public/img/logo192.png')",
      },
    },
  },
  plugins: [],
}
