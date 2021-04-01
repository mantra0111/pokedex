import Dex from './components/Dex'
import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import PokemonDetails from './components/PokemonDetails';
import Navbar from './components/Navbar'
class App extends React.Component {


  render() {
    let styleNav = {
      margin: '20 px 0px',
      width: '100vw',

    }
    return (
      <>
        <Navbar style={styleNav} />
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
      </>
    );
  }
}

export default App;
