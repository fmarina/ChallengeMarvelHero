import React, {useContext} from 'react';
import './Home.css';
import {Context} from '../../Context';
import Result from '../Results/Result';

const Home = () => {
    
    const {allSuperHeroes} = useContext(Context);

    return (
        <main id="main">           
        {   
            (allSuperHeroes) 
                ? <Result data={allSuperHeroes}/> : <h2>No superheroes to show...</h2>
        }
        </main>
    );
}

export default Home;