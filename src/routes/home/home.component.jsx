import './home.styles.scss'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

import Button from '../../components/button/button.component';
import { ReactComponent as Github } from '../../assets/github.svg'
import { ReactComponent as Linkedin } from '../../assets/linkedin.svg'
import { ReactComponent as Instagram } from '../../assets/instagram.svg'

const Home = () => {

    const navigate = useNavigate();
    const projectsNavigateHandler = () => {
        navigate('/projects');
    }
    const aboutNavigateHandler = () => {
        navigate('/about');
    }

    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 30000);
    }, []);



    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return (
        <>


            <div className='home-container'>
                <div className='welcoming'>
                    <motion.h1
                        initial={{ translateY: 20, opacity: 0 }}
                        animate={{ translateY: 0, opacity: 1 }}
                        transition={{
                            type: "spring",
                            duration: 1,
                            delay: 0.8
                        }}
                    >welcome<span>&#9632;</span></motion.h1>
                    <motion.h2
                        initial={{ translateY: 20, opacity: 0 }}
                        animate={{ translateY: 0, opacity: 1 }}
                        transition={{
                            type: "spring",
                            duration: 1,
                            delay: 0.9
                        }}
                    >Hello there! I'm <span>Majed</span></motion.h2>
                    <motion.h2
                        initial={{ translateY: 20, opacity: 0 }}
                        animate={{ translateY: 0, opacity: 1 }}
                        transition={{
                            type: "spring",
                            duration: 1,
                            delay: 1
                        }}
                    >web developer.</motion.h2>
                    <motion.div
                        initial={{ translateY: 20, opacity: 0 }}
                        animate={{ translateY: 0, opacity: 1 }}
                        transition={{
                            type: "spring",
                            duration: 1,
                            delay: 1.1
                        }}
                        className='buttons-container'>
                        <Button onClick={aboutNavigateHandler} id='btn1' buttonType='primary'>about</Button>
                        <Button onClick={projectsNavigateHandler} buttonType='secondary'>projects</Button>
                    </motion.div>
                </div>



                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        type: "spring",
                        duration: 1,
                        delay: 1.5
                    }}
                    className='date'>
                    <h1>LESS IS MORE</h1>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        type: "spring",
                        duration: 1,
                        delay: 1.5
                    }}
                    className='social-media'>
                    <Link className='social-media-link'> <Github className='social-media-icon' /></Link>
                    <Link className='social-media-link'> <Linkedin className='social-media-icon' /></Link>
                    <Link className='social-media-link'> <Instagram className='social-media-icon' /></Link>
                </motion.div>
            </div>

        </>
    )
}

export default Home;