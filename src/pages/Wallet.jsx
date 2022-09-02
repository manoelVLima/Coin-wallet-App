import { Container } from '@mui/material';
import React from 'react'
import Header from '../components/Header';

function Wallet() {
  return (
    <Container sx={{
      fontFamily: 'Titan One, cursive',
      width: '80vw',
      background: 'red',
      marginTop: 2
    }}>
      <Header />

    </Container>
  )
}

export default Wallet;
