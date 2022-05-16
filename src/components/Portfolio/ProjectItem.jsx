
import { Link } from 'react-router-dom'

import defaultBackground from '../../images/backgrounds/default-background_small.webp'

const ProjectItem = (props) => {

    const {project} = props;
    
    return (
        <Link to={project && project.id ? `/portfolio/projects/`+project.id : `/portfolio/projects/-1`} className="relative transition-all ease-in-out hover:scale-[1.01] hover:shadow-[rgba(255,255,255,0.5)_0px_0px_16px]">
            {
                project ?
                    <div className="w-full">
                        <img className="w-full h-72 object-cover" width="300" height="300" src={project.cover_art ? project.cover_art : defaultBackground} alt={project.name ? project.name : `default-project-name`}/>
                    </div>
                :
                    <div className="w-full">
                        <img className="w-full h-72 object-cover" width="300" height="300" src={defaultBackground} alt="default-project-background"/>
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
        </Link>
    );
};

export default ProjectItem;