import './navigation.styles.scss'
import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';


const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation-container'>
                <Link to='/' className='navigation-logo'><h1>brand</h1></Link>
                <Link to='/' className='navigation-link'><h1>home</h1><div></div></Link>
                <Link className='navigation-link'><h1>projects</h1><div></div></Link>
                <Link className='navigation-link'><h1>about me</h1><div></div></Link>
                <Link className='navigation-link'><h1>contact me</h1><div></div></Link>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;