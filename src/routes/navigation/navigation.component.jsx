import './navigation.styles.scss'
import { Fragment, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as MainLogo } from '../../assets/logo.svg'
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

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


const Navigation = () => {
    const location = useLocation();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsButtonClicked(!isButtonClicked);
    }

    const handleMenuLinkClick = () => {
        setIsMenuOpen(false);
        setIsButtonClicked(!isButtonClicked);
    };

    const [isNavigationMenuOpen, setIsNavigationMenuOpen] = useState(false);

    const menuToggle = () => {
        setIsNavigationMenuOpen(!isNavigationMenuOpen);
        setIsButtonClicked(!isButtonClicked);
    }

    const handleMenuLink = () => {
        setIsNavigationMenuOpen(false);
        setIsButtonClicked(!isButtonClicked);
    };

    return (
        <Fragment>
            <motion.div
                initial={{ translateY: -100 }}
                animate={{ translateY: 0 }}
                transition={{
                    type: "spring",
                    duration: 1.2
                }}
                className='navigation-container'>
                <Link to='/' className='navigation-logo'>
                    <svg className='main-logo' width="347" height="372" viewBox="0 0 347 372" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.0095937 186.5C0.0095937 167.908 0.00958011 137.541 0.00958011 119.458C0.00958192 101.375 -0.555974 76.2648 7.00957 58C14.5751 39.7352 25.401 27.8291 41.8389 16.8457C58.2768 5.86233 77.6024 -2.85163e-05 97.3721 1.04038e-10C117.142 2.85165e-05 136.467 5.86244 152.905 16.8459C169.343 27.8293 180.944 39.7352 188.51 58C196.075 76.2648 192.615 98.5576 192.615 119.458C192.615 136.941 192.615 165.709 192.615 186.5H152.905C152.905 170.107 152.905 133.548 152.905 116.5C152.905 100.962 151.79 78 149 72.2241C146.21 66.4481 141.115 59 132.115 53C123.115 47 111.705 43 97.3721 43C83.0388 43 75.4177 44.0369 63.5 52C60.5068 54 50.472 61.7053 46.115 72.2241C40.6299 85.4662 41.8389 100.562 41.8389 116.5C41.8389 132.438 41.8389 174.172 41.8389 186.5H0.0095937Z" fill="black" />
                        <path d="M153 372C153 353.408 153.01 137.541 153.01 119.458C153.01 101.375 152.444 76.2648 160.01 58C167.575 39.7352 178.401 27.8291 194.839 16.8457C211.277 5.86233 230.602 -2.85163e-05 250.372 1.04035e-10C270.142 2.85165e-05 289.467 5.86244 305.905 16.8459C322.343 27.8293 333.944 39.7352 341.51 58C349.075 76.2648 345.615 98.5576 345.615 119.458C345.615 136.941 345.615 165.709 345.615 186.5H305.905C305.905 170.107 305.905 133.548 305.905 116.5C305.905 100.962 304.79 78 302 72.2241C299.21 66.4481 294.115 59 285.115 53C276.115 47 264.705 43 250.372 43C236.039 43 228.418 44.0369 216.5 52C213.507 54 203.472 61.7053 199.115 72.2241C193.63 85.4662 194.839 100.562 194.839 116.5C194.839 132.438 194.839 359.672 194.839 372H153Z" fill="black" />
                        <path d="M0 264L0 222H121V264H0Z" fill="black" />
                        <path d="M225 372V330H346V372H225Z" fill="black" />
                        <path d="M194 264V222H345.6V264H194Z" fill="black" />
                        <path d="M0 372L0 330H155V372H0Z" fill="black" />
                    </svg>
                </Link>

                <div onClick={menuToggle} className={`navigation-button ${isButtonClicked ? 'navigation-button--active' : ''}`}><h1>menu</h1></div>
                <div className={`navigation-links-container ${isNavigationMenuOpen ? 'navigation-menu--visible' : ''}`} >
                    <Link onClick={handleMenuLink} to='/projects' className={`navigation-container-link ${isNavigationMenuOpen ? 'navigation-container-link--active' : ''}`}><h1>projects<span>&#9632;</span></h1></Link>
                    <Link onClick={handleMenuLink} to='/about' className={`navigation-container-link ${isNavigationMenuOpen ? 'navigation-container-link--active' : ''}`}><h1>about<span>&#9632;</span></h1></Link>
                    <Link onClick={handleMenuLink} to='/contact' className={`navigation-container-link ${isNavigationMenuOpen ? 'navigation-container-link--active' : ''}`}><h1>contact<span>&#9632;</span></h1></Link>
                </div>
            </motion.div>



            <Outlet />
        </Fragment>
    )
}

export default Navigation;