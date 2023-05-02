import * as React from 'react';
// import { styled } from '@mui/material/styles';
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

export default function Product() {
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
            {accounting.formatMoney(50, "€")}
        </Typography>
      }
        title="Bolso Carolina Herrero"
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image= "https://media.istockphoto.com/id/1363767151/de/foto/gelbe-ledertasche-einer-isolierten-frau-auf-wei%C3%9Fem-hintergrund.jpg?s=1024x1024&w=is&k=20&c=i4e7MUMrezHBIYqBFCLqk6xwZDjrgOcgjiCi6ZT8gBc="
        alt="Foto de bolso 1"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {/* {productType} */}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to Cart">
          <AddShoppingCart fontSize= 'large'/>
        </IconButton>
        <IconButton aria-label="share">
         {Array(1)
         .fill()
         .map((_,i)=>(
            <p>&#11088;</p>
         ))}
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph> "Anadir la descripcion que queramos"
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
