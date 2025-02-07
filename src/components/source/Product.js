import { AddShoppingCart } from "@mui/icons-material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import accounting from "accounting";
import * as React from "react";
import { useStateValue } from "../../hooks/StateProvider";
import { actionTypes } from "../../reducer";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },

  action: {
    marginTop: "3rem",
  },

  image: {
    height: "10rem",
    paddingTop: "56.25%",
  },
}));

export default function Product({
  product: { id, name, productType, image, price, rating, description },
}) {
  const classes = useStyles();
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        id: id,
        name: name,
        productType: productType,
        image: image,
        price: price,
        rating: rating,
        description: description,
      },
    });
  };
  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <Typography
            className={classes.action}
            variant="h5"
            color="textSecondary"
          >
            {accounting.formatMoney(price, "€")}
          </Typography>
        }
        title={name}
        subheader={productType}
      />
      <CardMedia className={classes.image} image={image} />

      <CardActions disableSpacing>
        <IconButton aria-label="Add to Cart" onClick={addToBasket}>
          <AddShoppingCart fontSize="large" />
        </IconButton>
        <IconButton aria-label="share">
          {Array(rating)
            .fill()
            .map((_, i) => (
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
