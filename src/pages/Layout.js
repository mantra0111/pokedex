import Drawer from '@material-ui/core/Drawer'
import Navbar from '../components/Navbar'
import { makeStyles } from '@material-ui/core'

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
    const classes = useStyles()

    return (<>
        <header className={classes.root}>
            <Navbar className={classes.appBar} />
        </header>
        <article>{children}</article>
    </>)
}