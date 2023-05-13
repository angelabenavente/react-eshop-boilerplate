import React from 'react';
import accounting from 'accounting';
import { Button } from '@mui/material';
import { makeStyles } from "@mui/styles";
import { useStateValue } from '../../StateProvider';


const useStyles = makeStyles((theme)=>({

    root: {
        display:"flex",
        flexDirection: "column",
        justifyContent: "center", 
        alignItems: "center",
        height: "20vh",
    },

    button: {
        marginTop: "2rem"
    }

}))
const Total = () => {

  const classes = useStyles()
  const [{basket}, dispatch] = useStateValue(); 
  const prices=[]; 
  for(let i=0; i<basket.length; i++)
  {
    prices.push(basket[i].price);
  }
  const sumBasket = prices.reduce((valorAnterior, valorActual) => {
    return valorAnterior + valorActual;
  }, 0);

  return (
    <div className={classes.root}>
        <h5>Total de items: {basket?.length}</h5>
        <h5>{accounting.formatMoney(sumBasket,"€")}</h5>
        <Button className={classes.button} variant= "contained" color="secondary"> Check out </Button>
    </div>
  )
}

export default Total