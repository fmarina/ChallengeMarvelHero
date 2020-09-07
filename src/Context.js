import React, {useState, useEffect} from 'react';

const apiKey = "2b6c4801d3c5f0dcc6137bcb86e2afef";
const hash = "9d649ab9475fea5f51ac617b8dbf7b8f";
const apiURL = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${apiKey}&hash=${hash}`;

const Context = React.createContext();

function ContextProvider(props) {

    const [favoriteHero, setFavoriteHero] = useState([]);
    const [allSuperHeroes, setAllSuperHeroes] = useState([]);

    useEffect(() => {
        fetch(apiURL)
            .then(res => res.json())
            .then(data => setAllSuperHeroes(data.data.results));
    }, [])

    const addFavoriteHero = (newHero) => {
        setFavoriteHero(prevHeroes => [...prevHeroes, newHero]);
    }

    const removeFavoriteHero = (idHero) => {
        setFavoriteHero( prevHeroes => prevHeroes.filter(hero => hero.id !== idHero))
    }

    return (
        <Context.Provider value={{
            allSuperHeroes,
            favoriteHero,
            addFavoriteHero,
            removeFavoriteHero,
        }}>
            {props.children}
        </Context.Provider>
    );
}

export {ContextProvider, Context};