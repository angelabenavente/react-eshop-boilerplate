import * as React from 'react';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import handBagInitial from '../../assets/bagLogo.png';
import { makeStyles } from "@mui/styles";
import {NavLink} from "react-router-dom";


const useStyles = makeStyles((theme)=> ({
  root: {
     width: "100%",
     height: "400px",
     backgroundColor: '#fdd9f8',
  },

  image: {

      textAlign: "center",
      display: "block",
      justifyContent: "center",
      alignItems: "center",
      margin: "auto",
      width: "65%",

  },

   text: {
    height: "10rem",
    marginLeft: "200px",
    fontFamily: 'Myriad Pro Regular',
  },

})); 

export function HomePage() {
  const classes = useStyles()
  return (
        <Box className= {classes.root}>
          <div>
          <NavLink to= "/products" exact>
            <IconButton>
              <img src = {handBagInitial} className={classes.image}/>
            </IconButton>
            </NavLink>
            <p className={classes.text}> Encontrar mi bolso </p>
          </div>
        </Box>
    )
  }


