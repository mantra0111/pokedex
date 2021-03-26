import PokemonCard from './components/PokemonCard'
import './App.css';
import React from 'react';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      loading: true,
      pokemon: []
    }
  }
  async componentDidMount() {
    let url = 'https://pokeapi.co/api/v2/pokemon?limit=493'
    let completeDex = 'https://pokeapi.co/api/v2/pokemon?limit=1118'
    let request = await fetch(url)
    let data = await request.json()
    this.setState({ pokemon: data.results, loading: false })
  }
  render() {
    let pokemonMap = this.state.pokemon.map((pokemon, index) => (
      <PokemonCard
        pokemonId={index + 1}
        pokemonName={pokemon.name}
        key={index}
      />
    ))
    return (
      <>
        {this.state.loading ? <h1>loading ...</h1> : pokemonMap}
      </>
    );
  }
}

export default App;
