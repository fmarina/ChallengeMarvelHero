import React, { useContext } from 'react';
import './Favorite.css';
import imgNotFound from '../../assets/images/image-not-found.png'
import {Context} from '../../Context';

const Favorite = () => {

    const {favoriteHero, removeFavoriteHero} = useContext(Context);
    
    return (
        <div className="favorite-container">
            <h1>Favorite Heroes</h1>
            <div className="favorite-list">
            {   (favoriteHero.length > 0)
                ? (
                    favoriteHero.map((hero) => (
                        <ul key={hero.id}>
                            <li>
                            { (hero.thumbnail.path).includes("image_not_available")
                               ? <img 
                                    src={imgNotFound} 
                                    alt={`${hero.name}`}
                                 />
                               : <img 
                                    src={`${hero.thumbnail.path}.jpg`} 
                                    alt={`${hero.name}`}
                                 />
                            }
                                <h3>{hero.name}</h3>
                                <i className="fas fa-trash" 
                                   onClick={() => removeFavoriteHero(hero.id)}
                                ></i>
                            </li>
                        </ul>
                    ))
                )
                : (<h2>No favorite heroes yet...</h2>)
            }
            </div>
        </div>
    );
}

export default Favorite;