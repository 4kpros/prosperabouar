import Link from 'next/link'
import Image from 'next/image'

import { LazyMotion, domAnimation, m } from 'framer-motion'

import Layout from '../components/Layout'

const title = 'Accueil'
const subtitle = "Bienvenue sur mon site web personnel. Vous découvrirez ici qui je suis, mes compétences et les projets sur lesquels j&apos;ai travaillé récemment. Si vous êtes intéressés par mes services, n'hésitez pas à me contacter. Merci pour votre temps de lecture et prenez soins de vous."

export default function Home({ router }) {

  return (
    <Layout title={title} description={subtitle}>
      <div className="w-full text-white">
        <section className="w-full flex flex-row">
          <div className="w-full max-w-screen-xl mx-auto px-4">
            <div className="flex flex-col items-center lg:flex-row lg:space-x-8 pt-12">
              <div className="bg-transparent w-3/4 lg:w-3/5 h-3/4">
                <LazyMotion features={domAnimation}>
                  <m.div
                    className="border border-my-orage-color"
                    whileHover={{scale:1.025}}
                  >
                    <Image className="w-full h-full object-contain bg-my-footer-color bg-top object-top" width={449} height={600} objectFit="cover" layout="responsive" decoding="async" quality="100" priority placeholder="blur" blurDataURL="/images/profile/prosperabouar_preload.webp" src="/images/profile/prosperabouar.webp" alt="Prosper Abouar"/>
                  </m.div>
                </LazyMotion>
              </div>
              <div className="w-full flex items-center mt-10 lg:mt-0">
                <div className="">
                  <h1 className="text-2xl md:text-3xl font-bold text-center lg:text-left">
                    Salut, Je suis <span className="font-extrabold text-my-orage-color text-3xl md:text-5xl ml-2">ABOUAR PROSPER</span>
                    <br/>Développeur .NET et Python
                  </h1>
                  <p className="text-xl mt-8 text-center lg:text-justify">
                    Adepte de l&apos;amélioration de l&apos;expérience utilisateur et des performances dans le domaine du développement d&apos;applications, ma passion pour ce secteur me pousse chaque jour à me surpasser.
                  </p>
                  <p className="text-xl mt-2 text-center lg:text-justify">
                    Je suis principalement développeur backend ayant de grosses connaissances en développement frontend.
                  </p>
                  <p className="text-xl mt-8 text-center lg:text-justify">
                    N&apos;hesitez pas de me contacter ci-dessous.
                  </p>
                  <p className="text-my-orage-color break-all text-xl mt-8 text-center lg:text-left">
                    <a href="mailto: prosper.abouar@gmail.com" className="">
                        prosper.abouar@gmail.com
                    </a>
                  </p>
                  <div className="flex justify-center lg:justify-start mt-8 space-x-8">
                    <a href="https://www.linkedin.com/in/prosper-abouar-408089134/" className="" target="_blank" rel="noreferrer">
                      <Image className="object-contain w-10" width={40} height={40} objectFit="contain" placeholder="blur" blurDataURL="/images/svg/socialmedia/bxl-linkedin-square.svg" src="/images/svg/socialmedia/bxl-linkedin-square.svg" alt="LinkedIn"/>
                    </a>
                    <a href="https://github.com/4kpros" className="" target="_blank" rel="noreferrer" >
                      <Image className="object-contain w-10" width={40} height={40} objectFit="contain" placeholder="blur" blurDataURL="/images/svg/socialmedia/bxl-github.svg" src="/images/svg/socialmedia/bxl-github.svg" alt="GitHub"/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full pt-20">
          <div className="w-full max-w-screen-xl mx-auto px-4">
            <h2 className="text-center text-3xl font-bold underline underline-offset-8">
              Liens utiles
            </h2>
            <p className="text-center text-xl mt-12">
              Pour en savoir plus sur moi, veillez cliquer sur 
              <Link href={`/about`}>
                <a href="#" className="text-my-orage-color underline mx-2">ce lien.</a>
                </Link>
            </p>
            <p className="text-center text-xl mt-2">
              Une page qui contient mes projets récents est disponible à
              <Link href={`/portfolio`}>
                <a href="#" className="text-my-orage-color underline mx-2">cette adresse.</a>
                </Link>
            </p>
            <p className="text-center text-xl mt-2">
              Vous voulez me contacter ? Veillez vous rendre a 
              <Link href={`/contact`}>
                <a href="#" className="text-my-orage-color underline mx-2">cette adresse.</a>
                </Link>
            </p>
          </div>
        </section>
      </div>
    </Layout>
  )
}
