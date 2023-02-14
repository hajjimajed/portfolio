import './home.styles.scss'
import { useState, useEffect } from 'react';

import Button from '../../components/button/button.component';

const Home = () => {

    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 30000);
    }, []);

    return (
        <div className='home-container'>
            <div className='welcome-text'>
                <h1>welcome to my portfolio<span>&#9632;</span></h1>
            </div>
            <div className='welcome-name'>
                <div><h1>majed</h1></div><div><h1>hajji<span> &#9632;</span></h1></div>
            </div>
            <div className='date'>
                <h1>
                    {' '}
                    {dateState.toLocaleDateString('en-GB', {
                        day: 'numeric',
                    })} .
                    {' '}
                    {dateState.toLocaleDateString('en-GB', {
                        month: 'numeric',
                    })} .
                    {' '}
                    {dateState.toLocaleDateString('en-GB', {
                        year: 'numeric',
                    })}
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
        </div>
    )
}

export default Home;