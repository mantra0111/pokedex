import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import GitHubIcon from '@material-ui/icons/GitHub';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import ContactMailRoundedIcon from '@material-ui/icons/ContactMailRounded';
import BugReportIcon from '@material-ui/icons/BugReport';
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core'

let drawerWidth = 260

const useStyles = makeStyles({
    drawer: {
        width: drawerWidth,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: '#99dfff',
        boxShadow: '0px 0px 20px'
    },
    drawerHeader: {
        position: 'relative',
        left: '75%',
    }
})

export default function NavDrawer({ drawerOpen, handleDrawer }) {

    const classes = useStyles()

    const Links = [
        {
            title: "My github",
            icon: <GitHubIcon />,
            url: "https://github.com/mantra0111",
        },
        {
            title: "My linkedIn",
            icon: <ContactMailRoundedIcon />,
            url: "https://www.linkedin.com/in/mateo-sierra-betancur-4b70951b7/",
        },
        {
            title: "My vanilla js projects",
            icon: <BugReportIcon />,
            url: "https://mantra0111.github.io/VanillaJs/",
        }
    ]

    const linksMap = Links.map((link) => (
        <ListItem button onClick={() => {
            window.open(link.url);
        }}>
            <ListItemText>
                {link.title}
            </ListItemText>
            <ListItemIcon>
                {link.icon}
            </ListItemIcon>
        </ListItem>
    ))

    return (
        <>
            <Drawer
                variant="persistant"
                open={drawerOpen}
                className={classes.drawer}
                classes={{
                    paper: classes.drawerPaper,
                }}>
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawer} style={{ padding: '30px 30px' }}>
                        <CloseRoundedIcon />
                    </IconButton>
                </div>
                <List>
                    {linksMap}
                </List>
            </Drawer>
        </>
    )
}