import './projects.styles.scss'
import { useContext, useEffect, useState } from 'react';
import { ProjectsContext } from '../../contexts/projects.contexts';

import ProjectPreview from '../../components/project-preview/project-preview.component';

const Projects = () => {

    const { projectsMap } = useContext(ProjectsContext);
    const [projects, setProjects] = useState([])

    useEffect(() => {
        if (Array.isArray(projectsMap)) {
            setProjects(projectsMap);
        }
    }, [projectsMap]);


    return (
        <div className='projects-container'>
            {
                projects &&
                projects.map((project) => <ProjectPreview key={project.id} project={project} />)
            }
        </div>
    )
}

export default Projects;