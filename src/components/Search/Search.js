import React, { useContext, useState } from 'react';
import './Search.css';
import SearchBar from '../Searchbar/Searchbar';
import Result from '../Results/Result';
import {Context} from '../../Context';

const Search = () => {
    
    const {allSuperHeroes} = useContext(Context);
    const [heroFound, setHeroFound] = useState("");

    const handleSearch = (value, setValue, e) => {
        e.preventDefault();
        if(value.length > 0){
            const findHero = allSuperHeroes.filter(hero => hero.name.toLowerCase().includes(value.toLowerCase()));
            setHeroFound(findHero);
            setValue("");
        }
    }

    return (
        <div className="container-search">
            <SearchBar handleSearch={handleSearch} />
            <Result data={heroFound}/>
        </div>
    );

}

export default Search;