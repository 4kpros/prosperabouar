import ProjectItem from '../../components/portfolio/ProjectItem'

import Layout from '../../components/Layout'

import projects from '../../components/data/projects.json'

const title = 'Projets'
const subtitle = "Une sélection des projets récents sur lesquels j&apos;ai travaillé."

export default function Projects(){

    return (
        <Layout title={title} description={subtitle}>
            <div className="w-full max-w-screen-xl mx-auto p-8">
                <div className="w-full text-white">
                    <section className="w-full py-4">
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
                                <p className="text-my-gray-color">
                                    Aucun projet pour l&apos;instant !
                                </p>
                        }
                    </section>
                </div>
            </div>
        </Layout>
    );
};