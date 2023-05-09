import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { makeStyles } from "@mui/styles";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';


const useStyles = makeStyles((theme)=> ({
    
    root: {
        flexGrow: 1,
        marginBottom: "4rem",
        marginLeft: "10rem",
        marginTop: "5rem",
        padding: "1rem",
    },

    textField: {
      width: "400px",
      height: "70px",
    },

}));


export function ContactPage() {
    const classes = useStyles();

  return (

    
    <Grid container spacing={3}>

        <Grid item xs={12}>
            <Typography align= 'center' gutterBottom variant="h4">
                Formulario de contacto
            </Typography>
          </Grid>

          <Box className= {classes.root}>
          <div>
          <TextField
            id="outlined-required"
            label="Nombre"
          />
          <TextField
            id="outlined-required"
            label="Apellido"
          />
          </div>
          <div>
          <TextField
            id="outlined-required"
            label="Número de pedido"
          />
        </div>
          <div>
          <TextField className= {classes.textField}
            id="outlined-required"
            label="Información"
          />
          </div>
          <div>
          <Button variant="contained">Mandar petición</Button>
          </div>
          </Box>
      </Grid>
  );
}
