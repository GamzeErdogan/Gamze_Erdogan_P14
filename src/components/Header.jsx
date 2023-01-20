import React from "react";
import '../style/main.css';


const Header = ({logo}) => {
    return (
        <div className="flexHeader header-border">
            <img className='logoHeader' fetchpriority="low" src={logo} alt='logo of the company' />
            <h1 className="headerColor">RHnet</h1>
            <img className='logoHeader' fetchpriority="low" src={logo} alt='logo of the company' />
        </div>
    );
};

export default Header;
