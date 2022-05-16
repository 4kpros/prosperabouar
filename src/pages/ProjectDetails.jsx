import { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";
import { db } from '../firebase-config'
import { doc, getDoc } from 'firebase/firestore/lite';

import Footer from '../components/Footer';
import Navbar from '../components/Nabar';
import ImageSwiper from '../components/Portfolio/ImageSwiper'

import defaultBackground from '../images/backgrounds/default-background_small.webp'

const ProjectDetails = () => {

    document.title = 'Projet ';

    const {id} = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [project, setProject] = useState();

    useEffect(() => {
        window.scrollTo(0, 0);
        
        const getProductDetails = async () => {
            setIsLoading(true)
            const docRef = doc(db, "projects", id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setProject(docSnap.data())
                document.title = 'Projet ' + docSnap.data().name;
            }
            setIsLoading(false)
        }
        
        if(id)
            getProductDetails()
        
    }, [])

    return (
        <>
        <div className="w-full text-white">
          <section className="w-full">
            <div className="w-full max-w-screen-xl mx-auto px-4">
              <Navbar/>
            </div>
          </section>
          <section className="w-full min-h-[70vh] pt-8">
            <div className="w-full max-w-screen-xl mx-auto px-4">
                <div className="w-full border border-neutral-800 md:p-12">
                    <div className="">
                        <Link  to={`/portfolio`} className="flex flex-row flex-wrap items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="fill-white" width="24" height="24" viewBox="0 0 24 24" >
                                <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
                            </svg>
                            <h1 className="font-bold text-lg ml-2">Retour</h1>
                        </Link>
                    </div>
                    {
                        isLoading ?
                            <div className="w-full max-w-[65ch] mx-auto flex flex-col items-center my-12 animate-pulse space-y-4">
                                <div className="w-full h-16 bg-[#ffffff03]"></div>
                                <div className="w-full h-96 bg-[#ffffff03]"></div>
                                <div className="w-full h-40 bg-[#ffffff03]"></div>
                                <div className="w-full h-96 bg-[#ffffff03]"></div>
                            </div>
                        :
                            project ?
                                <div className="w-full flex justify-center my-12">
                                    <article className="prose prose-h1:underline prose-a:text-my-orage-color prose-invert">
                                        <h1>
                                            {project.name}
                                        </h1>
                                        <img className="w-auto max-h-96 object-contain" src={project.cover_art ? project.cover_art : defaultBackground} alt={project.name} />
                                        <h3 className="">
                                            {project.description1}
                                        </h3>
                                        <div className="w-full not-prose py-4">
                                            <ImageSwiper images={project.images} />
                                        </div>
                                        <h3 className="">
                                            {project.description2}
                                        </h3>
                                        {
                                            project && project.link ?
                                                <div className="flex items-center">
                                                    <p className="mr-2">Lien vers le projet : </p>
                                                    <a href={project.link} target="_blank" rel="noreferrer">
                                                        {project.name}
                                                    </a>
                                                </div>
                                            :
                                                null
                                        }
                                    </article>
                                </div>
                            :
                                <div className="w-full flex justify-center my-12">
                                    <article className="prose prose-h1:underline prose-a:text-my-orage-color prose-invert">
                                        <h2>
                                            Projet invalide !
                                        </h2>
                                        <p>
                                            Le projet semble invalide ou a été supprimé. Veillez retourner à la page de projets.
                                        </p>
                                        <div className="my-12">
                                            <Link  to={`/portfolio`}>
                                                <button className="text-lg text-black font-bold bg-my-orage-color px-6 py-2 text-center focus:outline-none">
                                                    Vers portfolio
                                                </button>
                                            </Link>
                                        </div>
                                    </article>
                                </div>
                    }
                </div>
                
            </div>
          </section>
          <Footer/>
        </div>
      </>
    );
};

export default ProjectDetails;