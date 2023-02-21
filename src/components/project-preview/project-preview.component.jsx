import './project-preview.styles.scss'
import { Link } from 'react-router-dom';
import { ReactComponent as Arrow } from '../../assets/right-arrow.svg'

const ProjectPreview = () => {
    return (
        <div className='project-preview-container'>
            <div className='project-info'>
                <h1>project name<span>&#9632;</span></h1>
                <div>
                    <p>project genre</p>
                    <p>project info</p>
                </div>
                <Link className='project-link'><h1>view details</h1><Arrow className='link-arrow' /></Link>
            </div>
            <div className='project-image'>
                <img src="https://i.pinimg.com/originals/aa/bb/bc/aabbbc70a1a36e57ec3fb461a954ce16.png" alt="" />
            </div>
        </div>
    )
}

export default ProjectPreview;