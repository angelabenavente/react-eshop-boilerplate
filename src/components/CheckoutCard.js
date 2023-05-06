import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {AddShoppingCart} from '@mui/icons-material'
import { makeStyles } from "@mui/styles";
import accounting from 'accounting';




const useStyles =makeStyles((theme)=> ({

    root: {
        maxWidth: 345, 
    },

    action: {
        marginTop: "3rem",
    },

    expand : {
        transform: 'rotate (0deg)',
        marginLeft: 'auto', 
    },

    expandOpen: {
        transform: "rotate(180deg)",
    },

    image: {
      height: "10rem",
      paddingTop: '56.25%'
    }
})); 

export default function CheckoutCard({
    product: {id, name, productType, image, price, rating, description},
}) {
  const classes= useStyles();
  const [expanded,setExpanded] = React.useState(false);

  const handleExpandClick = () =>
  {
    setExpanded(!expanded);
  }

  return (
    <Card className= {classes.root}>
      <CardHeader
      action={
        <Typography
         className={classes.action}
         variant= 'h5'
         color= 'textSecondary'
         >
            {accounting.formatMoney(price, "€")}
        </Typography>
      }
        title={name}
        subheader={productType}
      />
      <CardMedia 
        className={classes.image}
        image = {image}
      />

      <CardActions disableSpacing>
        <IconButton aria-label="Add to Cart">
          <AddShoppingCart fontSize= 'large'/>
        </IconButton>
        <IconButton aria-label="share">
         {Array(rating)
         .fill()
         .map((_,i)=>(
            <p>&#11088;</p>
         ))}
        </IconButton>
      </CardActions>
        <CardContent>
          <Typography paragraph> {description}</Typography>
        </CardContent>
    </Card>
  );
}
