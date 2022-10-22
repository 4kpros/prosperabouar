import Image from 'next/image'

import Layout from '../components/Layout'

const title = 'Erreur 404 !'
const subtitle = "Cette page semble ne pas exister !"

export default function Custom404() {
    return (
        <Layout title={title} description={subtitle}>
            <div className="w-full text-white">
                <section className="w-full">
                    <div className="w-full max-w-screen-xl mx-auto px-4">
                        <div className="w-full min-h-[70vh] flex items-center justify-center">
                            <div className="w-auto flex flex-col items-center m-auto bg-gradient-to-tl from-[#0c1214] to-transparent p-12">
                                <div className="w-128 h-128">
                                    <Image width={128} height={128} objectFit="scale-down" placeholder="blur" priority blurDataURL="/images/svg/alerts/warn.webp" src="/images/svg/alerts/warn.webp" alt=""/>
                                </div>
                                <h3 className="text-center font-semibold">
                                    ERREUR 404 !
                                </h3>
                                <p className="text-center text-gray-400 mt-4">
                                    Cette page semble ne pas exister. Veillez retourner à la page d accueil.
                                </p>
                                <div className="mt-12">
                                    <a href="/">
                                        <button className="text-black font-bold bg-my-orage-color px-6 py-2 text-center focus:outline-none">
                                            Page d&apos;accueil
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
  }