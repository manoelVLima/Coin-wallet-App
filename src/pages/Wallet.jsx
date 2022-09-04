import { Stack } from '@mui/material';
import React from 'react'
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';

function Wallet() {
  return (
    <Stack spacing={0}>
      <Header />
      <WalletForm />
    </Stack>
  )
}

export default Wallet;
