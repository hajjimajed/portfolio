import './about.styles.scss'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { ReactComponent as Arrow } from '../../assets/right-arrow.svg'

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.6,
            staggerChildren: 0.2,
            delay: 0.3
        }
    }
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5
        }
    }
};

const About = () => {

    const { ref, inView } = useInView({ threshold: 0 });

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="visible"

            className='about-container'>


            <div className='about-me'>
                <h1>about<span>&#9632;</span></h1>
                <div className='about-me-header'>
                    <div></div>
                    <h1>see some infos about me</h1>
                    <div></div>
                </div>
                <div className='about-me-profile'>
                    <div className='about-image'>
                        <img src="https://images.unsplash.com/photo-1435348773030-a1d74f568bc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                    </div>
                    <div className='about-name'>
                        <h1>Majed Hajji<span>&#9632;</span></h1>
                        <p>front-end web developer</p>
                    </div>
                </div>
                <div className='about-me-text'>
                    <p>
                        I’m a Front-End Developer located in Tunisia. I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
                    </p>
                    <p>
                        Well-organised person, problem solver, independent employee with high attention to detail. Fan of Combat Sports, outdoor activities, Designing and Portraits Drawing. A Member of pretty and large family.
                    </p>
                    <p>
                        Interested in the entire frontend spectrum and working on ambitious projects with positive people.
                    </p>
                </div>
            </div>

            <div className='my-skills'>
                <div className='my-skills-header'>
                    <div></div>
                    <h1>skills & experience</h1>
                    <div></div>
                </div>
                <div className='my-skils-text'>
                    <p>I create successful responsive webs applications that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, custom plugins, features, animations, and coding interactive layouts.
                    </p>
                    <p>I also have wide experience working with react js and react native also with SASS, styled components and framer motion .
                    </p>
                </div>
                <div className='skills-level'>
                    <h2>front-end</h2>
                    <div className='level-bar1'>
                        <motion.div
                            ref={ref}
                            initial={{ scaleX: 0, transformOrigin: 'left' }}
                            animate={{ scaleX: inView ? 1 : 0 }}
                            transition={{
                                ease: "linear",
                                delay: 1.2,
                                duration: 0.8
                            }}
                        ></motion.div>
                    </div>
                    <h2>react JS</h2>
                    <div className='level-bar2'>
                        <motion.div
                            ref={ref}
                            initial={{ scaleX: 0, transformOrigin: 'left' }}
                            animate={{ scaleX: inView ? 1 : 0 }}
                            transition={{
                                ease: "linear",
                                delay: 1.2,
                                duration: 0.8
                            }}
                        ></motion.div>
                    </div>
                    <h2>react native</h2>
                    <div className='level-bar3'>
                        <motion.div
                            ref={ref}
                            initial={{ scaleX: 0, transformOrigin: 'left' }}
                            animate={{ scaleX: inView ? 1 : 0 }}
                            transition={{
                                ease: "linear",
                                delay: 1.2,
                                duration: 0.8
                            }}
                        ></motion.div>
                    </div>
                    <h2>node.js</h2>
                    <div className='level-bar4'>
                        <motion.div
                            ref={ref}
                            initial={{ scaleX: 0, transformOrigin: 'left' }}
                            animate={{ scaleX: inView ? 1 : 0 }}
                            transition={{
                                ease: "linear",
                                delay: 1.2,
                                duration: 0.8
                            }}
                        ></motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default About;