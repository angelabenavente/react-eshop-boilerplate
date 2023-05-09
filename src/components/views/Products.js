//It contains all the products. It will have several "Product.js". 
//Functionality: Grid. 
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Product from "../source/Product.js"
import { makeStyles } from "@mui/styles";
import products from "../data/productData.js";
import {UsePagination} from '../static/UsePagination.js';

const useStyles =makeStyles((theme)=> ({

    root: {
        flexGrow: 1, 
    },
})); 


export  function Products() {

    const classes= useStyles();

  return (

    <div className={classes.root}>
         <Grid container spacing={3}>
          {
              products.map( product=> (
                <Grid item xs={12} sm={6} lg={3}>
                  <Product key ={product.id} product ={product}/>
                </Grid>
              ))
          }
      </Grid>
      <UsePagination/>
    </div>
     
  );
}
