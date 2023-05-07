import * as React from 'react';
import fondoTienda from '../assets/bagLogo.png';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Image from '@mui/icons-material';

export function HomePage() {
  return (
        <Box
          sx={{
            width: "100%",
            height: "400px",
            backgroundColor: '#fdd9f8',
            backgroundImage: '../assets/fondoTienda.jpg'
          }}
        >
          <Container>
            <IconButton position= "centered"
            > Presione para continuar.</IconButton>
          </Container>

        </Box>
    )
  }


