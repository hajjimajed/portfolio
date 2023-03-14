import './projects.styles.scss'
import { useContext, useEffect, useState } from 'react';
import { ProjectsContext } from '../../contexts/projects.contexts';
import Loader from '../../components/loader/loader.component';

import ProjectPreview from '../../components/project-preview/project-preview.component';

const Projects = () => {

    const { projectsMap } = useContext(ProjectsContext);
    const [projects, setProjects] = useState([])

    useEffect(() => {
        if (Array.isArray(projectsMap)) {
            setProjects(projectsMap);
        }
    }, [projectsMap]);

    const [isLoading, setIsLoading] = useState(true);
    const [loadedImages, setLoadedImages] = useState(0);

    useEffect(() => {
        const totalImages = projects.length;
        let loadedImagesCount = 0;
        let timer;

        const handleImageLoad = () => {
            loadedImagesCount++;

            if (loadedImagesCount === totalImages) {
                timer = setTimeout(() => {
                    setIsLoading(false);
                }, 3000);
            }
        };

        projects.forEach((project) => {
            const img = new Image();
            img.src = project.cover;
            img.onload = handleImageLoad;
        });

        return () => {
            clearTimeout(timer);

            projects.forEach((project) => {
                const img = new Image();
                img.src = project.cover;
                img.onload = null;
            });
        };
    }, [projects]);

    if (isLoading) {
        return <Loader />;
    }

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