import './home.styles.scss'
import { useState, useEffect } from 'react';

import Button from '../../components/button/button.component';
import { ReactComponent as MainLogo } from '../../assets/logo.svg'
import { ReactComponent as Github } from '../../assets/github.svg'
import { ReactComponent as Linkedin } from '../../assets/linkedin.svg'
import { ReactComponent as Instagram } from '../../assets/instagram.svg'

const Home = () => {

    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 30000);
    }, []);

    return (
        <div className='home-container'>
            <div className='welcoming'>
                <h1>welcome to my portfolio<span>&#9632;</span></h1>
            </div>
            <div className='welcome-name'>
                <MainLogo className='main-logo' />
                <h1>Majed Hajji</h1>
            </div>
            <div className='welcome-text'>
                <h1>
                    front end web developer
                </h1>
            </div>
            <div className='welcome-footer-container'>
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
            </div>

            <div className='left-sider'>
                <Github className='sider-logo' />
                <Linkedin className='sider-logo' />
                <Instagram className='sider-logo' />
            </div>
            <div className='right-sider'>
                <h1>from concept to reality</h1>
            </div>
        </div>
    )
}

export default Home;