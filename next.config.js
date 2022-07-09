/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_MAILJS_SERVICE_ID: "service_iarvjl4",
    NEXT_PUBLIC_MAILJS_TEMPLATE_ID: "template_1r27jdp",
    NEXT_PUBLIC_MAILJS_PUBLIC_KEY: "rWa0uyWeirk140L3d"
  },
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
