import './home.styles.scss'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

import Button from '../../components/button/button.component';
import { ReactComponent as MainLogo } from '../../assets/logo.svg'
import { ReactComponent as Github } from '../../assets/github.svg'
import { ReactComponent as Linkedin } from '../../assets/linkedin.svg'
import { ReactComponent as Instagram } from '../../assets/instagram.svg'
import { ReactComponent as Arrow } from '../../assets/arrow-r.svg'

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
    const contactNavigateHandler = () => {
        navigate('/contact');
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
                    <div className='welcoming-name'>
                        <div></div>
                        <h1>front-end web developer<span>&#9632;</span></h1>
                    </div>
                </div>

                <div className='buttons-container'>
                    <Link to='/about' className='home-link'><h1>about</h1><Arrow className='arrow' /></Link>
                    <Link to='/projects' className='home-link'><h1>projects</h1><Arrow className='arrow' /></Link>
                </div>

                <div className='date'>
                    <h1>{date}</h1>
                    <h1>&nbsp;/&nbsp;</h1>
                    <h1>{month}</h1>
                    <h1>&nbsp;/&nbsp;</h1>
                    <h1>{year}</h1>
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