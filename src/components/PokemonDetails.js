import { Link } from 'react-router-dom'


export default function PokemonDetails(props) {
    let url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/404.png"
    return (
        <div style={{ backgroundColor: '#bababa', textAlign: 'center' }}>
            <h1 style={{ color: 'red' }}>Error 404</h1>
            <h2>coming soon ...</h2>
            <img style={{ height: '300px' }} src={url}></img>
            <Link to="/">
                <h2>go back to dex</h2>
            </Link>
        </div>
    )
}