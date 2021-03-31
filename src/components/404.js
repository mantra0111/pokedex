import { Link } from 'react-router-dom'


export default function PokemonDetails(props) {
    const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/201.png"
    // using the url parameters
    // import { useParams } from 'react-router-dom' then 
    // destructure the respective parameters const { id } = useParams()

    return (
        <div style={{ backgroundColor: '#bababa', textAlign: 'center' }}>
            <h1 style={{ color: 'red' }}>Error 404</h1>
            <h2>the resource you are trying to reach doesn't exist or isn't avaliable</h2>
            <img style={{ height: '300px' }} src={url}></img>
            <Link to='/'>
                <h2>go back to dex</h2>
            </Link>
        </div>
    )
}
