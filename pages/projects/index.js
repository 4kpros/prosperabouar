import { useState } from 'react'

import 'react-toastify/dist/ReactToastify.css'

import ProjectItem from '../../components/portfolio/ProjectItem'

import Layout from '../../components/Layout'

import projects from '../../components/data/projects.json'

const title = 'Projets'
const subtitle = "Une sélection des projets récents sur lesquels j&apos;ai travaillé."

export default function Projects(){

    return (
        <Layout title={title} description={subtitle}>
            <div className="w-full max-w-screen-xl mx-auto px-8 py-8">
                <div className="w-full px-4 md:px-8 pb-12 text-white text-xl ">
                    <section className="w-full py-5">
                        <div className='w-auto font-bold text-2xl mb-8'>
                            Liste de quelques projets personnels et d&apos;apprentissage
                        </div>
                        {
                            projects && projects.length > 0 ?
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-40 mt-4">
                                    {
                                        projects.map((project, index) => {
                                            return(
                                                <ProjectItem project={project} key={index}/>
                                            )
                                        })
                                    }
                                </div>
                            :
                                <p className="text-xl text-my-gray-color mt-8">
                                    Aucun projet pour l&apos;instant !
                                </p>
                        }
                    </section>
                </div>
            </div>
        </Layout>
    );
};