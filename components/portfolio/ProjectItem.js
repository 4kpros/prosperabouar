
import Link from 'next/link'
import Image from 'next/image'
import { LazyMotion, domAnimation, m } from 'framer-motion'

const ProjectItem = (props) => {

    const {project} = props;
    
    return (
        <Link href={project && project.id ? `/portfolio/`+project.id : `/portfolio/projects/-1`} className="transition-all ease-in-out hover:scale-[1.01] hover:shadow-[rgba(255,255,255,0.5)_0px_0px_16px]">
            <div className="relative cursor-pointer transition-all ease-in-out hover:scale-[1.01] hover:shadow-[rgba(255,255,255,0.5)_0px_0px_16px]">
                {
                    project ?
                        <div className="w-full">
                            <LazyMotion features={domAnimation}>
                                <m.div
                                    className="border border-my-orage-color"
                                    whileHover={{scale:1.025}}
                                >
                                    <Image className="w-full h-auto object-cover m-0 p-0 bg-my-footer-color" 
                                        width={450} 
                                        height={288} 
                                        layout="responsive" 
                                        placeholder="blur" 
                                        blurDataURL={project.cover_art ? project.cover_art : "/images/backgrounds/default-background_small.webp"} 
                                        src={project.cover_art ? project.cover_art : "/images/backgrounds/default-background_small.webp"} 
                                        alt={project.name ? project.name : `default-project-name`}
                                    />
                                </m.div>
                            </LazyMotion>
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
            </div>
        </Link>
    );
};

export default ProjectItem;