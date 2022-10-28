/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  i18n: {
    // providing the locales supported by your application
   locales: ["fr-FR"],
   //  default locale used when the non-locale paths are visited
   defaultLocale: "fr-FR",
  },
}

const nextTranslate = require('next-translate')

module.exports = nextTranslate()

