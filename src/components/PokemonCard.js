export default function PokemonCard(props) {

    let { pokemonId, pokemonName } = props


    // img-urls
    let officialArtwork = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`
    let imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`
    let shinyUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemonId}.png`
    // styles
    async function fetchData() {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
        let request = await fetch(url)
        let pokemon = await request.json()
        let types = await pokemon.types.map((index) => {
            return index.type.name
        })
        //let types = [pokemon.types[0].type.name, pokemon.types[1].type.name]
        alert(`${pokemon.name}, ${types}`)
    }

    let containerStyle = {
        fontFamily: "'Oswald', sans-serif",
        display: "inline-block",
        margin: "20px 20px",
        width: '180px',
        background: '#bababa',
        padding: 20,
        borderRadius: 15,
        textAlign: "center",
        boxShadow: "0px 0px 10px",
        backgroundImage: 'url("https://pngimg.com/uploads/pokeball/pokeball_PNG19.png")'
    }

    return (
        <div style={containerStyle}>
            <h3 style={{}}>{pokemonName}</h3>
            <img style={{ width: '180px' }} src={officialArtwork}></img>
            <button onClick={() => fetchData()}>see details</button>
        </div>
    )
}