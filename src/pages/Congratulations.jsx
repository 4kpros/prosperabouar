import React from 'react';
import { Link } from 'react-router-dom';

import sitelogo from '../images/site-logo.png'
import congratulationsimg from '../images/animated/congratulations.gif'

const Congratulations = () => {
    return (
        <div className="w-full text-white">
            
            <div className="w-full max-w-screen-xl h-screen mx-auto px-4">
              <div className="w-full min-h-screen flex justify-center items-center lg:space-y-8">
                <div className="flex flex-col justify-center items-center border-2 border-neutral-800 px-12 py-20  transition-all ease-in-out hover:shadow-[rgba(255,255,255,0.08)_0px_0px_16px]">
                    <img className="w-auto h-32 md:h-40 m-auto object-contain mb-12" src={sitelogo} alt="prosperabouar-brand"/>
                    <img className="w-auto h-24 md:h-32 m-auto object-contain mb-4" src={congratulationsimg} alt="congratulations-anim"/>
                    <h3 className="text-center text-4xl font-semibold">
                        Message envoyé avec succès
                    </h3>
                    <p className="text-center text-xl text-gray-400 mt-4">
                        Votre message a bel et bien été envoyé. Merci pour votre prise de contact. Vous serez très prochainement contacte.
                    </p>
                    <div className="mt-12">
                        <Link to="/">
                            <button className="text-xl text-black font-bold bg-my-orage-color px-8 py-2.5 text-center focus:outline-none">
                                Retourner à la page d'accueil
                            </button>
                        </Link>
                    </div>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Congratulations;