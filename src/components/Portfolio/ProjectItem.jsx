import React from 'react';

import blogBackground from '../../images/backgrounds/blog-background_small.jpg'

const ProjectItem = (props) => {

    const {project} = props;
    return (
        <a className="relative transition-all ease-in-out hover:scale-[1.03] hover:shadow-[rgba(255,255,255,0.5)_0px_0px_16px]" href={project && project.id ? `/portfolio/projects/`+project.id : `/portfolio/projects/-1`}>
            {
                project ?
                    <div className="w-full">
                        <img className="w-full h-96 object-cover" src={project.img ? project.img : blogBackground} alt={project.name ? project.name : `default-project-name`}/>
                    </div>
                :
                    <div className="w-full">
                        <img className="w-full h-96 object-cover" src={blogBackground} alt="default-project-background"/>
                    </div>
            }
            <div className="absolute bottom-0 z-10 w-full p-4 bg-[#000000a1]">
                <h3 className="text-white text-2xl">
                    {
                        project && project.name ?
                            project.name
                        :
                            `Nom du projet !!!`
                    }
                </h3>
                <p className="text-white text-lg">
                    {
                        project && project.platform ?
                            project.platform
                        :
                            `Web platform !!!`
                    }
                </p>
            </div>
        </a>
    );
};

export default ProjectItem;