import React, { useState } from 'react';
import './Searchbar.css';
import {Link} from 'react-router-dom';

const Searchbar = ({handleSearch}) => {
    
    const [value, setValue] = useState("");

    return (
        <form autoComplete="off">
            <input 
                type="search" 
                name="search" 
                id="search" 
                className="input-search"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <Link to="/search">
            <button 
                name="search-hero" 
                aria-label="search a hero" 
                className="btn-search"
                onClick={(e) => handleSearch(value, setValue, e)}
            >
                <i className="fas fa-search"></i>
            </button>
            </Link>
        </form>
    );
}

export default Searchbar;