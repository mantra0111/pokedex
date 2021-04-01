import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'


export default function PokemonCard(props) {
    // this is neccesary for layout and data fetching
    let { pokemonId, pokemonName } = props
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`

    // this state will save the fetched data 
    const [pokemonTypes, setPokemonTypes] = useState(null)

    // get the data for each pokemon with useEffect 
    useEffect(() => {
        async function fetchDetails() {
            let request = await fetch(url)
            let pokemon = await request.json()
            let types = await pokemon.types.map((index) => {
                let { name } = index.type
                let capitalized = name[0].toUpperCase() + (name.substr(1))
                return capitalized
            })
            types = await types.join("/")
            setPokemonTypes(types)

        }
        fetchDetails()
    }, [])

    // img-urls
    let officialArtwork = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`
    // styles
    let containerStyle = {
        fontFamily: "'Oswald', sans-serif",
        display: "inline-block",
        margin: "20px 20px",
        width: '180px',
        background: '#98d8f5',
        padding: 20,
        borderRadius: 15,
        textAlign: "center",
        boxShadow: "0px 0px 20px #98d8f5",
        backgroundImage: 'url("https://pngimg.com/uploads/pokeball/pokeball_PNG19.png")',
        textDecoration: 'none',
        color: "#3a4042"
    }

    return (
        <Link to={`/details/${pokemonId}`}>
            <div style={containerStyle}>
                <img
                    style={{ width: '180px' }}
                    src={officialArtwork}
                    alt={`pokemon number ${pokemonId}`}></img>
                <h3>{`#${pokemonId} - ${pokemonName[0].toUpperCase() + pokemonName.substr(1)}`}</h3>
                <h4>{pokemonTypes}</h4>
            </div>
        </Link>
    )
}