import React, {useState, useEffect} from 'react';

const apiKey = "2b6c4801d3c5f0dcc6137bcb86e2afef";
const hash = "9d649ab9475fea5f51ac617b8dbf7b8f";
const apiURL = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${apiKey}&hash=${hash}`;

const Context = React.createContext();

function ContextProvider(props) {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(apiURL)
            .then(res => res.json())
            .then(data => setData(data.data.results));
    }, [])

    return (
        <Context.Provider value={{data}}>
            {props.children}
        </Context.Provider>
    );
}

export {ContextProvider, Context};