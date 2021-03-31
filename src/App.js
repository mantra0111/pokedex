import Dex from './components/Dex'
import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import PokemonDetails from './components/PokemonDetails';

class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <Dex />
          </Route>
          <Route path="/details/:id">
            <PokemonDetails />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
