import './navigation.styles.scss'
import { Fragment, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';


const Navigation = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsButtonClicked(!isButtonClicked);
    }

    const handleMenuLinkClick = () => {
        setIsMenuOpen(false);
    };


    return (
        <Fragment>
            <div className='navigation-container'>
                <Link to='/' className='navigation-logo'><h1>brand</h1></Link>
                <div className={`navigation-menu-container ${isMenuOpen ? 'nav-menu--visible' : ''}`}>
                    <Link onClick={handleMenuLinkClick} to='/' className='navigation-link'><h1>home</h1><div></div></Link>
                    <Link onClick={handleMenuLinkClick} to='/projects' className='navigation-link'><h1>projects</h1><div></div></Link>
                    <Link onClick={handleMenuLinkClick} to='/about' className='navigation-link'><h1>about me</h1><div></div></Link>
                    <Link onClick={handleMenuLinkClick} to='/contact' className='navigation-link'><h1>contact me</h1><div></div></Link>
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