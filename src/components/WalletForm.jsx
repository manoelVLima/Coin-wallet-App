import { Button, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyledContainer } from '../styles/Wallet';
import { getCoins } from '../redux/actions/actions';

function WalletForm() {
  const dispatch = useDispatch();
  const {wallet: {currencies} } = useSelector((state) => state)
  console.log(currencies);

  useEffect(() => {
    dispatch(getCoins())
  }, [dispatch])

  return ( 
  <Container sx={{background:'white', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'flex-start',}}>
    <Typography variant="h6" fontWeight='600' fontSize='3.5rem'>
            R$0.00
    </Typography>
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
          {currencies.map((coin,index) => 
            <MenuItem value={coin} key={index}>{coin}</MenuItem>
          )}
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
          <MenuItem value="Food">Food</MenuItem>
          <MenuItem value="Leisure">Leisure</MenuItem>
          <MenuItem value="Transport">Transport</MenuItem>
          <MenuItem value="Health">Health</MenuItem>
          <MenuItem value="Work">Work</MenuItem>
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
          <MenuItem value="Money">Money</MenuItem>
          <MenuItem value="Credit Card">Credit Card</MenuItem>
          <MenuItem value="Debit Card">Debit Card</MenuItem>
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
