import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'

import ProjectItem from '../../components/portfolio/ProjectItem'
import Layout from '../../components/Layout'

import projects from '../../components/data/projects.json'


export default function Projects(){
    const { t } = useTranslation('projects')
  
    const pageTile = t('pageTile')
    const pageDescription = t('pageDescription')
  
    const noneProject = t('noneProject')

    return (
        <Layout title={pageTile} description={pageDescription}>
            <div className="w-full max-w-screen-xl mx-auto md:p-8 text-my-text-color">
                <div className="w-full">
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
                                {noneProject}
                            </p>
                    }
                </div>
            </div>
        </Layout>
    );
};