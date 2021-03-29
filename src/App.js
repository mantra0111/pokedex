import Dex from './components/Dex'
import './App.css';
import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import PokemonDetails from './components/PokemonDetails';

class App extends React.Component {

  render() {
    return (
      <Router>
        <h1 style={{ textAlign: 'center' }}>pokedex</h1>

        <Switch>
          <Route path="/" exact>
            <Dex />
          </Route>
          <Route path="/details">
            <PokemonDetails />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
