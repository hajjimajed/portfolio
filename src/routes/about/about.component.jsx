import './about.styles.scss'

import { Link } from 'react-router-dom';

import { ReactComponent as Arrow } from '../../assets/right-arrow.svg'

const About = () => {

    return (
        <div className='about-container'>
            <div className='about-me'>
                <h1>me, myself & i</h1>
                <p>
                    I’m a Front-End Developer located in Poland. I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
                </p>
                <p>
                    Well-organised person, problem solver, independent employee with high attention to detail. Fan of MMA, outdoor activities, TV series and English literature. A family person and father of two fractious boys,
                </p>
                <p>
                    Interested in the entire frontend spectrum and working on ambitious projects with positive people.
                </p>
                <Link to='/contact' className='about-link'><h2>Let’s create something stunning</h2> <Arrow className='arrow' /></Link>
            </div>
            <div className='my-skills'>

            </div>
        </div>
    )
}

export default About;