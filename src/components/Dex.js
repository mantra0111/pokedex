import PokemonCard from './PokemonCard';
import React from 'react';


class Dex extends React.Component {

    constructor() {
        super()
        this.state = {
            loading: true,
            pokemon: []
        }
    }

    async componentDidMount() {
        // for all the pokedex set limit=898
        // for all the pokedex including forms limit = 1118
        // first gen is 151, fourth gen in 493
        let url = 'https://pokeapi.co/api/v2/pokemon?limit=151'
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
        let styleDex = {
            margin: '80px 0px 100px 0px',
            width: '100vw',
            textAlign: 'center'
        }

        return (
            <>

                <div style={styleDex} >
                    {this.state.loading ? <h1>loading ...</h1> : pokemonMap}
                </div>
            </>
        );
    }
}

export default Dex;
