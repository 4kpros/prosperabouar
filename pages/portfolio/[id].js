import { useEffect, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore/lite';

import { db } from '../../components/configs/firebase.config'

import Layout from '../../components/Layout'
import ImageSwiper from '../../components/portfolio/ImageSwiper'

const projectsCollectionRef = collection(db, "projects");
const title = 'Details du projet'
const subtitle = "Page qui présente les détails sur un projet."

export default function Portfolio ({param}) {

    const [isLoading, setIsLoading] = useState(true);
    const [project, setProject] = useState();

    useEffect(() => {
        const getProductDetails = async () => {
            if(param.id){
                setIsLoading(true)
                const docRef = doc(db, "projects", param.id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setProject(docSnap.data())
                    document.title = 'Projet ' + docSnap.data().name;
                }
                setIsLoading(false)
            }
        }
        
        
        getProductDetails()
        
    }, [])

    return (
        <Layout title={title} description={subtitle}>
            <div className="w-full text-white">
                <section className="w-full min-h-[70vh] pt-8">
                    <div className="w-full max-w-screen-xl mx-auto px-4">
                        <div className="w-full border border-neutral-800 md:p-12">
                            <div className="">
                                <Link href={`/portfolio`}>
                                    <a className="flex flex-row flex-wrap items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-white" width="24" height="24" viewBox="0 0 24 24" >
                                            <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
                                        </svg>
                                        <h1 className="font-bold text-lg ml-2">Retour</h1>
                                    </a>
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
                                                <Image width={450} height={288} layout="responsive" placeholder="blur" blurDataURL={project.cover_art ? project.cover_art : '../../images/backgrounds/default-background_small.webp'}  src={project.cover_art ? project.cover_art : '../../images/backgrounds/default-background_small.webp'} alt={project.name} />
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
                                                    <Link href={`/portfolio`}>
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
        </div>
      </Layout>
    );
};

export async function getStaticProps ({params}) {
    const param = params 
    return {
        props: {
            param
        },
        revalidate: 86400
    }
}

export async function getStaticPaths () {
    const data = await getDocs(projectsCollectionRef)
    const projects = (data.docs.map((doc) => ({...doc.data(), id: doc.id})))

    return {
        paths: projects.map( project => ({
            params: {id: project.id.toString()}
        })),
        fallback: false
    }
}