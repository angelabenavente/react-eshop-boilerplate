import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme)=> ({

    root: {
        maxWidth: 345, 
    },

    action: {
        marginTop: "3rem",
    },

    media : {
        height: 0,
        paddingTop: '56.25%'
    },

    expand : {
        transform: 'rotate (0deg)',
        marginLeft: 'auto', 
        transition: theme.transition.create('transform', {
            duration: theme.transition.duration.shortest,
        }),
    },

    expandOpen: {
        transform: "rotate(180deg)",
    },
}));
export default function Navbar() {
    const classes = useStyles()
    
  return (
    <div className = {classes.root}>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
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
