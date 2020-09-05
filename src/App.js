import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import HeroDetail from './components/HeroDetail/HeroDetail';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" ><Home/></Route>
        <Route path="/:idHero"><HeroDetail /></Route>
      </Switch>
      <Footer />      
    </div>
  );
}

export default App;
