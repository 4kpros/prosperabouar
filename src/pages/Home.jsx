import { useState } from 'react'

import Footer from '../components/Footer'
import Navbar from '../components/Nabar'

import abouarprosper from '../images/profile/prosperabouar.png'
import linkedInLogo from '../images/svg/bxl-linkedin-square.svg'
import twitterLogo from '../images/svg/bxl-twitter.svg'
import githubLogo from '../images/svg/bxl-github.svg'

const Home = () => {
  return (
      <>
        <div className="w-full text-white">
          <section className="w-full">
            <div className="w-full max-w-screen-xl mx-auto px-4">
              <Navbar selectedNavItem='Home'/>
              <div className="flex flex-col items-center lg:flex-row lg:space-x-8 pt-12">
                <div className="bg-transparent w-3/4 h-3/4">
                  <img className="w-full h-full object-contain m-0 p-0" src={abouarprosper} alt="Prosper Abouar"/>
                </div>
                <div className="w-full flex items-center mt-10 lg:mt-0">
                  <div className="">
                    <h1 className="text-3xl md:text-4xl font-bold text-center lg:text-left">
                      Salut, Je suis <span className="font-extrabold text-my-orage-color text-4xl md:text-5xl ml-2">ABOUAR PROSPER</span>
                      <br/>Développeur web
                    </h1>
                    <p className="text-2xl mt-8 text-center lg:text-justify">
                      Adepte de l’amélioration de l’expérience utilisateur et des performances dans le domaine du développement d'applications, ma passion pour ce secteur me pousse chaque jour à me surpasser.
                    </p>
                    <p className="text-2xl mt-2 text-center lg:text-justify">
                      Je suis principalement développeur front-end ayant de grosses connaissances en développement backend et mobile.
                    </p>
                    <p className="text-2xl mt-2 text-center lg:text-justify">
                      Contactez moi pour une collaboration.
                    </p>
                    <p className="text-my-orage-color break-all text-2xl mt-8 text-center lg:text-left">
                      prosper.abouar@gmail.com
                    </p>
                    <div className="flex justify-center lg:justify-start mt-8 space-x-8">
                      <a href="https://www.linkedin.com/in/prosper-abouar-408089134/" className="" target="_blank" rel="noreferrer">
                        <img className="object-contain w-10" src={linkedInLogo} alt="LinkedIn"/>
                      </a>
                      <a href="https://twitter.com/4kprosZ" className="" target="_blank" rel="noreferrer" >
                        <img className="object-contain w-10" src={twitterLogo} alt="Twitter"/>
                      </a>
                      <a href="https://github.com/4kpros" className="" target="_blank" rel="noreferrer" >
                        <img className="object-contain w-10" src={githubLogo} alt="Twitter"/>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full pt-20">
            <div className="w-full max-w-screen-xl mx-auto px-4">
              <h2 className="text-center text-4xl font-bold underline underline-offset-8">
                Liens utiles
              </h2>
              <p className="text-center text-2xl mt-12">
                Pour en savoir plus sur moi, veillez cliquer sur <a href="/about" className="text-my-orage-color underline">ce lien.</a>
              </p>
              <p className="text-center text-2xl mt-4">
                Une page qui contient mes projets récents est disponible à <a href="/portfolio" className="text-my-orage-color underline">cette adresse.</a>
              </p>
              <p className="text-center text-2xl mt-4">
                J'ai également un mini blog qui contient mes publications concernant le développement d’applications et l'entreprenariat. Pour voir mes publications, 
                 Veillez cliquer sur <a href="/blog" className="text-my-orage-color underline">ce lien.</a>
              </p>
            </div>
          </section>
          <section className="w-full pt-20">
            <div className="w-full max-w-screen-xl mx-auto px-4">
              <h2 className="text-center text-4xl font-bold underline underline-offset-8">
                Contact
              </h2>
              <div className="w-full mt-12 flex flex-col items-center">
                <div className="w-full lg:w-1/2 flex flex-col">
                  <label className="w-full uppercase text-my-gray-color" htmlFor="input-name">
                    Nom complet
                  </label>
                  <input className="w-full mt-2 h-12 px-5 text-black text-xl" type="name" id="input-name" placeholder="Votre nom"/>
                </div>
                <div className="w-full lg:w-1/2  flex flex-col items-center mt-8">
                  <label className="w-full uppercase text-my-gray-color" htmlFor="input-name">
                    Email
                  </label>
                  <input className="w-full mt-2 h-12 px-5 text-black text-xl" type="email" id="input-name" placeholder="Votre adresse mail"/>
                </div>
                <div className="w-full lg:w-1/2  flex flex-col items-center mt-8">
                  <label className="w-full uppercase text-my-gray-color" htmlFor="input-name">
                    Message
                  </label>
                  <textarea className="w-full mt-2 h-32 px-5 py-2 text-black text-xl" id="input-name" placeholder="Votre message"/>
                </div>
                <div className="w-full flex flex-col items-center mt-12">
                  <button type="button" className="text-xl text-black font-bold bg-my-orage-color px-8 py-2.5 text-center focus:outline-none">
                    Envoyer
                  </button>
                </div>
              </div>
            </div>
          </section>
          <Footer/>
        </div>
      </>
  );
};

export default Home;