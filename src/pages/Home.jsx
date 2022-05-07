import { useState } from 'react'

import Footer from '../components/Footer'
import Navbar from '../components/Nabar'

import abouarprosper from '../images/prosperabouar.png'
import linkedInLogo from '../images/bxl-linkedin-square.svg'
import twitterLogo from '../images/bxl-twitter.svg'

const Home = () => {
  return (
      <>
        <div className="w-full bg-black text-white">
          <section className="w-full">
            <div className="w-full max-w-screen-xl mx-auto px-4">
              <Navbar/>
              <div className="flex flex-col items-center lg:flex-row lg:space-x-8 pt-12">
                <div className="bg-transparent w-3/4 h-3/4">
                  <img className="w-full h-full object-contain m-0 p-0" src={abouarprosper} alt="Prosper Abouar"/>
                </div>
                <div className="w-full flex items-center mt-10 lg:mt-0">
                  <div className="">
                    <h1 className="text-3xl md:text-4xl font-bold text-center lg:text-left">
                      Salut, Je suis <span className="font-extrabold text-my-orage-color text-4xl md:text-5xl ml-2">ABOUAR PROSPER</span>
                      <br/>Développeur full-stack
                    </h1>
                    <p className="text-2xl mt-8 text-center lg:text-justify">
                      Grace à mes compétences en développement d’applications web et mobile, je vous aide à avoir une marque de présence en ligne et à développer votre business jusqu’à l’international. J’aide les entreprises à créer les solutions logicielles innovantes et à améliorer l’expérience utilisateur.
                    </p>
                    <p className="text-my-orage-color break-all text-2xl mt-8 text-center lg:text-left">
                      prosper.abouar@gmail.com
                    </p>
                    <div className="flex justify-center lg:justify-start mt-8 space-x-8">
                      <a href="/" className="" target="_blank">
                        <img className="object-contain w-10" src={linkedInLogo} alt="LinkedIn"/>
                      </a>
                      <a href="/" className="" target="_blank">
                        <img className="object-contain w-10" src={twitterLogo} alt="Twitter"/>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full pt-20">
            <div className="w-full max-w-screen-xl mx-auto px-4">
              <h2 className="text-center text-4xl font-bold">
                Mini - a propos
              </h2>
              <p className="text-center lg:text-justify text-2xl mt-12">
                Je m’appelle Abouar Prosper, developpeur web et mobile. Actuellement en alternance et ayant suivis un cursus universitaire jusqu’en licence informatique. Etant passionne par les technologies, mon interet pour l’informatique et en particulier le developpement d’applications s’est vu grandir a vitesse grand V. Je developpe ainsi les applications depuis des annees, et ma qualite premiere est un travail de qualite. Je suis passionne par l’optimisation des performances des applications et leur coherence visuel. 
              </p>
            </div>
          </section>
          <section className="w-full pt-20">
            <div className="w-full max-w-screen-xl mx-auto px-4">
              <h2 className="text-center text-4xl font-bold">
                Contact
              </h2>
              <div className="w-full mt-12 flex flex-col items-center">
                <div className="w-full lg:w-1/2 flex flex-col">
                  <label className="w-full uppercase text-my-gray-color" for="input-name">
                    Nom complet
                  </label>
                  <input className="w-full mt-2 h-12 px-5 text-black text-xl" type="name" id="input-name" placeholder="Votre nom"/>
                </div>
                <div className="w-full lg:w-1/2  flex flex-col items-center mt-8">
                  <label className="w-full uppercase text-my-gray-color" for="input-name">
                    Email
                  </label>
                  <input className="w-full mt-2 h-12 px-5 text-black text-xl" type="email" id="input-name" placeholder="Votre adresse mail"/>
                </div>
                <div className="w-full lg:w-1/2  flex flex-col items-center mt-8">
                  <label className="w-full uppercase text-my-gray-color" for="input-name">
                    Message
                  </label>
                  <textarea className="w-full mt-2 h-32 px-5 py-2 text-black text-xl" id="input-name" placeholder="Votre message"/>
                </div>
                <div className="w-full flex flex-col items-center mt-12">
                  <button type="button" class="text-xl text-black font-bold bg-my-orage-color px-8 py-2.5 text-center focus:outline-none">
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