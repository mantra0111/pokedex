import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'

export default function Navbar() {

    return (
        <AppBar position="fixed" style={{ top: 0 }} color="primary" >
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" >
                    Pokedex
                </Typography>
                <a
                    href="https://github.com/mantra0111"
                    target="_blank"
                    style={{ textDecoration: 'none', float: 'right' }} >
                    <Button
                        style={{ textDecoration: 'none', color: 'white' }}
                        color="inherit">My Github profile</Button>
                </a>
            </Toolbar>
        </AppBar>
    )
}