
export default function PokemonDetails(props) {
    let url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png"
    return (
        <div style={{ backgroundColor: '#bababa', textAlign: 'center' }}>
            <h1>this will be tje pokemon details</h1>
            <img style={{ height: '300px' }} src={url}></img>
        </div>
    )
}