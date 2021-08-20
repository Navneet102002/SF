import React from 'react';
import {Link} from 'react-router-dom'
import '../styles/styles.css';

function Home(){
    return <div>
    <div className='nameNLogo' >
        <img className='center' src="images/SFB Logo.png" alt="SFB Logo"></img>
        <h1 style={{fontSize: "75px"}}>The Sparks Foundation Bank</h1>
    </div>
    <Link to="/customers" className='btn btn-primary btn-lg center' style={{display: "block"}}>View All Customers</Link>
    </div>
}

export default Home;

//btn btn-primary btn-lg
//Button align-center