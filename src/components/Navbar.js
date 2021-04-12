import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'
import TextField from '@material-ui/core/TextField'


const useStyles = makeStyles({
    searchField: {
        margin: '0px 30px 0px 30px',
        color: '#fff'
    },
    toolbar: {
        display: 'flex',
        alignContent: 'center'
    }
})


export default function Navbar({ handleDrawer }) {

    const classes = useStyles()


    const handleSearch = () => {

    }

    return (
        <AppBar position="fixed" style={{ top: 0 }} color="primary" >
            <Toolbar className={classes.toolbar} >
                <IconButton onClick={() => { handleDrawer() }} edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                {/* <TextField
                    onChange={handleSearch}
                    variant="filled"
                    className={classes.searchField}
                    placeholder="search" /> */}
            </Toolbar>
        </AppBar>
    )
}