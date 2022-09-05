import { Stack } from '@mui/material';
import React from 'react'
import Header from '../components/Header';
import Table from '../components/Table';
import WalletForm from '../components/WalletForm';

function Wallet() {
  return (
    <Stack bgcolor='white' spacing={0}>
      <Header />
      <WalletForm />
      <Table/>
    </Stack>
  )
}

export default Wallet;
