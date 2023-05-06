import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from "@mui/styles";
import logo from "../assets/bagLogo.png";
import {ShoppingCart} from '@mui/icons-material';
import Badge from '@mui/material/Badge';

const useStyles = makeStyles((theme)=> ({

    root: {
        flexGrow: 1,
        marginBottom: "4rem",
    },

    grow:{
        flexGrow:1,
    },

    appBar: {
        backgroundColor: "whitesmoke",
        boxShadow: "none",
        color: "rgb(255, 141, 141)",
    },


    button: {
        marginLeft: "1px",
    },

    image: {
        height: "3rem",
        color: "white",
    },

    title: {
        fontFamily: "Lucida Console",
    }

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
                    alt= 'bagLogo'
                    className={classes.menuButton}
                >
                    <img src = {logo} className={classes.image}/>
                </IconButton>

                <div className={classes.grow}/>
                <Typography variant="h6" component="p"  className={classes.title} >
                    Bolsos Lola
                </Typography>
                <div className={classes.button}/>
                    <Button color="inherit">Sign In</Button>
                    <IconButton aria-label="show cart items" color ='inherit'>
                        <Badge badgeContent= {2} color= "secondary">
                            <ShoppingCart fontsize="large"/>
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    </div>
   
  );
}
