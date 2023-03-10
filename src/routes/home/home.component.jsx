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
                    >Hello there! I'm <span>
                            <svg className='name-logo' width="232" height="300" viewBox="0 0 232 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M87.3 57.3C87.3 55.1 87.1 52.9 86.7 50.7C86.5 48.3 85.9 46.2 84.9 44.4C84.1 42.4 82.8 40.8 81 39.6C79.4 38.4 77.1 37.8 74.1 37.8C70.3 37.8 67.1 39 64.5 41.4C63.3 38.2 62.7 35.3 62.7 32.7C62.7 29.5 63.2 26.4 64.2 23.4C65.4 20.2 67.2 17.4 69.6 15C72 12.6 75 10.7 78.6 9.29999C82.4 7.69998 87 6.89998 92.4 6.89998C104.4 6.89998 113.7 10.5 120.3 17.7C126.9 24.9 130.2 34.8 130.2 47.4V225C124.8 225 119.5 224.6 114.3 223.8C109.3 223 104.7 221.4 100.5 219C96.5 216.4 93.3 212.6 90.9 207.6C88.5 202.6 87.3 195.9 87.3 187.5V57.3ZM58.2 225H55.2C50 225 45 224.5 40.2 223.5C35.4 222.5 31.1 220.7 27.3 218.1C23.7 215.5 20.7 211.9 18.3 207.3C16.1 202.7 15 196.7 15 189.3V7.2H19.8C24.6 7.2 29.3 7.79999 33.9 8.99999C38.5 9.99999 42.6 11.9 46.2 14.7C49.8 17.3 52.7 20.9 54.9 25.5C57.1 30.1 58.2 36 58.2 43.2V225ZM159.3 57.3C159.3 55.1 159.1 52.9 158.7 50.7C158.5 48.3 157.9 46.2 156.9 44.4C156.1 42.4 154.8 40.8 153 39.6C151.4 38.4 149.1 37.8 146.1 37.8C142.3 37.8 139.1 39 136.5 41.4C135.3 38.2 134.7 35.3 134.7 32.7C134.7 29.5 135.2 26.4 136.2 23.4C137.4 20.2 139.2 17.4 141.6 15C144 12.6 147 10.7 150.6 9.29999C154.4 7.69998 159 6.89998 164.4 6.89998C176.4 6.89998 185.7 10.5 192.3 17.7C198.9 24.9 202.2 34.8 202.2 47.4V225C196.8 225 191.5 224.6 186.3 223.8C181.3 223 176.7 221.4 172.5 219C168.5 216.4 165.3 212.6 162.9 207.6C160.5 202.6 159.3 195.9 159.3 187.5V57.3Z" fill="#1DD3B0" />
                                <path d="M101.3 57.3C101.3 55.1 101.1 52.9 100.7 50.7C100.5 48.3 99.9 46.2 98.9 44.4C98.1 42.4 96.8 40.8 95 39.6C93.4 38.4 91.1 37.8 88.1 37.8C84.3 37.8 81.1 39 78.5 41.4C77.3 38.2 76.7 35.3 76.7 32.7C76.7 29.5 77.2 26.4 78.2 23.4C79.4 20.2 81.2 17.4 83.6 15C86 12.6 89 10.7 92.6 9.29999C96.4 7.69998 101 6.89998 106.4 6.89998C118.4 6.89998 127.7 10.5 134.3 17.7C140.9 24.9 144.2 34.8 144.2 47.4V225C138.8 225 133.5 224.6 128.3 223.8C123.3 223 118.7 221.4 114.5 219C110.5 216.4 107.3 212.6 104.9 207.6C102.5 202.6 101.3 195.9 101.3 187.5V57.3ZM72.2 225H69.2C64 225 59 224.5 54.2 223.5C49.4 222.5 45.1 220.7 41.3 218.1C37.7 215.5 34.7 211.9 32.3 207.3C30.1 202.7 29 196.7 29 189.3V7.2H33.8C38.6 7.2 43.3 7.79999 47.9 8.99999C52.5 9.99999 56.6 11.9 60.2 14.7C63.8 17.3 66.7 20.9 68.9 25.5C71.1 30.1 72.2 36 72.2 43.2V225ZM173.3 57.3C173.3 55.1 173.1 52.9 172.7 50.7C172.5 48.3 171.9 46.2 170.9 44.4C170.1 42.4 168.8 40.8 167 39.6C165.4 38.4 163.1 37.8 160.1 37.8C156.3 37.8 153.1 39 150.5 41.4C149.3 38.2 148.7 35.3 148.7 32.7C148.7 29.5 149.2 26.4 150.2 23.4C151.4 20.2 153.2 17.4 155.6 15C158 12.6 161 10.7 164.6 9.29999C168.4 7.69998 173 6.89998 178.4 6.89998C190.4 6.89998 199.7 10.5 206.3 17.7C212.9 24.9 216.2 34.8 216.2 47.4V225C210.8 225 205.5 224.6 200.3 223.8C195.3 223 190.7 221.4 186.5 219C182.5 216.4 179.3 212.6 176.9 207.6C174.5 202.6 173.3 195.9 173.3 187.5V57.3Z" fill="#F72585" />
                            </svg>

                            ajed</span></motion.h2>
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