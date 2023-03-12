import './project-view.styles.scss'
import { ProjectsContext } from '../../contexts/projects.contexts';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


import Image from '../../components/image/image.component';
import Button from '../../components/button/button.component';


const ProjectView = () => {

    const { projectsMap } = useContext(ProjectsContext);
    const [currentUrl, setCurrentUrl] = useState('');
    const [currentProject, setCurrentProject] = useState({});

    useEffect(() => {
        // Get the current URL path name
        const pathName = window.location.pathname;

        // Extract the last part of the path name after the last '/'
        const urlPart = pathName.substring(pathName.lastIndexOf('/') + 1);

        // Set the state variable to the extracted URL part
        setCurrentUrl(urlPart.replace(/%20/g, ' '));

        // Find the project in the projects map with a matching name
        const matchingProject = projectsMap.find(project => project.name === currentUrl);

        // Update the current project state variable if a matching project is found
        if (matchingProject) {
            setCurrentProject(matchingProject);
        }
    }, [currentUrl, projectsMap]);

    const { name, description1, description2, images, utilities, display, year, github, live } = currentProject;

    return (
        <div className='project-view-container'>
            <div className='prject-description-one'>
                <div className='project-data'>
                    <div className='project-year'>
                        <h4>year</h4>
                        <h5>{year}</h5>
                    </div>
                    <div className='project-utils'>
                        <h4>utilities</h4>
                        {
                            utilities &&
                            utilities.map((utility) => <h3 key={utility}>{utility}</h3>)
                        }
                    </div>
                </div>
                <div className='project-infos'>
                    <h1>{name}</h1>
                    <p>{description1}</p>
                </div>
            </div>

            <div className='project-image'>
                <img src={display} alt="" />
            </div>

            <div className='project-live-view-btns'>
                <Link to={github}>
                    <Button id='btn1' buttonType='primary'>repository</Button>
                </Link>
                <Link to={live}>
                    <Button buttonType='secondary'>live view</Button>
                </Link>
            </div>

            <div className='prject-description-two'>
                <h2>Stand out from the crowd</h2>
                <p>{description2}</p>
            </div>

            <div className='project-gallery'>
                <div className='project-gallery-images'>
                    {
                        images &&
                        images.map((image) => <Image image={image}></Image>)
                    }
                </div>
            </div>

        </div>
    )

}

export default ProjectView;