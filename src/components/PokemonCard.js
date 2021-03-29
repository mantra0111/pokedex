import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'


export default function PokemonCard(props) {
    // this is neccesary for layout and data fetching
    let { pokemonId, pokemonName } = props
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`

    // this state will save the fetched data 
    const [pokemonTypes, setPokemonTypes] = useState(null)
    const [pokemonStats, setPokemonStats] = useState(null)


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
            let stats = await pokemon.stats.map((index) => {
                let { name } = index.stat
                return `${name}: ${index.base_stat}`
            })
            types = await types.join("/")
            stats = await stats.join(" ")
            setPokemonTypes(types)
            setPokemonStats(stats)
        }
        fetchDetails()
        console.log(pokemonTypes)
    }, [])

    // img-urls
    let officialArtwork = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`
    // styles
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
        backgroundImage: 'url("https://pngimg.com/uploads/pokeball/pokeball_PNG19.png")',
        textDecoration: 'none',
        color: "black"
    }

    return (
        <Link to="/details">
            <div style={containerStyle}>
                <h3 >{`#${pokemonId} - ${pokemonName}`}</h3>
                <img style={{ width: '180px' }} src={officialArtwork}></img>
                <h5>{pokemonTypes}</h5>
                <p>{pokemonStats}</p>
            </div>
        </Link>
    )
}