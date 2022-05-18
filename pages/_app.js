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
      </Head>
      <DefaultSeo
          titleTemplate="%s - Abouar Prosper"
          openGraph={{
              type: 'website',
              locale: 'fr_CM',
              url,
              description: 'Le site web d\'Abouar Prosper, developpeur web et mobile',
              site_name: 'Abouar Prosper | prosperabouar.com | prosperabouar',
              images: [],
          }}
          canonical={url}
      />
      <Navbar />
      {/* <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
        > */}
          <Component {...pageProps} canonical={url} key={url} />
      {/* </AnimatePresence> */}
      <Footer />
    </>
  )
}

export default MyApp
