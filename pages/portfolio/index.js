
import { useState } from 'react'

import ProjectItem from '../../components/portfolio/ProjectItem'
import Layout from '../../components/Layout'

import 'react-toastify/dist/ReactToastify.css'

const title = 'Portfolio'
const subtitle = "Une sélection des projets récents sur lesquels j'ai travaillé."

import importedprojects from '../../components/data/projects.json'

export default function Portfolio(){

    const [projects, setProjects] = useState(
        importedprojects.filter(item => {
            return item.platform === "Web"
        })
    )
    const [selectedProject, setSelectedProject] = useState("Web")
    
    const getProjects = async (platform) => {
        setSelectedProject(platform)
        setProjects(
            importedprojects.filter(item => {
                return item.platform === platform
            })
        )
    }

    const projectsTitle = [
        "Web",
        "Mobile",
        "UX-UI design"
    ]

    return (
        <Layout title={title} description={subtitle}>
            <div className="w-full text-white">
                <section className="w-full pt-20 min-h-screen">
                    <div className="w-full max-w-screen-xl mx-auto px-4">
                        <h2 className="text-center text-3xl font-bold underline underline-offset-8">
                            Projets recents
                        </h2>
                        <div className="w-full flex flex-wrap md:flex-nowrap justify-start items-center mt-12">
                            <div className="w-full flex flex-wrap items-center">
                                {
                                    projectsTitle ?
                                        projectsTitle.map((title, index) => {
                                            return(
                                                <div Key={index} className={selectedProject === title ? 'border border-my-orage-color text-lg mr-2 my-2 transition-all ease-in-out' : 'border border-my-gray-color text-lg mr-2 my-2 transition-all ease-in-out'}>
                                                    <button onClick={() => getProjects(title)} className={selectedProject === title ? 'text-black font-bold bg-my-orage-color px-6 py-1.5 text-center transition-all ease-in-out' : 'text-my-gray-color font-bold bg-transparent px-6 py-1.5 text-center transition-all ease-in-out'}>
                                                        {title}
                                                    </button>
                                                </div>
                                            )
                                        })
                                    :
                                        <p>Vide</p>
                                }
                            </div>
                        </div>
                        <div className="w-full mt-12">
                        {
                            projects && projects.length > 0 ?
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