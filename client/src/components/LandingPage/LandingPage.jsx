import React from 'react';
import { Link } from 'react-router-dom';
import  './LandingPage.css';



function LandingPage() {
    return (
        <div className='body'>
            <div>
            <Link to="/home">
                <button className='button'>Start</button>
            </Link>
            </div>
        </div>
    )
}

export default LandingPage
