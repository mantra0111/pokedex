import Dex from './components/Dex'
import React from 'react';
import { Switch, HashRouter as Router, Route } from 'react-router-dom';
import PokemonDetails from './components/PokemonDetails';
import PokemonNotFound from './components/404'
import Layout from './pages/Layout'

class App extends React.Component {


  render() {

    return (
      <>
        <Router>
          <Layout>
            <Switch>
              <Route path="/" exact>
                <Dex />
              </Route>
              <Route path="/details/:id">
                <PokemonDetails />
              </Route>
              <Route path="/undefined" >
                <PokemonNotFound />
              </Route>
            </Switch>
          </Layout>
        </Router>
      </>
    );
  }
}

export default App;
