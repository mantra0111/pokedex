import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function PokemonDetails() {
    const { id } = useParams()
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
    const dataUrl = `https://pokeapi.co/api/v2/pokemon/${id}/`

    const [pokemonStats, setPokemonStats] = useState(null)
    const [pokemonData, setPokemonData] = useState(null)
    const [pokemonTypes, setPokemonTypes] = useState(null)
    const [loading, setLoading] = useState(true)
    // using the url parameters
    // import { useParams } from 'react-router-dom' then 
    // destructure the respective parameters const { id } = useParams()
    let styleButton = {
        fontSize: 30,
        margin: 30,
        boxShadow: '0px 0px 10px',
        borderRadius: 10
    }

    useEffect(() => {
        async function fetchForDetails() {
            let request = await fetch(dataUrl)
            let response = await request.json()
            let stats = await response.stats.map((index) => {
                let { name } = index.stat
                return `${name}: ${index.base_stat}`
            })
            let types = await response.types.map((index) => {
                let { name } = index.type
                let capitalized = name[0].toUpperCase() + (name.substr(1))
                return capitalized
            })
            types = await types.join("/")
            setPokemonTypes(types)
            stats = await stats.join(" ")
            setPokemonStats(stats)
            setPokemonData({ name: response.name })
            setLoading(false)
        }

        fetchForDetails()
    }, [])
    let detailsStyle = {
        fontFamily: "'Oswald', sans-serif",
        backgroundColor: '#98d8f5',
        textAlign: 'center',
        margin: "80px 0px 0px 0px",
    }
    return (
        <div style={detailsStyle}>
            {loading ?
                <div>Loading ...</div> :
                <div>
                    <h1>details of {pokemonData.name[0].toUpperCase() + pokemonData.name.substr(1)}</h1>
                    <img
                        style={{ height: '300px' }}
                        src={imgUrl}
                        alt={`pokemon number ${id}`}></img>
                    <h3>{pokemonTypes}</h3>
                    <p>{pokemonStats}</p>
                    <Link to='/'>
                        <button style={styleButton}> go back to dex </button>
                    </Link>
                </div>}
            <h1>.</h1>
        </div>
    )
}