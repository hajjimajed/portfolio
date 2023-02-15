import './navigation.styles.scss'
import { Fragment, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as MainLogo } from '../../assets/logo.svg'
import { useLocation } from 'react-router-dom';



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


    return (
        <Fragment>
            <div className='navigation-container'>
                <Link to='/' className='navigation-logo'><MainLogo className='main-logo' /></Link>
                <div className={`navigation-menu-container ${isMenuOpen ? 'nav-menu--visible' : ''}`}>
                    <Link onClick={handleMenuLinkClick} to='/' className={`navigation-link ${location.pathname === '/' ? 'active' : ''}`}><h1>home</h1><div></div></Link>
                    <Link onClick={handleMenuLinkClick} to='/projects' className={`navigation-link ${location.pathname === '/projects' ? 'active' : ''}`}><h1>projects</h1><div></div></Link>
                    <Link onClick={handleMenuLinkClick} to='/about' className={`navigation-link ${location.pathname === '/about' ? 'active' : ''}`}><h1>about me</h1><div></div></Link>
                    <Link onClick={handleMenuLinkClick} to='/contact' className={`navigation-link ${location.pathname === '/contact' ? 'active' : ''}`}><h1>contact me</h1><div></div></Link>
                </div>
                <div onClick={handleMenuClick} className={`menu-button ${isButtonClicked ? 'menu-button--active' : ''}`} >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;