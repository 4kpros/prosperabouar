/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['firebasestorage.googleapis.com'],
    formats: ['image/avif', 'image/webp'],
  },
  i18n: {
    // providing the locales supported by your application
   locales: ["fr-FR"],
   //  default locale used when the non-locale paths are visited
   defaultLocale: "fr-FR",
  },
}

module.exports = nextConfig
