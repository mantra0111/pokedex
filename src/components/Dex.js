import PokemonCard from './PokemonCard';
import React from 'react';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core'
import { useState, useEffect } from 'react'

const useStyles = makeStyles({
    styleDex: {
        margin: '65px 0px 100px 0px',
        textAlign: 'center',
        width: '100%'
    }
})

export default function Dex() {
    const [pokemon, Setpokemon] = useState([])
    const [loading, SetLoading] = useState(true)
    const classes = useStyles()

    useEffect(() => {
        async function fetchDex() {
            // 1st gen = 151
            // 2nd gen = 251
            // 3rd gen = 386
            // 4th gen = 493
            // 5th gen = 649
            // 6th gen = 721 
            // 7th gen = 809
            // 8th gen = 898
            let url = 'https://pokeapi.co/api/v2/pokemon?limit=151'
            let request = await fetch(url)
            let data = await request.json()
            Setpokemon(data.results)
            SetLoading(false)
        }
        fetchDex()
    }, [])

    let pokemonMap = pokemon.map((pokemon, index) => (
        <Grid item lg={3} sm={4} xs={12} key={index}>
            <Paper elevation={5} >
                <PokemonCard
                    pokemonId={index + 1}
                    pokemonName={pokemon.name} />
            </Paper>
        </Grid>
    ))

    return (
        <>
            <Grid
                spacing={3}
                container
                className={classes.styleDex} >
                {loading ? <h1>loading ...</h1> : pokemonMap}
            </Grid>
        </>
    )
}