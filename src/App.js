import Dex from './components/Dex'
import React from 'react';
import Navbar from './components/Navbar'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import PokemonDetails from './components/PokemonDetails';

class App extends React.Component {

  render() {
    return (
      <Router>
        <h1 style={{ textAlign: "center" }}>Pokedex</h1>
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
