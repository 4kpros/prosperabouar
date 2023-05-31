import Head from 'next/head'
import { DefaultSeo } from 'next-seo'

import { AnimatePresence } from 'framer-motion'

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
          titleTemplate="Abouar Prosper"
          openGraph={{
              type: 'website',
              locale: 'fr_FR',
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
              href: '/apple-touch-icon.png',
              sizes: '76x76'
            },
            {
              rel: 'manifest',
              href: '/manifest.json'
            }
          ]}
          canonical={url}
      />
      <div className='w-full min-h-screen flex flex-col justify-between text-lg lg:text-lg'>
        <AnimatePresence
          transition={{
              duration: 0.25,
              delay: 0.2,
          }}
          exitBeforeEnter
          initial={true}
          >
          <Component {...pageProps} canonical={url} key={url} />
        </AnimatePresence>
      </div>
    </>
  )
}

export default MyApp
