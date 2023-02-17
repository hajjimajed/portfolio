import './about.styles.scss'

import { Link } from 'react-router-dom';

import { ReactComponent as Arrow } from '../../assets/right-arrow.svg'

const About = () => {

    return (
        <div className='about-container'>
            <div className='about-me'>
                <h1>me, myself & i</h1>
                <p>
                    I’m a Front-End Developer located in Tunisia. I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
                </p>
                <p>
                    Well-organised person, problem solver, independent employee with high attention to detail. Fan of Combat Sports, outdoor activities, Designing and Portraits Drawing. A Member of pretty and large family.
                </p>
                <p>
                    Interested in the entire frontend spectrum and working on ambitious projects with positive people.
                </p>
                <Link to='/contact' className='about-link'><h2>Let’s create something stunning</h2> <Arrow className='arrow' /></Link>
            </div>
            <div className='my-skills'>
                <h1>skills & experience</h1>
                <p>I create successful responsive webs applications that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, custom plugins, features, animations, and coding interactive layouts.
                </p>
                <p>I also have wide experience working with react js and react native also with SASS, styled components and framer motion .
                </p>
                <div className='skills-level'>
                    <h2>front-end</h2>
                    <div className='level-bar1'>
                        <div></div>
                    </div>
                    <h2>react JS</h2>
                    <div className='level-bar2'>
                        <div></div>
                    </div>
                    <h2>react native</h2>
                    <div className='level-bar3'>
                        <div></div>
                    </div>
                    <h2>node.js</h2>
                    <div className='level-bar4'>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;