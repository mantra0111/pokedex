import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import myCss from '../styles/pokemonDetails.css'

export default function PokemonDetails() {
    const { id } = useParams()
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
    const dataUrl = `https://pokeapi.co/api/v2/pokemon/${id}/`

    const [pokemonStats, setPokemonStats] = useState([])
    const [pokemonData, setPokemonData] = useState(null)
    const [pokemonTypes, setPokemonTypes] = useState(null)
    const [loading, setLoading] = useState(true)
    // using the url parameters
    // import { useParams } from 'react-router-dom' then 
    // destructure the respective parameters const { id } = useParams()
    useEffect(() => {
        async function fetchForDetails() {
            let request = await fetch(dataUrl)
            let response = await request.json()
            let stats = await response.stats.map((index) => {
                let { name } = index.stat
                return ({ [name]: index.base_stat })
            })
            console.log(stats)
            let types = await response.types.map((index) => {
                let { name } = index.type
                let capitalized = name[0].toUpperCase() + (name.substr(1))
                return capitalized
            })
            types = await types.join("/")
            setPokemonTypes(types)
            setPokemonStats(stats)
            setPokemonData({ name: response.name })
            setLoading(false)
        }
        fetchForDetails()
    }, [])

    const statsLayout = pokemonStats.map((stat, index) => {
        let objectName = Object.keys(stat)[0]
        let objectProperty = stat[Object.keys(stat)[0]]
        return (
            <p className="individual-stat">
                - {objectName}:{objectProperty}
            </p>
        )
    })

    return (
        <>
            {loading ?
                <div>Loading ...</div> :
                <div id="details-container">
                    <div id="media-container" >
                        <img src={imgUrl}
                            alt={`pokemon number ${id}`} />
                    </div>
                    <div id="data-container">
                        <h1>{pokemonData.name[0].toUpperCase() + pokemonData.name.substr(1)}</h1>
                        <h3>types : {pokemonTypes}</h3>
                        <div>{statsLayout}</div>
                        <Link to='/'>
                            <button id="back-to-dex-button"> go back to dex </button>
                        </Link>
                    </div>
                </div>}
        </>
    )
}