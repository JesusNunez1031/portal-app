import { Menu } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar } from "@mui/material"


const Navbar: React.FC = () => {
    return (
        <AppBar>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <Menu />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
};

export default Navbar;