import * as React from 'react';
import { makeStyles } from "@mui/styles";
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
//import {useStateValue} from "../StateProvider";
import CheckoutCard from "./CheckoutCard";
import products from './productData.js';
import Total from './Total';


const useStyles = makeStyles ((theme) => 
({
    root:{
        flexGrow:1, 
        padding :" 2rem"
    },
}));

const CheckOutPage = () =>{
    const classes = useStyles(); 
    //const [{basket}, dispatch] = useStateValue(); 

    //--Grid included in other grid.--

    function FormRow(){

        return(
            <React.Fragment>
                {products?.map (product=>(
                    <Grid item xs={12} sm={8} md={6} lg={4}>
                        <CheckoutCard
                            key={product.id} product= {product}
                        />
                    </Grid>
                ))}
            </React.Fragment>
        );
        
    }
    
    return(
        <div className = {classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography align= 'center' gutterBottom variant="h5">
                        Carrito de la compra
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={8} md={9} container spacing ={2}>
                    <FormRow></FormRow>
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <Typography align='center' gutterBottom variant="h5">
                        <Total></Total> 
                    </Typography>
                </Grid>
            </Grid>
        </div>
    ); 
};

export default CheckOutPage;