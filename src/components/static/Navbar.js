import { ShoppingCart } from "@mui/icons-material";
import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { makeStyles } from "@mui/styles";
import * as React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/bagLogo.png";
import { useStateValue } from "../../hooks/StateProvider";
import LikeReview from "../source/LikeReviews";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "4rem",
  },

  grow: {
    flexGrow: 1,
  },

  appBar: {
    backgroundColor: "whitesmoke",
    boxShadow: "none",
    color: "rgb(255, 141, 141)",
  },

  button: {
    marginLeft: "1px",
  },

  image: {
    height: "100%",
    color: "white",
  },

  title: {
    color: "white" + "!important",
  },
}));
export function Navbar() {
  const classes = useStyles();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className={classes.root}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <Icon edge="start" alt="bagLogo" className={classes.menuButton}>
              <img src={logo} className={classes.image} />
            </Icon>
            <div>
              <NavLink to="/" exact>
                <IconButton
                  variant="h5"
                  component="p"
                  important
                  className={classes.title}
                >
                  Bolsos Lola
                </IconButton>
              </NavLink>
            </div>
            <div>
              <LikeReview></LikeReview>
            </div>
            <div className={classes.grow} />
            <NavLink to="/contact-form" exact>
              <IconButton variant="h6" component="p" className={classes.title}>
                Servicio 24h
              </IconButton>
            </NavLink>
            <div className={classes.button} />
            <NavLink to="/checkout-page" exact>
              <IconButton aria-label="show cart items" color="#fdd9f8">
                <Badge badgeContent={basket?.length} color="primary">
                  <ShoppingCart fontsize="large" />
                </Badge>
              </IconButton>
            </NavLink>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
