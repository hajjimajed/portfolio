import './home.styles.scss'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import Button from '../../components/button/button.component';
import { ReactComponent as MainLogo } from '../../assets/logo.svg'
import { ReactComponent as Github } from '../../assets/github.svg'
import { ReactComponent as Linkedin } from '../../assets/linkedin.svg'
import { ReactComponent as Instagram } from '../../assets/instagram.svg'

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
        opacity: 1
    }
};

const Home = () => {

    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 30000);
    }, []);

    return (
        <>
            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className='home-container'>


                <>
                    <motion.div
                        variants={item} className='welcoming'>
                        <h1>welcome to my portfolio<span>&#9632;</span></h1>
                    </motion.div>
                    <motion.div
                        variants={item} className='welcome-name'>
                        <MainLogo className='main-logo' />
                        <h1>Majed Hajji</h1>
                    </motion.div>
                    <motion.div
                        variants={item} className='welcome-text'>
                        <h1>
                            front end web developer
                        </h1>
                    </motion.div>
                    <motion.div
                        variants={item} className='welcome-footer-container'>
                        <div className='clock'>
                            <h1>
                                <span>
                                    {dateState.toLocaleString('en-GB', {
                                        hour: 'numeric',
                                    })}
                                </span>
                                :
                                <span>
                                    {dateState.toLocaleString('en-GB', {
                                        minute: 'numeric',
                                    })}
                                </span>
                            </h1>
                            <div>
                                <div></div>
                            </div>
                        </div>
                        <div className='button-container'>
                            <Button buttonType='secondary'>contact me</Button>
                            <Button buttonType='primary'>about me</Button>
                        </div>
                        <div className='corner-text'><h1>less is more</h1></div>
                    </motion.div></>





            </motion.div>
            <motion.div
                initial={{ translateX: -100 }}
                animate={{ translateX: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}
                className='left-sider'>
                <Github className='sider-logo' />
                <Linkedin className='sider-logo' />
                <Instagram className='sider-logo' />
            </motion.div>
            <motion.div
                initial={{ translateX: 100 }}
                animate={{ translateX: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}
                className='right-sider'>
                <h1>from concept to reality</h1>
            </motion.div>
        </>
    )
}

export default Home;