
import Link from 'next/link'
import Image from 'next/image'
import { LazyMotion, domAnimation, m } from 'framer-motion'

const ProjectItem = (props) => {

    const {project} = props;
    
    return (
        <Link href={project && project.id ? `/portfolio/`+project.id : `/portfolio/projects/-1`}>
            <a className="relative">
                <LazyMotion features={domAnimation}>
                    <m.div
                        className=""
                        whileHover={{scale:1.025}}
                    >
                        {
                            project ?
                                <div className="w-full">
                                    <Image className="w-full h-auto object-cover" 
                                        width={450} 
                                        height={288} 
                                        layout="responsive" 
                                        placeholder="blur" 
                                        blurDataURL={project.cover_art ? project.cover_art : "/images/backgrounds/default-background_small.webp"} 
                                        src={project.cover_art ? project.cover_art : "/images/backgrounds/default-background_small.webp"} 
                                        alt={project.name ? project.name : `default-project-name`}
                                    />
                                </div>
                            :
                                <div className="w-full">
                                    <Image className="w-full h-72 object-cover" width={450} height={288} layout="responsive" placeholder="blur" blurDataURL="/images/backgrounds/default-background_small.webp" src="/images/backgrounds/default-background_small.webp" alt="default-project-background"/>
                                </div>
                        }
                        <div className="absolute bottom-0 z-10 w-full p-4 bg-[#000000a1]">
                            <h3 className="text-white text-xl">
                                {
                                    project && project.name ?
                                        project.name
                                    :
                                        `Nom du projet !!!`
                                }
                            </h3>
                        </div>
                    </m.div>
                </LazyMotion>
            </a>
        </Link>
    );
};

export default ProjectItem;