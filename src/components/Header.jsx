import React from "react";
import '../style/main.css';
import logo from '../assets/logo.png'


const Header = () => {
    return (
        <div className="flexHeader header-border">
            <img className='logoHeader' src={logo} alt='logo of the company' />
            <h1 className="headerColor">RHnet</h1>
            <img className='logoHeader' src={logo} alt='logo of the company' />
        </div>
    );
};

export default Header;
