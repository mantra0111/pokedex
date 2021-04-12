import Navbar from '../components/Navbar'
import { makeStyles } from '@material-ui/core'
import NavDrawer from '../components/NavDrawer'
import { useState } from 'react'


const useStyles = makeStyles({
    appBar: {
        margin: '20px 0px',
        width: '100vw',
        position: 'static'
    },
    drawer: {
        width: 240,
    },
    drawerPaper: {
        width: 240,
    },
    root: {
        display: 'flex',
    }
})

export default function Layout({ children }) {

    const [state, setState] = useState({
        drawerOpen: false
    })

    const handleDrawer = () => {

        setState({ drawerOpen: !state.drawerOpen })
    }
    const classes = useStyles()

    return (<>
        <header className={classes.root}>
            <Navbar handleDrawer={handleDrawer} className={classes.appBar} />
            <NavDrawer handleDrawer={handleDrawer} drawerOpen={state.drawerOpen} />
        </header>
        <article>{children}</article>
    </>)
}