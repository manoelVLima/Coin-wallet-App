import { Button, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React from 'react'
import { StyledContainer } from '../styles/Wallet'

function WalletForm() {
  return ( 
  <Container sx={{background:'white', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
    <Typography marginTop={3} marginBottom={3} variant="h5">Add your expenses</Typography>
    <StyledContainer>
      <TextField fullWidth type="number" label="Budget" sx={{flex: 1, marginTop:1}} color="success"/>
      <TextField fullWidth type="text" label="Description" sx={{flex: 1,marginTop:1}} color="success"/>
      <FormControl fullWidth sx={{flex: 1, marginTop:1}} >
        <InputLabel id="currency">Currency</InputLabel>
        <Select
          labelId="currency"
          id="currency"
          label="currency"
          color="success"
    
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{flex: 1, marginTop:1}} >
        <InputLabel id="currency">Tag</InputLabel>
        <Select
          labelId="tag"
          id="tag"
          label="tag"
          color="success"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{flex: 1, marginTop:1}} >
        <InputLabel id="method">Payment</InputLabel>
        <Select
          labelId="method"
          id="method"
          label="method"
          color="success"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <Button sx={{flex:1, marginLeft:2, marginTop:1.5}} variant="contained" color="success">
        New Expense
      </Button>
    </StyledContainer>
  </Container>
  )
}

export default WalletForm
