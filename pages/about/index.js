import Image from 'next/image'
import { LazyMotion, domAnimation, m } from 'framer-motion'

import Layout from '../../components/Layout'

import 'react-toastify/dist/ReactToastify.css';

const title = 'A propos'
const subtitle = "Page de détails me concernant tels que mon parcours scolaire, mes technos et centres d'intérêts."

export default function About({ router }){
    return (
        <Layout title={title} description={subtitle}>
            <div className="w-full text-white text-xl font-bold">
                <section className="w-full mt-10 py-5">
                    <div className="w-full max-w-screen-xl mx-auto px-4">
                        <div className="w-full">
                            <div className="w-full h-auto">
                                <div className="w-full mt-5 flex flex-wrap items-end">
                                    <div className="w-auto">
                                        <Image className="w-auto bg-top object-top" src="/images/profile/portfolioprofile.webp" width={150} height={150} objectFit="cover" alt=""/>
                                    </div>
                                    <p className="w-auto text-5xl ml-4">
                                        Abouar Prosper
                                    </p>
                                </div>
                                <div className="w-full mt-5 flex flex-wrap space-x-12">
                                    <div className="w-auto flex items-center">
                                        <div className="">
                                            <Image src="/images/svg/others/location.svg" width={35} height={35} objectFit="responsive" alt=""/>
                                        </div>
                                        <p className="w-auto ml-2">
                                            Yaounde, Cameroun
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
                                    <a href="https://www.linkedin.com/in/prosper-abouar-408089134/" target="_blank" rel="noreferrer">
                                        <div className="w-auto flex items-center">
                                            <div className="">
                                                <Image src="/images/svg/others/linkedin.svg" width={35} height={35} objectFit="responsive" alt=""/>
                                            </div>
                                            <p className="w-auto ml-2">
                                                4kpros
                                            </p>
                                        </div>
                                    </a>
                                    <a href="https://github.com/4kpros" target="_blank" rel="noreferrer">
                                        <div className="w-auto flex items-center">
                                            <div className="w-auto">
                                                <Image src="/images/svg/others/github.svg" width={35} height={35} objectFit="responsive" alt=""/>
                                            </div>
                                            <p className="w-auto ml-2">
                                                4kpros
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="w-full h-auto mt-8">
                                <h3 className="opacity-50">
                                    Experiences
                                </h3>
                                <hr className="w-auto my-2 opacity-10"/>
                                <div className="w-full mt-5 flex flex-col space-x-12">
                                    <div className="w-full flex flex-col">
                                        <div className="w-auto flex items-center">
                                            <div className="">
                                                <Image src="/images/svg/companies/IREX-Brand.svg" width={80} height={65} objectFit="responsive" alt=""/>
                                            </div>
                                            <div className="w-auto flex flex-col ml-4">
                                                <h3 className="w-auto">
                                                    IREX - Institut du Retour d'EXperience
                                                </h3>
                                                <p className="w-auto opacity-50">
                                                    Developpeur web - de Juillet 2021 jusqu'a present
                                                </p>
                                            </div>
                                        </div>
                                        <div className="w-auto pl-24">
                                            <p className="w-auto">
                                                - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ex magna, ultrices vitae diam sit amet, dignissim porttitor elit. Cras vel massa eget risus fermentum rutrum. Etiam ultricies enim sit amet massa ullamcorper consectetur. Nullam interdum metus a nulla tincidunt tincidunt. Donec sagittis ac augue sit amet pulvinar. Maecenas ac mauris leo. Maecenas hendrerit lorem eu bibendum fermentum. Praesent ornare vestibulum tellus, id suscipit massa dapibus sit amet. Donec tempus dui vel est facilisis, sed commodo magna vehicula. Duis at tortor finibus, consectetur massa vitae, molestie libero. Nulla eget arcu neque. Nulla posuere purus magna, sit amet placerat sem luctus a. Etiam accumsan ultricies nisi, et commodo magna sodales in. Nullam tincidunt eros et viverra sagittis. In laoreet urna quis semper elementum. 
                                                <br/><br/>
                                                - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ex magna, ultrices vitae diam sit amet, dignissim porttitor elit. Cras vel massa eget risus fermentum rutrum. Etiam ultricies enim sit amet massa ullamcorper consectetur. Nullam interdum metus a nulla tincidunt tincidunt. Donec sagittis ac augue sit amet pulvinar. Maecenas ac mauris leo. Maecenas hendrerit lorem eu bibendum fermentum. Praesent ornare vestibulum tellus, id suscipit massa dapibus sit amet. Donec tempus dui vel est facilisis, sed commodo magna vehicula. Duis at tortor finibus, consectetur massa vitae, molestie libero. Nulla eget arcu neque. Nulla posuere purus magna, sit amet placerat sem luctus a. Etiam accumsan ultricies nisi, et commodo magna sodales in. Nullam tincidunt eros et viverra sagittis. In laoreet urna quis semper elementum.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-5">
                    <div className="w-full max-w-screen-xl mx-auto px-4">
                        <div className="w-full">
                            <div className="w-full h-auto mt-8">
                                <h3 className="opacity-50">
                                    Langages de programmation
                                </h3>
                                <hr className="w-auto my-2 opacity-10"/>
                                <div className="w-full flex flex-wrap mt-5">
                                    <div className="rw-auto block mr-2 my-2">
                                        <Image src="/images/svg/proglanguages/csharp.svg" width={80} height={65} objectFit="responsive" alt=""/>
                                    </div>
                                    <div className="w-auto block m-2">
                                        <Image src="/images/svg/proglanguages/cpp.svg" width={80} height={65} objectFit="responsive" alt=""/>
                                    </div>
                                    <div className="w-auto block m-2">
                                        <Image src="/images/svg/proglanguages/python.svg" width={80} height={65} objectFit="responsive" alt=""/>
                                    </div>
                                    <div className="w-auto block m-2">
                                        <Image src="/images/svg/proglanguages/java.svg" width={80} height={65} objectFit="responsive" alt=""/>
                                    </div>
                                    <div className="w-auto block m-2">
                                        <Image src="/images/svg/proglanguages/javascript.svg" width={80} height={65} objectFit="responsive" alt=""/>
                                    </div>
                                    <div className="w-auto block m-2">
                                        <Image src="/images/svg/proglanguages/html.svg" width={80} height={65} objectFit="responsive" alt=""/>
                                    </div>
                                    <div className="w-auto block m-2">
                                        <Image src="/images/svg/proglanguages/css.svg" width={80} height={65} objectFit="responsive" alt=""/>
                                    </div>
                                    <div className="w-auto block m-2">
                                        <Image src="/images/svg/proglanguages/cobol.svg" width={80} height={65} objectFit="responsive" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-5">
                    <div className="w-full max-w-screen-xl mx-auto px-4">
                        <div className="w-full">
                            <div className="w-full h-auto mt-8">
                                <h3 className="opacity-50">
                                    Technologies
                                </h3>
                                <hr className="w-auto my-2 opacity-10"/>
                                <div className="w-full flex flex-wrap mt-5">
                                    <div className="rw-auto block mr-2 my-2">
                                        <Image src="/images/svg/tech/dotnet.svg" width={80} height={65} objectFit="responsive" alt=""/>
                                    </div>
                                    <div className="w-auto block m-2">
                                        <Image src="/images/svg/tech/django.svg" width={80} height={65} objectfit="responsive" alt=""/>
                                    </div>
                                    <div className="w-auto block m-2">
                                        <Image src="/images/svg/tech/reactjs.svg" width={80} height={65} objectfit="responsive" alt=""/>
                                    </div>
                                    <div className="w-auto block m-2">
                                        <Image src="/images/svg/tech/android.svg" width={80} height={65} objectfit="responsive" alt=""/>
                                    </div>
                                    <div className="w-auto block m-2">
                                        <Image src="/images/svg/tech/nodejs.svg" width={80} height={65} objectfit="responsive" alt=""/>
                                    </div>
                                    <div className="w-auto block m-2">
                                        <Image src="/images/svg/tech/firebase.svg" width={80} height={65} objectfit="responsive" alt=""/>
                                    </div>
                                    <div className="w-auto block m-2">
                                        <Image src="/images/svg/tech/azure.svg" width={80} height={65} objectfit="responsive" alt=""/>
                                    </div>
                                    <div className="w-auto block m-2">
                                        <Image src="/images/svg/tech/sqlserver.svg" width={80} height={65} objectfit="responsive" alt=""/>
                                    </div>
                                    <div className="w-auto block m-2">
                                        <Image src="/images/svg/tech/mongodb.svg" width={80} height={65} objectfit="responsive" alt=""/>
                                    </div>
                                    <div className="w-auto block m-2">
                                        <Image src="/images/svg/tech/mysql.svg" width={80} height={65} objectfit="responsive" alt=""/>
                                    </div>
                                    <div className="w-auto block m-2">
                                        <Image src="/images/svg/tech/tailwindcss.svg" width={80} height={65} objectfit="responsive" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-5">
                    <div className="w-full max-w-screen-xl mx-auto px-4">
                        <div className="w-full">
                            <div className="w-full h-auto">
                                <h3 className="opacity-50">
                                    Qualites personnelles
                                </h3>
                                <hr className="w-auto my-2 opacity-10"/>
                                <div className="w-full flex flex-col mt-5">
                                    <h3 className="">
                                        - Humilite
                                    </h3>
                                    <h3 className="">
                                        - Capacite a travaillser en autonomie et en equipe
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
                    </div>
                </section>
                <section className="w-full py-5">
                    <div className="w-full max-w-screen-xl mx-auto px-4">
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
                    </div>
                </section>
                <section className="w-full py-5">
                    <div className="w-full max-w-screen-xl mx-auto px-4">
                        <div className="w-full">
                            <div className="w-full h-auto">
                                <h3 className="opacity-50">
                                    Centres d intérêts
                                </h3>
                                <hr className="w-auto my-2 opacity-10"/>
                                <div className="w-full flex flex-col mt-5">
                                    <h3 className="">
                                        - Dessins (pixel art)
                                    </h3>
                                    <h3 className="">
                                        - Football
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};