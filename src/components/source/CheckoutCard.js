import DeleteIcon from "@mui/icons-material/Delete";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
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
    marginTop: "1rem",
  },

  image: {
    height: "0",
    paddingTop: "56.25%",
  },

  cardActions: {
    display: "flex",
    justifyContent: "space-between",
    textAlign: "center",
  },

  cardRating: {
    display: "flex",
  },
}));

export default function CheckoutCard({
  product: { id, name, productType, image, price, rating, description },
}) {
  const classes = useStyles();
  const [{ basket }, dispatch] = useStateValue();

  const removeItem = () => {
    dispatch({
      type: actionTypes.REMOVE_ITEM,
      id: id,
      name: name,
      productType: productType,
      image: image,
      price: price,
      rating: rating,
      description: description,
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
      <CardMedia className={classes.image} image={image} title={name} />

      <CardActions disableSpacing className={classes.cardActions}>
        <div className={classes.cardRating}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>&#11088;</p>
            ))}
        </div>
        <IconButton>
          <DeleteIcon font-size="large" onClick={removeItem}></DeleteIcon>
        </IconButton>
      </CardActions>
    </Card>
  );
}
