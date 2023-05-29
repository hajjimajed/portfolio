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
        <div className='about-container'>


            <div className='about-me'>
                <motion.div
                    initial={{ translateY: 20, opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        duration: 1,
                        delay: 0.4
                    }}
                    className='about-me-header'>
                    <h1>me, myself & I</h1>
                </motion.div>

                <div className='about-me-text'>
                    <motion.p
                        initial={{ translateY: 20, opacity: 0 }}
                        animate={{ translateY: 0, opacity: 1 }}
                        transition={{
                            type: "spring",
                            duration: 1,
                            delay: 0.7
                        }}
                    >
                        I’m a Web Developer located in Tunisia. I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
                    </motion.p>
                    <motion.p
                        initial={{ translateY: 20, opacity: 0 }}
                        animate={{ translateY: 0, opacity: 1 }}
                        transition={{
                            type: "spring",
                            duration: 1,
                            delay: 0.8
                        }}
                    >
                        Well-organised person, problem solver, independent employee with high attention to detail. Fan of Combat Sports, outdoor activities, Designing and Portraits Drawing. A Member of pretty and large family.
                    </motion.p>
                    <motion.p
                        initial={{ translateY: 20, opacity: 0 }}
                        animate={{ translateY: 0, opacity: 1 }}
                        transition={{
                            type: "spring",
                            duration: 1,
                            delay: 0.9
                        }}
                    >
                        Interested in the entire web design spectrum and working on ambitious projects with positive people.
                    </motion.p>
                </div>
            </div>

            <div className='my-skills'>
                <motion.div
                    initial={{ translateY: 20, opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        duration: 1,
                        delay: 1
                    }}
                    className='my-skills-header'>
                    <h1>skills & experience</h1>
                </motion.div>
                <div className='my-skills-text'>
                    <motion.p
                        initial={{ translateY: 20, opacity: 0 }}
                        animate={{ translateY: 0, opacity: 1 }}
                        transition={{
                            type: "spring",
                            duration: 1,
                            delay: 1.3
                        }}
                    >I specialize in creating highly successful and responsive web applications that prioritize speed, usability, and adherence to industry best practices. With my expertise primarily focused on front-end development, I excel in crafting engaging user experiences using HTML, CSS, and JavaScript.
                    </motion.p>
                    <motion.p
                        initial={{ translateY: 20, opacity: 0 }}
                        animate={{ translateY: 0, opacity: 1 }}
                        transition={{
                            type: "spring",
                            duration: 1,
                            delay: 1.4
                        }}
                    >Moreover, I possess extensive experience working with popular frameworks such as React.js and React Native, enabling me to deliver cutting-edge solutions for both web and mobile platforms. I am well-versed in utilizing tools like SASS, styled components, and framer motion to enhance the visual appeal and functionality of applications. Furthermore, my proficiency extends to working with Angular, Node.js, and Express.js, allowing me to offer a comprehensive range of services across the entire development stack.
                    </motion.p>
                </div>
                <div className='skills-level'>
                    <motion.h2
                        initial={{ translateY: 20, opacity: 0 }}
                        animate={{ translateY: 0, opacity: 1 }}
                        transition={{
                            type: "spring",
                            duration: 1,
                            delay: 1.7
                        }}
                    >React Js</motion.h2>
                    <motion.div
                        initial={{ translateY: 20, opacity: 0 }}
                        animate={{ translateY: 0, opacity: 1 }}
                        transition={{
                            type: "spring",
                            duration: 1,
                            delay: 2
                        }}
                        className='level-bar1'>
                        <motion.div
                            ref={ref}
                            initial={{ scaleX: 0, transformOrigin: 'left' }}
                            animate={{ scaleX: inView ? 1 : 0 }}
                            transition={{
                                ease: "linear",
                                delay: 2.3,
                                duration: 0.8
                            }}
                        ></motion.div>
                    </motion.div>
                    <motion.h2
                        initial={{ translateY: 20, opacity: 0 }}
                        animate={{ translateY: 0, opacity: 1 }}
                        transition={{
                            type: "spring",
                            duration: 1,
                            delay: 1.7
                        }}
                    >Angular Js</motion.h2>
                    <motion.div
                        initial={{ translateY: 20, opacity: 0 }}
                        animate={{ translateY: 0, opacity: 1 }}
                        transition={{
                            type: "spring",
                            duration: 1,
                            delay: 2
                        }}
                        className='level-bar2'>
                        <motion.div
                            ref={ref}
                            initial={{ scaleX: 0, transformOrigin: 'left' }}
                            animate={{ scaleX: inView ? 1 : 0 }}
                            transition={{
                                ease: "linear",
                                delay: 2.3,
                                duration: 0.8
                            }}
                        ></motion.div>
                    </motion.div>
                    <motion.h2
                        initial={{ translateY: 20, opacity: 0 }}
                        animate={{ translateY: 0, opacity: 1 }}
                        transition={{
                            type: "spring",
                            duration: 1,
                            delay: 1.7
                        }}
                    >react native</motion.h2>
                    <motion.div
                        initial={{ translateY: 20, opacity: 0 }}
                        animate={{ translateY: 0, opacity: 1 }}
                        transition={{
                            type: "spring",
                            duration: 1,
                            delay: 2
                        }}
                        className='level-bar3'>
                        <motion.div
                            ref={ref}
                            initial={{ scaleX: 0, transformOrigin: 'left' }}
                            animate={{ scaleX: inView ? 1 : 0 }}
                            transition={{
                                ease: "linear",
                                delay: 2.3,
                                duration: 0.8
                            }}
                        ></motion.div>
                    </motion.div>
                    <motion.h2
                        initial={{ translateY: 20, opacity: 0 }}
                        animate={{ translateY: 0, opacity: 1 }}
                        transition={{
                            type: "spring",
                            duration: 1,
                            delay: 1.7
                        }}
                    >node js</motion.h2>
                    <motion.div
                        initial={{ translateY: 20, opacity: 0 }}
                        animate={{ translateY: 0, opacity: 1 }}
                        transition={{
                            type: "spring",
                            duration: 1,
                            delay: 2
                        }}
                        className='level-bar4'>
                        <motion.div
                            ref={ref}
                            initial={{ scaleX: 0, transformOrigin: 'left' }}
                            animate={{ scaleX: inView ? 1 : 0 }}
                            transition={{
                                ease: "linear",
                                delay: 2.3,
                                duration: 0.8
                            }}
                        ></motion.div>
                    </motion.div>
                </div>
            </div>



        </div>
    )
}

export default About;