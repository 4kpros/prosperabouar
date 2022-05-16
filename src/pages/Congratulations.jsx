import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Congratulations = () => {
    
    document.title = 'Votre message a été envoyé';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="w-full text-white">
            <div className="w-full max-w-screen-xl h-screen mx-auto px-4">
              <div className="w-full min-h-screen flex justify-center items-center lg:space-y-8">
                <div className="w-full md:w-1/2 flex flex-col justify-center items-center border-2 border-neutral-800 px-12 py-20  transition-all ease-in-out hover:shadow-[rgba(255,255,255,0.08)_0px_0px_16px]">
                    <iframe className="w-auto h-24 md:h-32 m-auto object-contain mb-4" title="iframe-congratulations" src="https://embed.lottiefiles.com/animation/91001"></iframe>
                    <h3 className="text-center text-3xl font-semibold">
                        Message envoyé avec succès
                    </h3>
                    <p className="text-center text-xl text-gray-400 mt-4">
                        Votre message a bel et bien été envoyé. Merci pour votre prise de contact. Vous serez très prochainement contacte.
                    </p>
                    <div className="mt-12">
                        <Link to="/">
                            <button className="text-lg text-black font-bold bg-my-orage-color px-6 py-2 text-center focus:outline-none">
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