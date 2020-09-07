import React, { useContext } from 'react';
import './Result.css';
import {Link} from 'react-router-dom';
import imgNotFound from '../../assets/images/image-not-found.png';
import {Context} from '../../Context';

const Result = ({data}) => {

    const {favoriteHero, addFavoriteHero, removeFavoriteHero} = useContext(Context);

    const isFavorite = (hero) => {
        const isAlreadyFavorite = favoriteHero.some(heroe => heroe.id === hero.id);
        return (isAlreadyFavorite)
            ? <i className="fas fa-heart" onClick={() => removeFavoriteHero(hero.id)}></i>
            : <i className="far fa-heart" onClick={() => addFavoriteHero(hero)}></i>
    }
    
    return (
        <div id="container-superhero">
        {   (data) &&
                data.map( hero => (
                    <div 
                      className="container-img-hero" 
                      key={hero.id}
                    >
                        <Link to={`/${hero.id}`}>
                        {   (hero.thumbnail.path).includes("image_not_available")
                            ? <img src={imgNotFound} alt={hero.name}/>
                            : <img src={`${hero.thumbnail.path}.jpg`} alt={hero.name}/>
                        }                    
                            <p className="name-hero">{hero.name}</p>
                        </Link>
                        {isFavorite(hero)}
                    </div>
                ))
        }         
        </div>
    );
}

export default Result;