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
              images: []
          }}
          twitter={{
            handle: '@4kprosZ',
            cardType: 'summary_large_image'
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
