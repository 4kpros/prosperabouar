import { useState } from 'react'

import 'react-toastify/dist/ReactToastify.css'

import Layout from '../../components/Layout'

import projects from '../../components/data/projects.json'

const title = 'Portfolio'
const subtitle = "Une sélection des projets récents sur lesquels j&apos;ai travaillé."

export default function Portfolio(){

    return (
        <Layout title={title} description={subtitle}>
            <div className="w-full text-white">
                <section className="w-full pt-20 min-h-screen">
                    <div className="w-full max-w-screen-xl mx-auto px-4">
                        <div className="w-full flex flex-wrap md:flex-nowrap justify-start items-center mt-12">
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
                                        Aucun projet pour l&apos;instant !
                                    </p>
                            }
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};