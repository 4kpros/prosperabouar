import Head from 'next/head'
import { DefaultSeo } from 'next-seo'

import { AnimatePresence } from 'framer-motion'

import Footer from '../components/Footer';
import Navbar from '../components/Nabar';

import '../styles/globals.css'

function MyApp({ Component, pageProps, router }) {
  const url = `https://prosperabouar.vercel.app/${router.route}`
  return (
    <>
      <Head>
          <link rel="icon" href="/favicon.ico" type="image/png" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="theme-color" content="#141516"/>
      </Head>
      <DefaultSeo
          titleTemplate="%s - Abouar Prosper"
          openGraph={{
              type: 'website',
              locale: 'fr_CM',
              url,
              description: 'Le site web d\'Abouar Prosper, developpeur web et mobile',
              site_name: 'prosperabouar.vercel.app',
              images: '/images/profile/prosperabouar.webp',
              imageWidth: 1818,
              imageHeight: 2518
          }}
          twitter={{
            handle: '@4kprosZ',
            cardType: 'summary_large_image'
          }}
          robotsProps={{
            nosnippet: true,
            notranslate: true,
            noimageindex: true,
            noarchive: true,
            maxSnippet: -1,
            maxImagePreview: 'none',
            maxVideoPreview: -1,
          }}
          additionalLinkTags={[
            {
              rel: 'icon',
              href: '/favicon.ico',
            },
            {
              rel: 'apple-touch-icon',
              href: '/favicon.ico',
              sizes: '76x76'
            },
            {
              rel: 'manifest',
              href: '/manifest.json'
            },
            {
              rel: 'preload',
              href: 'https://www.test.ie/font/sample-font.woof2',
              as: 'font',
              type: 'font/woff2',
              crossOrigin: 'anonymous'
            }
          ]}
          canonical={url}
      />
      <Navbar />
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} canonical={url} key={url} />
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default MyApp
