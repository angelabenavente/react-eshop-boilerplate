import * as React from 'react';
import { makeStyles } from "@mui/styles";
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import {useStateValue} from "../../StateProvider";
import CheckoutCard from "../source/CheckoutCard";
import Total from '../source/Total';
import { dispatch } from 'redux';

const useStyles = makeStyles ((theme) => 
({
    root:{
        flexGrow:1, 
        padding :" 2rem"
    },
}));

export  function CheckOutPage (){
    const classes = useStyles(); 
    const [{basket}, dispatch] = useStateValue(); 

    //--Grid included in other grid.--

    function FormRow(){

        return(
            <React.Fragment>
                {basket?.map ((item)=>(
                    <Grid item xs={12} sm={8} md={6} lg={4}>
                        <CheckoutCard
                            key={item.id} product= {item}
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
                    <Typography align= 'center' gutterBottom variant="h4">
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

