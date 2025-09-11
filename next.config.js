/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: "export",
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: true,
  },
  i18n: {
    // providing the locales supported by your application
    locales: ["en", "fr"],
    //  default locale used when the non-locale paths are visited
    defaultLocale: "en",
  },
};

const nextTranslate = require("next-translate");

module.exports = nextTranslate(nextConfig);
