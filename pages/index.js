import Image from 'next/image'
import Layout from '../components/Layout'

const title = 'Accueil'
const subtitle = "Bienvenue sur mon site web personnel. Vous découvrirez ici qui je suis, mes compétences et les projets sur lesquels j&apos;ai travaillé récemment. Si vous êtes intéressés par mes services, n&apos;hésitez pas à me contacter. Merci pour votre temps de lecture et prenez soins de vous."

export default function Home({ router }) {

  return (
    <Layout title={title} description={subtitle}>
        <div className="w-full max-w-screen-xl mx-auto md:p-8 min-h-[80vh] text-white">
            <div className="w-full flex flex-col px-8 py-4 bg-gradient-to-tl from-[#0c1214] to-transparent">
                <div className='w-full flex flex-col lg:flex-row lg:space-x-8'>
                <section className="w-full lg:w-auto py-4">
                    <div className="flex flex-col">
                        <div className="bg-transparent w-full">
                            <div className="">
                                <Image className="w-full h-full object-contain bg-top object-top" width={550} height={800} objectFit="cover" decoding="async" quality="100" priority placeholder="blur" blurDataURL="/images/profile/prosperabouar_preload.webp" src="/images/profile/prosperabouar.webp" alt="Prosper Abouar"/>
                            </div>
                        </div>
                    </div>
                </section>
                <div className='w-full flex flex-col'>
                    <section className="w-full py-4">
                        <div className="w-full">
                            <div className="w-full flex flex-col mt-10 lg:mt-0">
                                <div className="w-full text-xl">
                                    <h1 className="font-bold">
                                        Salut, Je suis <span className="font-extrabold text-my-orage-color ml-1">ABOUAR PROSPER</span>
                                        <br/>Développeur .NET et Python
                                    </h1>
                                </div>
                                <p className="mt-2 text-justify">
                                    J&apos;a toujours aimé manipuler tout ce qui touche aux ordinateurs. C&apos;est de là que mon envie de travailler dans le domaine du développement logiciel est née. Bienvenue dans mon site personnel et j&apos;espère qu&apos;il vous plaira.
                                </p>
                                <div className="w-full flex flex-col lg:flex-row text-sm mt-4">
                                    <div className="w-auto flex items-center lg:mr-4">
                                        <div className="w-auto flex">
                                            <Image src="/images/svg/others/location.svg" width={16} height={16} objectFit="responsive" alt=""/>
                                        </div>
                                        <p className="w-auto">
                                            Yaoundé, Cameroun
                                        </p>
                                    </div>
                                    <a href="mailto: prosper.abouar@gmail.com" className="w-auto flex">
                                        <div className="w-auto flex items-center">
                                            <Image src="/images/svg/others/gmail.svg" width={16} height={16} objectFit="responsive" alt=""/>
                                        </div>
                                        <p className="w-auto ml-1">
                                            prosper.abouar@gmail.com
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="w-full py-4">
                        <div className="w-full">
                            <h3 className="">
                                Langages de programmation
                            </h3>
                            <hr className="w-auto my-2 opacity-10"/>
                            <div className="w-full flex flex-wrap mt-5">
                                <div className="rw-auto block mr-2">
                                    <Image src="/images/svg/proglanguages/csharp.svg" width={50} height={40} objectFit="responsive" alt="csharp"/>
                                </div>
                                <div className="w-auto block mr-2">
                                    <Image src="/images/svg/proglanguages/cpp.svg" width={50} height={40} objectFit="responsive" alt="cpp"/>
                                </div>
                                <div className="w-auto block mr-2">
                                    <Image src="/images/svg/proglanguages/python.svg" width={50} height={40} objectFit="responsive" alt="python"/>
                                </div>
                                <div className="w-auto block mr-2">
                                    <Image src="/images/svg/proglanguages/java.svg" width={50} height={40} objectFit="responsive" alt="java"/>
                                </div>
                                <div className="w-auto block mr-2">
                                    <Image src="/images/svg/proglanguages/javascript.svg" width={50} height={40} objectFit="responsive" alt="javascript"/>
                                </div>
                                <div className="w-auto block mr-2">
                                    <Image src="/images/svg/proglanguages/html.svg" width={50} height={40} objectFit="responsive" alt="html"/>
                                </div>
                                <div className="w-auto block mr-2">
                                    <Image src="/images/svg/proglanguages/css.svg" width={50} height={40} objectFit="responsive" alt="css"/>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="w-full py-4">
                        <div className="w-full">
                            <div className="w-full h-auto">
                                <h3 className="">
                                    Technologies
                                </h3>
                                <hr className="w-auto my-2 opacity-10"/>
                                <div className="w-full flex flex-wrap mt-5">
                                    <div className="rw-auto block mr-2">
                                        <Image src="/images/svg/tech/dotnet.svg" width={50} height={40} objectFit="responsive" alt="dotnet"/>
                                    </div>
                                    <div className="w-auto block mr-2">
                                        <Image src="/images/svg/tech/django.svg" width={50} height={40} objectfit="responsive" alt="django"/>
                                    </div>
                                    <div className="w-auto block mr-2">
                                        <Image src="/images/svg/tech/reactjs.svg" width={50} height={40} objectfit="responsive" alt="reactjs"/>
                                    </div>
                                    <div className="w-auto block mr-2">
                                        <Image src="/images/svg/tech/android.svg" width={50} height={40} objectfit="responsive" alt="android"/>
                                    </div>
                                    <div className="w-auto block mr-2">
                                        <Image src="/images/svg/tech/nodejs.svg" width={50} height={40} objectfit="responsive" alt="nodejs"/>
                                    </div>
                                    <div className="w-auto block mr-2">
                                        <Image src="/images/svg/tech/firebase.svg" width={50} height={40} objectfit="responsive" alt="firebase"/>
                                    </div>
                                    <div className="w-auto block mr-2">
                                        <Image src="/images/svg/tech/azure.svg" width={50} height={40} objectfit="responsive" alt="azure"/>
                                    </div>
                                    <div className="w-auto block mr-2">
                                        <Image src="/images/svg/tech/sqlserver.svg" width={50} height={40} objectfit="responsive" alt="sqlserver"/>
                                    </div>
                                    <div className="w-auto block mr-2">
                                        <Image src="/images/svg/tech/mongodb.svg" width={50} height={40} objectfit="responsive" alt="mongodb"/>
                                    </div>
                                    <div className="w-auto block mr-2">
                                        <Image src="/images/svg/tech/mysql.svg" width={50} height={40} objectfit="responsive" alt="mysql"/>
                                    </div>
                                    <div className="w-auto block mr-2">
                                        <Image src="/images/svg/tech/tailwindcss.svg" width={50} height={40} objectfit="responsive" alt="tailwindcss"/>
                                    </div>
                                    <div className="w-auto block mr-2">
                                        <Image src="/images/svg/tech/unity.svg" width={50} height={40} objectfit="responsive" alt="unity"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                </div>
            </div>
            <section className="w-full py-5 hidden">
                <div className="w-full">
                    <div className="w-full h-auto">
                        <h3 className="opacity-50">
                        Expérience
                        </h3>
                        <hr className="w-auto my-2 opacity-10"/>
                        <div className="w-full mt-5 flex flex-col space-x-12">
                            <div className="w-full flex flex-col">
                                <div className="w-auto flex">
                                    <div className="">
                                        <Image src="/images/svg/companies/IREX-Brand.svg" width={50} height={50} objectFit="responsive" alt=""/>
                                    </div>
                                    <div className="w-auto flex flex-col ml-2">
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
            </section><section className="w-full py-5 hidden">
                <div className="w-full">
                    <div className="w-full h-auto">
                        <h3 className="opacity-50">
                            Education
                        </h3>
                        <hr className="w-auto my-2 opacity-10"/>
                        <div className="w-full mt-5 flex flex-col">
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
        </div>
    </Layout>
  )
}
