import { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";
import { db } from '../firebase-config'
import { doc, getDoc, where } from 'firebase/firestore/lite';
import isEmpty from 'validator'

import Footer from '../components/Footer';
import Navbar from '../components/Nabar';

import defaultBackground from '../images/backgrounds/blog-background_small.jpg'

const ProjectDetails = () => {

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
                console.log("Document data:", docSnap.data());
                setProject(docSnap.data())
            } else {
                console.log("No such document!");
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
                                        <img className="w-full h-96 object-cover" src={project.cover_art && !isEmpty(project.cover_art) ? project.cover_art : defaultBackground} alt={project.name} />
                                        <h3 className="">
                                            {project.description1}
                                        </h3>
                                        <div className="w-full grid grid-cols-2 gap-4 not-prose py-4">
                                            {
                                                project.images ?
                                                    project.images.map((image, i) => {
                                                        return(
                                                            <div className="w-full">
                                                                <img src={image && !isEmpty(image) ? image : defaultBackground} className="w-full object-cover" alt={project.name + ` ` +i}/>
                                                            </div>
                                                        )
                                                    })
                                                :
                                                    null
                                            }
                                        </div>
                                        <h3 className="">
                                            {project.description2}
                                        </h3>
                                        <div className="flex items-center">
                                            <p className="mr-2">Le lien : </p>
                                            <a href={project.link} target="_blank" rel="noreferrer">
                                                {project.name}
                                            </a>
                                        </div>
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