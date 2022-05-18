import Image from 'next/image'

import Layout from '../../components/Layout'

import 'react-toastify/dist/ReactToastify.css';

const title = 'A propos'
const subtitle = "Page de détails me concernant tels que mon parcours scolaire, mes technos et centres d'intérêts."

export default function About({ router }){
    return (
        <Layout title={title} description={subtitle}>
            <div className="w-full text-white">
                <section className="w-full mt-12">
                    <div className="w-full max-w-screen-xl mx-auto px-4">
                        <Image width={2016} height={1512} layout="responsive" placeholder="blur" priority blurDataURL="/images/profile/setup_preload.webp" src="/images/profile/setup.webp" className="w-full h-auto object-cover" alt="my-setup"/>
                    </div>
                </section>
                <section className="w-full pt-20">
                    <div className="w-full max-w-screen-xl mx-auto px-4">
                        <h2 className="text-center text-3xl font-bold underline underline-offset-8">
                            Profil
                        </h2>
                        <div className="w-full flex flex-col mt-12">
                            <p className="text-xl font-bold">
                                Nom complet : 
                                <span className="font-normal"> Abouar Prosper</span>
                            </p>
                            <p className="text-xl font-bold mt-4">
                                Bio : 
                                <span className="font-normal"> Camerounais et passionné de geek, j ai toujours rêvé de créer des solutions dans le domaine du développement logiciel.</span>
                            </p>
                            <p className="text-xl font-bold mt-4">
                                Etudes : 
                                <span className="font-normal"> Licence Informatique en genie logiciel.</span>
                            </p>
                            <p className="text-xl font-bold mt-4">
                                Compétences : 
                                <span className="font-normal"> Ayant de solides compétences en développement mobile Android et web(Reactjs, node.js, Django et autres technos tout au tour), je dispose des savoir en gestion d’équipes virtuelles et de projets agiles, en communication et de connaissances sur les solutions open source tels qu’ERPNext, Zimbra, Tuleap, Rocket.chat.</span>
                            </p>
                        </div>
                    </div>
                </section>
                <section className="w-full pt-20">
                    <div className="w-full max-w-screen-xl mx-auto px-4">
                        <h2 className="text-center text-3xl font-bold underline underline-offset-8">
                            Technologies
                        </h2>
                        <div className="w-full flex flex-wrap justify-center mt-12">
                            <div className="rw-auto block m-4">
                                <Image src="/images/svg/tech/react.svg" width={96} height={120} objectFit="responsive" placeholder="blur" blurdataurl="/images/svg/tech/react.svg" alt=""/>
                            </div>
                            <div className="w-auto block m-4">
                                <Image src="/images/svg/tech/next-js.svg" width={96} height={120} objectfit="responsive" placeholder="blur" blurdataurl="/images/svg/tech/next-js.svg" alt=""/>
                            </div>
                            <div className="w-auto block m-4">
                                <Image src="/images/svg/tech/nodejs.svg" width={120} height={120} objectfit="responsive" placeholder="blur" blurdataurl="/images/svg/tech/nodejs.svg" alt=""/>
                            </div>
                            <div className="w-auto block m-4">
                                <Image src="/images/svg/tech/android.svg" width={96} height={120} objectfit="responsive" placeholder="blur" blurdataurl="/images/svg/tech/android.svg" alt=""/>
                            </div>
                            <div className="w-auto block m-4">
                                <Image src="/images/svg/tech/flutter.svg" width={96} height={120} objectfit="responsive" placeholder="blur" blurdataurl="/images/svg/tech/flutter.svg" alt=""/>
                            </div>
                            <div className="w-auto block m-4">
                                <Image src="/images/svg/tech/django.svg" width={96} height={120} objectfit="responsive" placeholder="blur" blurdataurl="/images/svg/tech/django.svg" alt=""/>
                            </div>
                            <div className="w-auto block m-4">
                                <Image src="/images/svg/tech/firebase.svg" width={96} height={120} objectfit="responsive" placeholder="blur" blurdataurl="/images/svg/tech/firebase.svg" alt=""/>
                            </div>
                            <div className="w-auto block m-4">
                                <Image src="/images/svg/tech/java.svg" width={96} height={120} objectfit="responsive" placeholder="blur" blurdataurl="/images/svg/tech/java.svg" alt=""/>
                            </div>
                            <div className="w-auto block m-4">
                                <Image src="/images/svg/tech/kotlin.svg" width={96} height={120} objectfit="responsive" placeholder="blur" blurdataurl="/images/svg/tech/kotlin.svg" alt=""/>
                            </div>
                            <div className="w-auto block m-4">
                                <Image src="/images/svg/tech/mongodb.svg" width={96} height={120} objectfit="responsive" placeholder="blur" blurdataurl="/images/svg/tech/mongodb.svg" alt=""/>
                            </div>
                            <div className="w-auto block m-4">
                                <Image src="/images/svg/tech/mysql.svg" width={96} height={120} objectfit="responsive" placeholder="blur" blurdataurl="/images/svg/tech/mysql.svg" alt=""/>
                            </div>
                            <div className="w-auto block m-4">
                                <Image src="/images/svg/tech/tailwind-css.svg" width={96} height={120} objectfit="responsive" placeholder="blur" blurdataurl="/images/svg/tech/tailwind-css.svg" alt=""/>
                            </div>
                            <div className="w-auto block m-4">
                                <Image src="/images/svg/tech/typescript.svg" width={96} height={120} objectfit="responsive" placeholder="blur" blurdataurl="/images/svg/tech/typescript.svg" alt=""/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full">
                    <div className="w-full max-w-screen-xl mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                            <div className="w-full border-2 border-neutral-800 px-8 py-10 flex flex-col items-center transition-all ease-in-out hover:shadow-[rgba(255,255,255,0.08)_0px_0px_16px]">
                                <svg className="h-16 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M13.4 2.096a10.08 10.08 0 0 0-8.937 3.331A10.054 10.054 0 0 0 2.096 13.4c.53 3.894 3.458 7.207 7.285 8.246a9.982 9.982 0 0 0 2.618.354l.142-.001a3.001 3.001 0 0 0 2.516-1.426 2.989 2.989 0 0 0 .153-2.879l-.199-.416a1.919 1.919 0 0 1 .094-1.912 2.004 2.004 0 0 1 2.576-.755l.412.197c.412.198.85.299 1.301.299A3.022 3.022 0 0 0 22 12.14a9.935 9.935 0 0 0-.353-2.76c-1.04-3.826-4.353-6.754-8.247-7.284zm5.158 10.909-.412-.197c-1.828-.878-4.07-.198-5.135 1.494-.738 1.176-.813 2.576-.204 3.842l.199.416a.983.983 0 0 1-.051.961.992.992 0 0 1-.844.479h-.112a8.061 8.061 0 0 1-2.095-.283c-3.063-.831-5.403-3.479-5.826-6.586-.321-2.355.352-4.623 1.893-6.389a8.002 8.002 0 0 1 7.16-2.664c3.107.423 5.755 2.764 6.586 5.826.198.73.293 1.474.282 2.207-.012.807-.845 1.183-1.441.894z"/>
                                    <circle cx="7.5" cy="14.5" r="1.5"/>
                                    <circle cx="7.5" cy="10.5" r="1.5"/>
                                    <circle cx="10.5" cy="7.5" r="1.5"/>
                                    <circle cx="14.5" cy="7.5" r="1.5"/>
                                </svg>
                                <h3 className="text-justify text-2xl font-semibold my-2">
                                    Design web
                                </h3>
                                <p className="text-xl text-center">
                                    Réalisation de logos, de designs d applications web et mobile en utilisant les outils tels que Figma, Adobe Illustrator, Adobe Photoshop.
                                </p>
                            </div>
                            <div className="w-full border-2 border-neutral-800 px-8 py-10 flex flex-col items-center transition-all ease-in-out hover:shadow-[rgba(255,255,255,0.08)_0px_0px_16px]">
                                <svg className="h-16 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M20 3H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h7v2H8v2h8v-2h-3v-2h7c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 14V5h16l.002 9H4z"></path>
                                </svg>
                                <h3 className="text-justify text-2xl font-semibold my-2">
                                    Developpement web
                                </h3>
                                <p className="text-xl text-center">
                                    Développement front-end et backend de site web avec les technos tels que ReactJS, Node.js, Django, MongoDB, Firebase.
                                </p>
                            </div>
                            <div className="w-full border-2 border-neutral-800 px-8 py-10 flex flex-col items-center transition-all ease-in-out hover:shadow-[rgba(255,255,255,0.08)_0px_0px_16px]">
                                <svg className="h-16 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M17 2H7c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM7 16.999V5h10l.002 11.999H7z"></path>
                                </svg>
                                <h3 className="text-justify text-2xl font-semibold my-2">
                                    Developpement mobile
                                </h3>
                                <p className="text-xl text-center">
                                    Développement Android natif en Java et Kotlin en respectant les normes et bonnes pratiques.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full pt-20">
                    <div className="w-full max-w-screen-xl mx-auto px-4">
                        <h2 className="text-center text-3xl font-bold underline underline-offset-8">
                            Centres d intérêts
                        </h2>
                        <div className="w-full max-w-2xl mx-auto mt-12 flex flex-col items-center">
                            <h3 className="text-xl text-center">
                                Jeux vidéo : je joue de temps en temps. Mes jeux préférés du moment : Candy Crush, PCM (Pro Cycling Manager) et ORI and the blind forest.
                            </h3>
                            <h3 className="text-xl text-center mt-4">
                                Dessins (pixel art).
                            </h3>
                            <h3 className="text-xl text-center mt-4">
                                Lecture sur Quora.
                            </h3>
                            <h3 className="text-xl text-center mt-4">
                                Football.
                            </h3>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};