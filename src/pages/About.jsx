import React, { Component } from 'react';

import Footer from '../components/Footer'
import Navbar from '../components/Nabar'

import mySetup from '../images/profile/setup.jpg'

import reactjsTech from '../images/svg/tech/react-2.svg'
import nodejsTech from '../images/svg/tech/nodejs-1.svg'
import djangoTech from '../images/svg/tech/django.svg'
import androidTech from '../images/svg/tech/android-4.svg'
import kotlinTech from '../images/svg/tech/kotlin-1.svg'
import javaTech from '../images/svg/tech/java.svg'
import firebaseTech from '../images/svg/tech/firebase-2.svg'
import mysqlTech from '../images/svg/tech/mysql-6.svg'
import mongodbTech from '../images/svg/tech/mongodb-icon-1.svg'
import figmaTech from '../images/svg/tech/figma-1.svg'

class About extends Component {
    render() {
        return (
            <>
                <div className="w-full text-white">
                    <section className="w-full">
                        <div className="w-full max-w-screen-xl mx-auto px-4">
                            <Navbar selectedNavItem='About'/>
                        </div>
                    </section>
                    <section className="w-full mt-12">
                        <div className="w-full max-w-screen-xl mx-auto px-4">
                            <img src={mySetup} className="w-full h-auto object-cover" alt="empty"/>
                        </div>
                    </section>
                    <section className="w-full pt-20">
                        <div className="w-full max-w-screen-xl mx-auto px-4">
                            <h2 className="text-center text-4xl font-bold underline underline-offset-8">
                                Profil
                            </h2>
                            <div className="w-full flex flex-col mt-12">
                                <p className="text-2xl font-bold text-justify">
                                    Nom complet : 
                                    <span className="font-normal"> Abouar Prosper</span>
                                </p>
                                <p className="text-2xl font-bold mt-4 text-justify">
                                    Bio : 
                                    <span className="font-normal"> Camerounais et passionné de geek, j'ai toujours rêvé de créer des solutions dans le domaine du développement logiciel.</span>
                                </p>
                                <p className="text-2xl font-bold mt-4 text-justify">
                                    Etudes : 
                                    <span className="font-normal"> Licence Informatique en genie logiciel.</span>
                                </p>
                                <p className="text-2xl font-bold mt-4 text-justify">
                                    Compétences : 
                                    <span className="font-normal"> Ayant de solides compétences en développement mobile Android et web, je dispose également de savoir en gestion d’équipes virtuelles de projets agiles, en communication. J’ai également des connaissances sur les solutions open source tels qu’ERPNext, Zimbra, Tuleap, Rocket.chat.</span>
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="w-full pt-20">
                        <div className="w-full max-w-screen-xl mx-auto px-4">
                            <h2 className="text-center text-4xl font-bold underline underline-offset-8">
                                Technologies
                            </h2>
                            <div className="w-full flex flex-wrap justify-center mt-12">
                                <img src={reactjsTech} className="h-16 object-contain mx-4 mb-6 rounded-lg" alt=""/>
                                <img src={nodejsTech} className="h-16 object-contain mx-4 mb-6 rounded-lg" alt=""/>
                                <img src={djangoTech} className="h-16 object-contain mx-4 mb-6 rounded-lg" alt=""/>
                                <img src={androidTech} className="h-16 object-contain mx-4 mb-6 rounded-lg" alt=""/>
                                <img src={kotlinTech} className="h-16 object-contain mx-4 mb-6 rounded-lg" alt=""/>
                                <img src={javaTech} className="h-16 object-contain mx-4 mb-6 rounded-lg" alt=""/>
                                <img src={firebaseTech} className="h-16 object-contain mx-4 mb-6 rounded-lg" alt=""/>
                                <img src={mysqlTech} className="h-16 object-contain mx-4 mb-6 rounded-lg" alt=""/>
                                <img src={mongodbTech} className="h-16 object-contain mx-4 mb-6 rounded-lg" alt=""/>
                                <img src={figmaTech} className="h-16 object-contain mx-4 mb-6 rounded-lg" alt=""/>
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
                                    <h3 className="text-justify text-3xl font-semibold my-2">
                                        Design web
                                    </h3>
                                    <p className="text-2xl text-justify">
                                        Réalisation de logos, de designs d'applications web et mobile en utilisant les outils tels que Figma, Adobe Illustrator, Adobe Photoshop.
                                    </p>
                                </div>
                                <div className="w-full border-2 border-neutral-800 px-8 py-10 flex flex-col items-center transition-all ease-in-out hover:shadow-[rgba(255,255,255,0.08)_0px_0px_16px]">
                                    <svg className="h-16 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M20 3H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h7v2H8v2h8v-2h-3v-2h7c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 14V5h16l.002 9H4z"></path>
                                    </svg>
                                    <h3 className="text-justify text-3xl font-semibold my-2">
                                        Developpement web
                                    </h3>
                                    <p className="text-2xl text-justify">
                                        Développement front-end et backend de site web avec les technos tels que ReactJS, Node.js, Django, MongoDB, Firebase.
                                    </p>
                                </div>
                                <div className="w-full border-2 border-neutral-800 px-8 py-10 flex flex-col items-center transition-all ease-in-out hover:shadow-[rgba(255,255,255,0.08)_0px_0px_16px]">
                                    <svg className="h-16 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M17 2H7c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM7 16.999V5h10l.002 11.999H7z"></path>
                                    </svg>
                                    <h3 className="text-justify text-3xl font-semibold my-2">
                                        Developpement mobile
                                    </h3>
                                    <p className="text-justify text-2xl">
                                        Développement Android natif en Java et Kotlin en respectant les normes et bonnes pratiques.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="w-full pt-20">
                        <div className="w-full max-w-screen-xl mx-auto px-4">
                            <h2 className="text-center text-4xl font-bold underline underline-offset-8">
                                Centres d'intérêts
                            </h2>
                            <div className="w-full max-w-2xl mx-auto mt-12 flex flex-col items-center">
                                <h3 className="text-2xl text-center">
                                    Jeux vidéo : je joue de temps en temps. Mes jeux préférés du moment : Candy Crush, PCM (Pro Cycling Manager) et ORI and the blind forest.
                                </h3>
                                <h3 className="text-2xl text-center mt-4">
                                    Dessins (pixel art).
                                </h3>
                                <h3 className="text-2xl text-center mt-4">
                                    Lecture sur Quora.
                                </h3>
                                <h3 className="text-2xl text-center mt-4">
                                    Football.
                                </h3>
                            </div>
                        </div>
                    </section>
                    <Footer/>
                </div>
            </>
        );
    }
}

export default About;