import './project-view.styles.scss'
import { ProjectsContext } from '../../contexts/projects.contexts';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Imagee from '../../components/image/image.component'
import Button from '../../components/button/button.component';
import { SmoothProvider } from 'react-smooth-scrolling';
import Loader from '../../components/loader/loader.component';


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

    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        if (images && Array.isArray(images)) {
            const imageLoaders = images.map((imgSrc) => {
                const image = new Image();
                image.src = imgSrc;
                return new Promise((resolve) => {
                    image.onload = resolve;
                });
            });

            Promise.all(imageLoaders).then(() => {
                setTimeout(() => {
                    setImagesLoaded(true);
                }, 3000);
            });
        }
    }, [currentProject, images]);

    return (
        <>
            {!imagesLoaded && <Loader />}
            {imagesLoaded && (
                <div className='project-view-container'>
                    <div className='prject-description-one'>
                        <div className='project-data'>
                            <div className='project-year'>
                                <motion.h4
                                    initial={{ translateY: 20, opacity: 0 }}
                                    animate={{ translateY: 0, opacity: 1 }}
                                    transition={{
                                        type: "spring",
                                        duration: 0.8,
                                        delay: 0.5
                                    }}
                                >year</motion.h4>
                                <motion.h5
                                    initial={{ translateY: 20, opacity: 0 }}
                                    animate={{ translateY: 0, opacity: 1 }}
                                    transition={{
                                        type: "spring",
                                        duration: 0.5,
                                        delay: 0.7
                                    }}
                                >{year}</motion.h5>
                            </div>
                            <div className='project-utils'>
                                <motion.h4
                                    initial={{ translateY: 20, opacity: 0 }}
                                    animate={{ translateY: 0, opacity: 1 }}
                                    transition={{
                                        type: "spring",
                                        duration: 0.8,
                                        delay: 0.5
                                    }}
                                >utilities</motion.h4>
                                {
                                    utilities &&
                                    utilities.map((utility) => <motion.h3
                                        initial={{ translateY: 20, opacity: 0 }}
                                        animate={{ translateY: 0, opacity: 1 }}
                                        transition={{
                                            type: "spring",
                                            duration: 0.5,
                                            delay: 0.7
                                        }}
                                        key={utility}>{utility}</motion.h3>)
                                }
                            </div>
                        </div>
                        <div className='project-infos'>
                            <motion.h1
                                initial={{ translateY: 20, opacity: 0 }}
                                animate={{ translateY: 0, opacity: 1 }}
                                transition={{
                                    type: "spring",
                                    duration: 0.8,
                                    delay: 0.5
                                }}
                            >{name}</motion.h1>
                            <motion.p
                                initial={{ translateY: 20, opacity: 0 }}
                                animate={{ translateY: 0, opacity: 1 }}
                                transition={{
                                    type: "spring",
                                    duration: 0.5,
                                    delay: 0.7
                                }}
                            >{description1}</motion.p>
                        </div>
                    </div>

                    <motion.div
                        initial={{ translateY: 20, opacity: 0 }}
                        animate={{ translateY: 0, opacity: 1 }}
                        transition={{
                            type: "spring",
                            duration: 0.5,
                            delay: 1
                        }}
                        className='project-image'>
                        <img src={display} alt="" />
                    </motion.div>

                    <div className='project-live-view-btns'>
                        <Link target="_blank" to={github}>
                            <Button id='btn1' buttonType='primary'>repository</Button>
                        </Link>
                        <Link target="_blank" to={live}>
                            <Button buttonType='secondary'>live view</Button>
                        </Link>
                    </div>

                    <div className='prject-description-two'>
                        <h2>Stand out from the crowd</h2>
                        <p>{description2}</p>
                    </div>

                    <div className='project-gallery'>
                        <div className='project-gallery-images'>
                            {images && Array.isArray(images) && images.length > 0 &&
                                images.map((img) => (
                                    <Imagee key={img} image={img} />
                                ))}
                        </div>
                    </div>

                </div>
            )}
        </>
    )

}

export default ProjectView;