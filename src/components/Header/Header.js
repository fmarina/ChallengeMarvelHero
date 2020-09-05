import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/logo-marvel.png';
import './Header.css';

const Header = () => {

    return (
        <header>
            <nav>
                <div className="img-container">
                    <Link to="/">
                        <img src={logo} alt="logo marvel" />
                    </Link>                       
                </div>
                <a href="#">Favorite Hero</a> 
            </nav>
        </header>
    );

}

export default Header;