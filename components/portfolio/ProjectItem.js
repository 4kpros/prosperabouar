import Image from 'next/image'
import { LazyMotion, domAnimation, m } from 'framer-motion'

const ProjectItem = (props) => {

    const {project} = props;
    
    return (
        <div className='w-full bg-gradient-to-tl from-[#0c1214] to-transparent shadow-[0px_0px_6px_6px_rgba(212,233,255,0.09)]'>
            <div className='w-full text-[rgba(255,255,255,0.5)] text-lg'>
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
                        <p className="text-xl text-white font-bold">
                            {
                                project && project.name ?
                                    project.name
                                :
                                    `Nom du projet !`
                            }
                        </p>
                    </div>
                    <div className="w-full flex flex-wrap pt-2">
                        <label className='mr-1 underline' htmlFor=''>
                            Technos : 
                        </label>
                        <p className="">
                            {
                                project && project.technos && project.technos.length > 0 ?
                                    project.technos.map((techno, index) => {
                                        return(
                                                index > 0 ? `, ${techno}` : `${techno}`
                                        )
                                    })
                                :
                                    `Aucune techno !`
                            }
                        </p>
                    </div>
                    <div className="w-full flex flex-wrap pt-2">
                        <label className='mr-1 underline' htmlFor=''>
                            Plateforme : 
                        </label>
                        <p className="">
                            {
                                project && project.platform ?
                                    project.platform
                                :
                                    `Nom du projet !`
                            }
                        </p>
                    </div>
                    <div className="w-full flex flex-wrap pt-2">
                        <label className='mr-1 underline' htmlFor=''>
                            Catégorie : 
                        </label>
                        <p className="">
                            {
                                project && project.type ?
                                    project.type
                                :
                                    `Aucune catégorie !`
                            }
                        </p>
                    </div>
                    <div className="w-full flex flex-wrap pt-2">
                        <label className='mr-1 underline' htmlFor=''>
                            Code source : 
                        </label>
                        <a href={project.github} target="_blank" rel="noreferrer" className="">
                            {
                                project && project.github ?
                                    project.github
                                :
                                    ``
                            }
                        </a>
                    </div>
                    <div className="w-full flex flex-wrap pt-2">
                        <label className='mr-1 underline' htmlFor=''>
                            Lien : 
                        </label>
                        <a href={project.link} target="_blank" rel="noreferrer" className="">
                            {
                                project && project.link ?
                                    project.link
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