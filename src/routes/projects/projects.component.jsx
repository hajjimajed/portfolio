import './projects.styles.scss'

import ProjectPreview from '../../components/project-preview/project-preview.component';

const Projects = () => {
    return (
        <div className='projects-container'>
            <div className='projects-header'>
                <h1>projects<span>&#9632;</span></h1>
                <div className='projects-header-intro'>
                    <div></div>
                    <h1>see my work</h1>
                    <div></div>
                </div>
            </div>

            <ProjectPreview />

        </div>
    )
}

export default Projects;