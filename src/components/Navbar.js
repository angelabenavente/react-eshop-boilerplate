import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from "@mui/styles";
import logo from "../assets/bagLogo.png"

const useStyles = makeStyles((theme)=> ({

    root: {
        flexGrow: 1,
        marginBottom: "4rem",
    },

    appBar: {
        backgroundColor: "whitesmoke",
        boxShadow: "none",
    },

    grow : {
        flexGrow:1,  
    },

    button: {
        marginLeft: "1px",
    },

    image: {
        marginRight: "1px",
        width:"10%",
        marginLeft: "-200px"
    },

}));
export default function Navbar() {
    const classes = useStyles()
    
  return (
    <div className = {classes.root}>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <img src = {logo} className={classes.image}/>
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    News
                </Typography>
                <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    </div>
   
  );
}
