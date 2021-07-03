import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import PokemonDetails from './pages/PokemonDetails';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Favorites from './pages/Favorites';
import GlobalStyle from './globalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path="/pokedex" component={ Home } />
        <Route path="/pokedex/pokemon/details" component={ PokemonDetails } />
        <Route path="/pokedex/about" component={ About } />
        <Route path="/pokedex/favorites" component={ Favorites } />
        <Route component={ NotFound } />
      </Switch>
    </>
  );
}

export default App;
