import Link from 'next/link'
import Image from 'next/image'

import { LazyMotion, domAnimation, m } from 'framer-motion'

import Layout from '../components/Layout'

const title = 'Accueil'
const subtitle = "Bienvenue sur mon site web personnel. Vous découvrirez ici qui je suis, mes compétences et les projets sur lesquels j&apos;ai travaillé récemment. Si vous êtes intéressés par mes services, n&apos;hésitez pas à me contacter. Merci pour votre temps de lecture et prenez soins de vous."

export default function Home({ router }) {

  return (
    <Layout title={title} description={subtitle}>
      <div className="w-full max-w-screen-xl mx-auto px-8 py-8">
        <div className="w-full px-4 md:px-8 pb-12 bg-gradient-to-tl from-[#0c1214] to-transparent shadow-[0px_0px_6px_6px_rgba(212,233,255,0.09)] text-white text-xl ">
          <section className="w-full py-5">
            <div className="flex flex-col items-center lg:flex-row lg:space-x-8 pt-12">
              <div className="bg-transparent w-3/4 lg:w-3/5 h-3/4">
                <div className="border border-my-orage-color">
                    <Image className="w-full h-full object-contain bg-top object-top" width={449} height={600} objectFit="cover" layout="responsive" decoding="async" quality="100" priority placeholder="blur" blurDataURL="/images/profile/prosperabouar_preload.webp" src="/images/profile/prosperabouar.webp" alt="Prosper Abouar"/>
                </div>
              </div>
              <div className="w-full flex flex-col items-center mt-10 lg:mt-0">
                <div className="">
                  <h1 className="text-2xl md:text-3xl font-bold text-center lg:text-left">
                    Salut, Je suis <span className="font-extrabold text-my-orage-color text-3xl md:text-5xl ml-2">ABOUAR PROSPER</span>
                    <br/>Développeur .NET et Python
                  </h1>
                  <p className="text-xl mt-8 text-center lg:text-justify">
                    Adepte de l&apos;amélioration de l&apos;expérience utilisateur et des performances dans le domaine du développement d&apos;applications, ma passion pour ce secteur me pousse chaque jour à me surpasser.
                  </p>
                  <p className="text-xl mt-2 text-center lg:text-justify">
                    Je suis principalement développeur backend ayant de bonnes compétences en développement frontend.
                  </p>
                </div>
                <div className="w-full h-auto flex flex-col">
                  <div className="w-full mt-5 flex flex-wrap items-center justify-around lg:justify-start lg:space-x-12">
                      <div className="w-auto flex items-center">
                          <div className="">
                              <Image src="/images/svg/others/location.svg" width={35} height={35} objectFit="responsive" alt=""/>
                          </div>
                          <p className="w-auto ml-2">
                              Yaoundé, Cameroun
                          </p>
                      </div>
                      <a href="mailto: prosper.abouar@gmail.com" className="w-auto flex items-center">
                          <div className="">
                              <Image src="/images/svg/others/gmail.svg" width={35} height={35} objectFit="responsive" alt=""/>
                          </div>
                          <p className="w-auto ml-2">
                              prosper.abouar@gmail.com
                          </p>
                      </a>
                  </div>
                  <div className="w-full mt-5 flex flex-wrap items-center justify-around lg:justify-start lg:space-x-12">
                      <a href="https://www.linkedin.com/in/prosper-abouar-408089134/" className="w-auto" target="_blank" rel="noreferrer">
                          <div className="w-auto flex items-center">
                              <div className="">
                                  <Image src="/images/svg/others/linkedin.svg" width={35} height={35} objectFit="responsive" alt=""/>
                              </div>
                              <p className="w-auto ml-2">
                                  LinkedIn
                              </p>
                          </div>
                      </a>
                      <a href="https://github.com/4kpros" className="w-auto" target="_blank" rel="noreferrer">
                          <div className="w-auto flex items-center">
                              <div className="w-auto">
                                  <Image src="/images/svg/others/github.svg" width={35} height={35} objectFit="responsive" alt=""/>
                              </div>
                              <p className="w-auto ml-2">
                                  GitHub
                              </p>
                          </div>
                      </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full py-5">
            <div className="w-full">
                <div className="w-full h-auto mt-8">
                    <h3 className="opacity-50">
                    Expérience
                    </h3>
                    <hr className="w-auto my-2 opacity-10"/>
                    <div className="w-full mt-5 flex flex-col space-x-12">
                        <div className="w-full flex flex-col">
                            <div className="w-auto flex items-center">
                                <div className="">
                                    <Image src="/images/svg/companies/IREX-Brand.svg" width={80} height={65} objectFit="responsive" alt=""/>
                                </div>
                                <div className="w-auto flex flex-col ml-4">
                                    <h3 className="w-auto font-bold">
                                        IREX - Institut du Retour d&apos;EXpérience - Montréal, Canada
                                    </h3>
                                    <p className="w-auto opacity-50">
                                        Développeur web (alternance à distance) - de Juillet 2021 jusqu&apos;à présent
                                    </p>
                                </div>
                            </div>
                            <div className="w-auto">
                                <p className="w-auto">
                                    - Développement des modules et fonctionnalités spécifiques répondant aux besoins utilisateurs(Paiements, gestion des évènements, etc...)
                                    <br/>
                                    - Réalisation des logos, des maquettes des pages web, d&apos;illustrations et découpages vidéos
                                    <br/>
                                    - Intégration des pages web et développement frontal d&apos;interfaces spécifiques
                                    <br/>
                                    - Contribution à l&apos;évolution des applications tout en respectant/améliorant les performances et la sécurité
                                    <br/>
                                    - Documentation des fonctionnalités développées pour la mise en place des tests de validation utilisateur
                                    <br/>
                                    - Configuration des domaines, des marchines virtuelles, des serveurs mails
                                    <br/>
                                    - Technique : ERPNext, GitLab, Python, Javascript, HTML, CSS, Bootstrap, Debian, XEN-Orchestra, Penpot, Inskape
                                    <br/>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </section>
          <section className="w-full py-5">
            <div className="w-full">
                <div className="w-full h-auto mt-8">
                    <h3 className="opacity-50">
                        Education
                    </h3>
                    <hr className="w-auto my-2 opacity-10"/>
                    <div className="w-full mt-5 flex flex-col space-x-12">
                        <div className="w-full flex flex-col">
                            <div className="w-auto flex items-center">
                                <div className="w-auto flex flex-col">
                                    <h3 className="w-auto font-bold">
                                        Licence en mathématiques et informatique (spécialité génie logiciel) - Université de Yaoundé 1
                                    </h3>
                                    <p className="w-auto opacity-50">
                                        2020 - Yaoundé, Cameroun
                                    </p>
                                </div>
                            </div>
                            <div className="w-auto flex items-center">
                                <div className="w-auto flex flex-col">
                                    <h3 className="w-auto font-bold">
                                        Baccalauréat TI - Lycée Scientifique de Bertoua
                                    </h3>
                                    <p className="w-auto opacity-50">
                                        2017 - Bertoua, Cameroun
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </section>
          <section className="w-full py-5">
            <div className="w-full">
                <div className="w-full h-auto mt-8">
                    <h3 className="opacity-50">
                        Langages de programmation
                    </h3>
                    <hr className="w-auto my-2 opacity-10"/>
                    <div className="w-full flex flex-wrap mt-5">
                        <div className="rw-auto block mr-2">
                            <Image src="/images/svg/proglanguages/csharp.svg" width={80} height={65} objectFit="responsive" alt="csharp"/>
                        </div>
                        <div className="w-auto block mr-2">
                            <Image src="/images/svg/proglanguages/cpp.svg" width={80} height={65} objectFit="responsive" alt="cpp"/>
                        </div>
                        <div className="w-auto block mr-2">
                            <Image src="/images/svg/proglanguages/python.svg" width={80} height={65} objectFit="responsive" alt="python"/>
                        </div>
                        <div className="w-auto block mr-2">
                            <Image src="/images/svg/proglanguages/java.svg" width={80} height={65} objectFit="responsive" alt="java"/>
                        </div>
                        <div className="w-auto block mr-2">
                            <Image src="/images/svg/proglanguages/javascript.svg" width={80} height={65} objectFit="responsive" alt="javascript"/>
                        </div>
                        <div className="w-auto block mr-2">
                            <Image src="/images/svg/proglanguages/html.svg" width={80} height={65} objectFit="responsive" alt="html"/>
                        </div>
                        <div className="w-auto block mr-2">
                            <Image src="/images/svg/proglanguages/css.svg" width={80} height={65} objectFit="responsive" alt="css"/>
                        </div>
                    </div>
                </div>
            </div>
          </section>
          <section className="w-full py-5">
            <div className="w-full">
                <div className="w-full h-auto mt-8">
                    <h3 className="opacity-50">
                        Technologies
                    </h3>
                    <hr className="w-auto my-2 opacity-10"/>
                    <div className="w-full flex flex-wrap mt-5">
                        <div className="rw-auto block mr-2">
                            <Image src="/images/svg/tech/dotnet.svg" width={80} height={65} objectFit="responsive" alt="dotnet"/>
                        </div>
                        <div className="w-auto block mr-2">
                            <Image src="/images/svg/tech/django.svg" width={80} height={65} objectfit="responsive" alt="django"/>
                        </div>
                        <div className="w-auto block mr-2">
                            <Image src="/images/svg/tech/reactjs.svg" width={80} height={65} objectfit="responsive" alt="reactjs"/>
                        </div>
                        <div className="w-auto block mr-2">
                            <Image src="/images/svg/tech/android.svg" width={80} height={65} objectfit="responsive" alt="android"/>
                        </div>
                        <div className="w-auto block mr-2">
                            <Image src="/images/svg/tech/nodejs.svg" width={80} height={65} objectfit="responsive" alt="nodejs"/>
                        </div>
                        <div className="w-auto block mr-2">
                            <Image src="/images/svg/tech/firebase.svg" width={80} height={65} objectfit="responsive" alt="firebase"/>
                        </div>
                        <div className="w-auto block mr-2">
                            <Image src="/images/svg/tech/azure.svg" width={80} height={65} objectfit="responsive" alt="azure"/>
                        </div>
                        <div className="w-auto block mr-2">
                            <Image src="/images/svg/tech/sqlserver.svg" width={80} height={65} objectfit="responsive" alt="sqlserver"/>
                        </div>
                        <div className="w-auto block mr-2">
                            <Image src="/images/svg/tech/mongodb.svg" width={80} height={65} objectfit="responsive" alt="mongodb"/>
                        </div>
                        <div className="w-auto block mr-2">
                            <Image src="/images/svg/tech/mysql.svg" width={80} height={65} objectfit="responsive" alt="mysql"/>
                        </div>
                        <div className="w-auto block mr-2">
                            <Image src="/images/svg/tech/tailwindcss.svg" width={80} height={65} objectfit="responsive" alt="tailwindcss"/>
                        </div>
                        <div className="w-auto block mr-2">
                            <Image src="/images/svg/tech/unity.svg" width={80} height={65} objectfit="responsive" alt="unity"/>
                        </div>
                    </div>
                </div>
            </div>
          </section>
          <section className="w-full py-5">
            <div className="w-full">
                <div className="w-full h-auto">
                    <h3 className="opacity-50">
                    Qualités personnelles
                    </h3>
                    <hr className="w-auto my-2 opacity-10"/>
                    <div className="w-full flex flex-col mt-5">
                        <h3 className="">
                            - Humilité
                        </h3>
                        <h3 className="">
                            - Capacité à travailler en autonomie et en équipe
                        </h3>
                        <h3 className="">
                            - Apprendre rapidement
                        </h3>
                        <h3 className="">
                            - Bonne communication
                        </h3>
                    </div>
                </div>
            </div>
          </section>
          <section className="w-full py-5">
            <div className="w-full">
                <div className="w-full h-auto">
                    <h3 className="opacity-50">
                        Langues
                    </h3>
                    <hr className="w-auto my-2 opacity-10"/>
                    <div className="w-full flex flex-col mt-5">
                        <h3 className="">
                            - Francais courant
                        </h3>
                        <h3 className="">
                            - Anglais basique
                        </h3>
                    </div>
                </div>
            </div>
          </section>
          <section className="w-full py-5">
            <div className="w-full">
                <div className="w-full h-auto">
                    <h3 className="opacity-50">
                        Centres d intérêts
                    </h3>
                    <hr className="w-auto my-2 opacity-10"/>
                    <div className="w-full flex flex-col mt-5">
                        <h3 className="">
                            - Dessiner
                        </h3>
                        <h3 className="">
                            - Regarder le football
                        </h3>
                    </div>
                </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}
