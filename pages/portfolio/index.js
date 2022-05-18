
import { useEffect, useState } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore/lite'

import { db } from '../../components/configs/firebase.config'
import ProjectItem from '../../components/portfolio/ProjectItem'
import Layout from '../../components/Layout'

import 'react-toastify/dist/ReactToastify.css'

const projectsCollectionRef = collection(db, "projects");
const title = 'Portfolio'
const subtitle = "Une sélection des projets récents sur lesquels j'ai travaillé."

export default function Portfolio({projects}){
    
    const [isLoading, setIsLoading] = useState(false);
    const [reloadedProjects, setReloadedProjects] = useState();
    const [errors, setErrors] = useState();
    const [projectUnvalidated, setProjectUnvalidated] = useState(false);;
    
    const getProjects = async (platform) => {
        setIsLoading(true)
        setReloadedProjects()
        setErrors()
        setProjectUnvalidated(true)
        const q = query(projectsCollectionRef, where("platform", "==", platform));
        const data = await getDocs(q)
        .catch(function (error) {
            setErrors("Une erreur est survenue ! Veillez actualiser la page.")
        });
        const tempProjects = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
        if(tempProjects && tempProjects.length > 0)
            setReloadedProjects(tempProjects)
        setIsLoading(false)
    }

    let loadingItems = [];
    for (var i = 0; i < 6; i++) {
        loadingItems.push(
        <div className="w-full relative animate-pulse">
            <div className="w-full h-72 bg-[#ffffff03]">
            </div>
            <div className="absolute bottom-0 z-10 w-full p-4 bg-[#ffffff03]">
                <div className="w-full h-16">
                </div>
            </div>
        </div>
        );
    }

    return (
        <Layout title={title} description={subtitle}>
            <div className="w-full text-white">
                <section className="w-full pt-20 min-h-screen">
                    <div className="w-full max-w-screen-xl mx-auto px-4">
                        <h2 className="text-center text-3xl font-bold underline underline-offset-8">
                            Projets recents
                        </h2>
                        <div className="w-full flex flex-wrap md:flex-nowrap justify-start items-center mt-12">
                        <label className="text-lg mr-2" htmlFor="select-filter-projects">
                            Filter les projets
                        </label>
                        <select onChange={(e) => {getProjects(e.target.value)}} className="max-w-full appearance-none mx-2 form-select bg-black bg-clip-padding bg-no-repeat border border-solid border-neutral-700 text-white transition ease-in-out py-2 px-4" id="select-filter-projects" aria-label="Select projet platform">
                            <option defaultValue value="Web" className="">
                                Web
                            </option>
                            <option value="Mobile" className="">
                                Mobile
                            </option>
                            <option value="UI-UX design" className="">
                                UI-UX design
                            </option>
                        </select>
                        </div>
                        <div className="w-full mt-12">
                        {
                            isLoading ?
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-40">
                                    {loadingItems}
                                </div>
                            :
                                reloadedProjects && reloadedProjects.length > 0?
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-40">
                                        {
                                            reloadedProjects.map((project, index) => {
                                                return(
                                                    <ProjectItem project={project} key={index}/>
                                                )
                                            })
                                        }
                                    </div>
                                :
                                    !projectUnvalidated && projects && projects.length > 0 ?
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-40">
                                            {
                                                projects.map((project, index) => {
                                                    return(
                                                        <ProjectItem project={project} key={index}/>
                                                    )
                                                })
                                            }
                                        </div>
                                    :
                                        errors ?
                                            <p className="text-xl text-my-gray-color">
                                                {errors}
                                            </p>
                                        :
                                            <p className="text-xl text-my-gray-color">
                                                Aucun projet pour cette plateforme !
                                            </p>
                    }
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export async function getStaticProps () {
    const q = query(projectsCollectionRef, where("platform", "==", "Web"));
    const data = await getDocs(q)
    let projects
    if(data)
        projects = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
    return {
        props: {
            projects
        },
        revalidate: 86400
    }
}