/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_MAILJS_SERVICE_ID: "service_iarvjl4",
    NEXT_PUBLIC_MAILJS_TEMPLATE_ID: "template_1r27jdp",
    NEXT_PUBLIC_MAILJS_PUBLIC_KEY: "rWa0uyWeirk140L3d",

    NEXT_PUBLIC_FIRESTORE_API_KEY: "AIzaSyDmjdOT1GbF6Ri-eNXRYMxwbJWJG3qNS0s",
    NEXT_PUBLIC_FIRESTORE_AUTH_DOMAIN: "prosperabouar-b9a50.firebaseapp.com",
    NEXT_PUBLIC_FIRESTORE_PROJECT_ID: "prosperabouar-b9a50",
    NEXT_PUBLIC_FIRESTORE_STORAGE_BUCKET: "prosperabouar-b9a50.appspot.com",
    NEXT_PUBLIC_FIRESTORE_MESSAGING_SENDER_ID: "316363026924",
    NEXT_PUBLIC_FIRESTORE_APP_ID: "1:316363026924:web:2955ca34c00faf691310c9",
    NEXT_PUBLIC_FIRESTORE_MEASUREMENT_ID: "G-BG8REL81CZ"
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
