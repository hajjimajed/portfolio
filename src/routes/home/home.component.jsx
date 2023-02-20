import './home.styles.scss'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

import Button from '../../components/button/button.component';
import { ReactComponent as MainLogo } from '../../assets/logo.svg'
import { ReactComponent as Github } from '../../assets/github.svg'
import { ReactComponent as Linkedin } from '../../assets/linkedin.svg'
import { ReactComponent as Instagram } from '../../assets/instagram.svg'
import { ReactComponent as Arrow } from '../../assets/right-arrow.svg'

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.6,
            staggerChildren: 0.3,
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
                    <h1>welcome<span>&#9632;</span></h1>
                    <h2>Hello there! I'm <span>Majed</span></h2>
                    <h2>web developer.</h2>
                    <div className='buttons-container'>
                        <Button onClick={aboutNavigateHandler} id='btn1' buttonType='primary'>about</Button>
                        <Button onClick={projectsNavigateHandler} buttonType='secondary'>projects</Button>
                    </div>
                </div>



                <div className='date'>
                    <h1>LESS IS MORE</h1>
                </div>
                <div className='social-media'>
                    <Link className='social-media-link'> <Github className='social-media-icon' /></Link>
                    <Link className='social-media-link'> <Linkedin className='social-media-icon' /></Link>
                    <Link className='social-media-link'> <Instagram className='social-media-icon' /></Link>
                </div>
            </div>

        </>
    )
}

export default Home;