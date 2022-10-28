import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'

const ProjectItem = (props) => {
    const {project} = props;
    const { t } = useTranslation('common')

    const visitProject = t('visitProject')
    const sourceCode = t('sourceCode')

    
    return (
        <div className='w-full bg-white shadow-[0px_0px_6px_6px_rgba(0,0,0,0.025)]'>
            <div className='w-full'>
                {
                    <div className="w-full">
                        <Image className="w-full h-auto object-cover object-top" 
                            width={450} 
                            height={300} 
                            layout="responsive" 
                            placeholder="blur" 
                            blurDataURL={project.cover_art ? project.cover_art : "/images/backgrounds/default-background_small.webp"} 
                            src={project.cover_art ? project.cover_art : "/images/backgrounds/default-background_small.webp"} 
                            alt={project.name ? project.name : `default-project-name`}
                        />
                    </div>
                }
                <div className='w-full flex flex-col p-4 text-sm'>
                    <div className="w-full">
                        <p className="text-my-text-color font-bold">
                            {
                                project && project.name ?
                                    `${project.name} 
                                    (${
                                        project && project.type ?
                                            project.type
                                        :
                                            ``
                                    })
                                    `
                                :
                                    ``
                            }
                        </p>
                    </div>
                    <div className="w-full flex flex-wrap">
                        <p className="w-auto opacity-70">
                            {
                                project && project.technos && project.technos.length > 0 ?
                                    project.technos.map((techno, index) => {
                                        return(
                                                index > 0 ? `, ${techno}` : `${techno}`
                                        )
                                    })
                                :
                                    ``
                            }
                        </p>
                    </div>
                    <div className="w-full flex truncate ... pt-2">
                        <a href={project.link} target="_blank" rel="noreferrer" className="w-auto truncate ... underline hover:text-my-main-color">
                            {
                                project && project.link ?
                                    `${visitProject}`
                                :
                                    ``
                            }
                        </a>
                    </div>
                    <div className="w-full flex truncate ... pt-2">
                        <a href={project.github} target="_blank" rel="noreferrer" className="w-auto truncate ... underline hover:text-my-main-color">
                            {
                                project && project.github ?
                                    `${sourceCode}`
                                :
                                    ``
                            }
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;