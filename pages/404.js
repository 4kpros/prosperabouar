import Link from 'next/link'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'

import Layout from '../components/Layout'

export default function Custom404() {
    const { t } = useTranslation('404')

    const pageTile = t('pageTile')
    const pageDescription = t('pageDescription')
  
    const error = t('error')
    const errorMessage = t('errorMessage')
    const homePage = t('homePage')

    return (
        <Layout title={pageTile} description={pageDescription}>
            <div className="w-full text-my-text-color">
                <section className="w-full">
                    <div className="w-full max-w-screen-xl mx-auto px-4">
                        <div className="w-full min-h-[70vh] flex items-center justify-center">
                            <div className="w-auto flex flex-col items-center m-auto">
                                <div className="w-128 h-128">
                                    <Image width={128} height={128} objectFit="scale-down" placeholder="blur" priority blurDataURL="/images/svg/alerts/warn.webp" src="/images/svg/alerts/warn.webp" alt=""/>
                                </div>
                                <h3 className="text-center font-semibold">
                                    {error}
                                </h3>
                                <p className="text-center text-my-text-color opacity-50 mt-4">
                                    {errorMessage}
                                </p>
                                <div className="mt-12">
                                    <Link href="/">
                                        <button className="text-my-text-button-color font-bold bg-my-main-color rounded-lg px-6 py-2 text-center focus:outline-none">
                                            {homePage}
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
  }