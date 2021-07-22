import React from 'react';
import { Link } from 'react-router-dom';
import  './LandingPage.css';



function LandingPage() {
    return (
        <div className='body'>
            <div>
                <p className='letsee1'>Let's see Dogs</p>
                <div className='letsee'>Let's see Dogs</div>
                <img src="https://media.tenor.com/images/457de7ed4db4dbe13bde5a41d5f4d300/tenor.gif" alt="paw" className='patita' />
            <Link to="/home">
                <button className='button'>Start</button>
            </Link>
            </div>
        </div>
    )
}

export default LandingPage
