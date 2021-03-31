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

    return (
        <div style={{ backgroundColor: '#bababa', textAlign: 'center' }}>
            {loading ?
                <div>Loading ...</div> :
                <div>
                    <h1>details of {pokemonData.name}</h1>
                    <img style={{ height: '300px' }} src={imgUrl}></img>
                    <h3>{pokemonTypes}</h3>
                    <p>{pokemonStats}</p>
                    <Link to='/'>
                        <button style={styleButton}> go back to dex </button>
                    </Link>
                </div>}
        </div>
    )
}