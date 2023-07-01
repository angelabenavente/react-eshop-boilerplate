import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "../styles/FooterStyles";
import { Typography } from '@mui/material';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme)=> ({

  root: {
      flexGrow: 1,
      marginBottom: "4rem",
      color: "white", 
      textAlign: "center", 
      marginTop: "-50px", 
      marginLeft: "-100px"
  },

 
}));

export  function Footer () {
  const classes = useStyles()
  return (
    <Box>
      <h1 className={classes.root}>
        Bolsos Lola: Encuentra tu complemento para cada ocasión.
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>Nosotros</Heading>
            <FooterLink href="#">Tiendas</FooterLink>
          </Column>
          <Column>
            <Heading>Servicios</Heading>
            <FooterLink href="#">Atención personalizada</FooterLink>
            <FooterLink href="#">Atención 24h</FooterLink>
          </Column>
          <Column>
            <Heading>Contáctanos</Heading>
            <FooterLink href="/contact-form">Formulario</FooterLink>
          </Column>
          <Column>
            <Heading>Redes sociales</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
