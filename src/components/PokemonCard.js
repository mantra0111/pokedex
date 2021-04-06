import Typography from '@material-ui/core/Typography'
import CardHeader from "@material-ui/core/CardHeader"
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
//----------------------------------------------------//
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    card: {
        backgroundColor: '#98d8f5',
        textDecoration: 'none',
    },
})

export default function PokemonCard(props) {
    // Data for Layout
    let { pokemonId, pokemonName } = props
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
    let pokemonTitle = `#${pokemonId} - ${pokemonName[0].toUpperCase() + pokemonName.substr(1)}`
    let officialArtwork = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`

    // HOOKS
    const [pokemonTypes, setPokemonTypes] = useState(null)
    const classes = useStyles()

    // FETCH DATA 
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

    return (
        <Link to={`/details/${pokemonId}`} style={{ textDecoration: 'none' }}>
            <Card className={classes.card} >
                <CardHeader
                    title={<Typography
                        variant="h6"
                        component="h3">{pokemonTitle}
                    </Typography>}

                />
                <CardContent>
                    <img
                        style={{ width: '150px', height: '150px' }}
                        src={officialArtwork}
                        alt={`pokemon number ${pokemonId}, ${pokemonName}`}></img>
                    <Typography
                        variant="h6"
                        color="textSecondary"
                        component="h5">
                        {pokemonTypes}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    )
}