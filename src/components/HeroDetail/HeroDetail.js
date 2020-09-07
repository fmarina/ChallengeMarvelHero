import React, {useContext} from 'react';
import './HeroDetail.css';
import imgNotFound from '../../assets/images/image-not-found.png';
import {useParams} from 'react-router-dom';
import {Context} from '../../Context';

const HeroDetail = () => {
    const {allSuperHeroes} = useContext(Context);
    const {idHero} = useParams();    
    const hero = allSuperHeroes.find(heroe => heroe.id === Number(idHero))

    return (
        <div className="hero-detail">
            <h2>{hero.name}</h2>
            <div className="container-img-hero-detail">
            {   (hero.thumbnail.path).includes("image_not_available")
                ? <img src={imgNotFound} alt={hero.name}/>
                : <img src={`${hero.thumbnail.path}.jpg`} alt={hero.name}/>
            }
                <h3>{hero.description}</h3>            
            </div>
        </div>
    );
}

export default HeroDetail;