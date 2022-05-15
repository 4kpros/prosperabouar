import { useEffect } from 'react';
import { Link } from 'react-router-dom';


import Footer from '../components/Footer'
import Navbar from '../components/Nabar'


const Error404 = () => {

    document.title = 'Erreur 404 !';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <div className="w-full text-white">
                <section className="w-full">
                    <div className="w-full max-w-screen-xl mx-auto px-4">
                    <Navbar/>
                    </div>
                </section>
                <section className="w-full">
                    <div className="w-full max-w-screen-xl mx-auto px-4">
                        <div className="w-full md:w-1/2 min-h-[80vh] mx-auto mt-20">
                            <div className="w-full flex flex-col items-center border-2 border-neutral-800 px-12 py-20  transition-all ease-in-out hover:shadow-[rgba(255,255,255,0.08)_0px_0px_16px]">
                                <iframe src="https://embed.lottiefiles.com/animation/90569" title="error-lottie-animation"></iframe>
                                <h3 className="text-center text-3xl font-semibold">
                                    ERREUR 404 !
                                </h3>
                                <p className="text-center text-xl text-gray-400 mt-4">
                                    Cette page semble ne pas exister. Veillez retourner à la page d'accueil.
                                </p>
                                <div className="mt-12">
                                    <Link to="/">
                                        <button className="text-lg text-black font-bold bg-my-orage-color px-6 py-2 text-center focus:outline-none">
                                            Page d'accueil
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
        </>
    );
};

export default Error404;