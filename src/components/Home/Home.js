import React, {useContext, useState} from 'react';
import './Home.css';
import imgNotFound from '../../assets/images/image-not-found.png';
import {Link} from 'react-router-dom'
import {Context} from '../../Context';

const Home = () => {
    const {data} = useContext(Context);
    const [value, setValue] = useState("");
    const [findHero, setFindHero] = useState("");

    const handleClick = () => {
        if(value.length > 0) {
            const heroName = value;
            const heroFound = data.find(hero => hero.name === heroName);
            setFindHero(heroFound);
            setValue("");
        }
    }

    return (
        <main id="main">        
        <div>
            <input 
                type="search" 
                name="search" 
                id="search" 
                className="input-search"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button 
                name="search-hero" 
                aria-label="search a hero" 
                className="btn-search"
                onClick={handleClick}
            >
                <i className="fas fa-search"></i>
            </button>
        </div>
        <div id="container-superhero">
        {
            (findHero)
            ? (
                <div className="container-img-hero" key={findHero.id}>
                    <Link to={`/${findHero.id}`}>
                    {   (findHero.thumbnail.path).includes("image_not_available")
                        ? <img src={imgNotFound} alt={findHero.name}/>
                        : <img src={`${findHero.thumbnail.path}.jpg`} alt={findHero.name}/>
                    }                    
                    <p className="name-hero">{findHero.name}</p>
                    </Link>
                    <i className="fas fa-heart"></i></div>
            )
            :
            (data) && 
                data.map(hero => (
                    <div className="container-img-hero" key={hero.id}>
                    <Link to={`/${hero.id}`}>
                    {   (hero.thumbnail.path).includes("image_not_available")
                        ? <img src={imgNotFound} alt={hero.name}/>
                        : <img src={`${hero.thumbnail.path}.jpg`} alt={hero.name}/>
                    }                    
                    <p className="name-hero">{hero.name}</p>
                    </Link>
                    <i className="fas fa-heart"></i>
                    </div>
                ))
        }
        </div>
        </main>
    );
}

export default Home;