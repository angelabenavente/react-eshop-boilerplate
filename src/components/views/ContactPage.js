import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import * as React from "react";

const useStyles = makeStyles((theme) => ({
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

  function mandarDatos(event) {
    //   event.preventDafault;
    console.log("event", event);
    return event;
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography align="center" gutterBottom variant="h4">
          Formulario de contacto
        </Typography>
      </Grid>

      <Box className={classes.root}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            mandarDatos(e);
          }}
        >
          <div>
            <TextField id="outlined-required" label="Nombre" />
            <TextField id="outlined-required" label="Apellido" />
          </div>
          <div>
            <TextField id="outlined-required" label="Número de pedido" />
          </div>
          <div>
            <TextField
              className={classes.textField}
              id="outlined-required"
              label="Información"
            />
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
          <div>
            <button type="reset">Resetear petición</button>
          </div>
        </form>
      </Box>
    </Grid>
  );
}
