import { Button, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyledContainer } from '../styles/Wallet';
import { getCoins, saveExpense } from '../redux/actions/actions';

function WalletForm() {
  const dispatch = useDispatch();
  const { wallet: { expenses } } = useSelector((state)=> state);
  const [expense, setExpense] = useState({
    Budget:'',
    Description:'',
    Currency:'',
    Method:'',
    Tag:'',

  });

  const {wallet: {currencies} } = useSelector((state) => state)

  useEffect(() => {
    dispatch(getCoins())
  }, [dispatch])

  const handleChange = ({target}) => {
    setExpense({...expense,[target.name]: target.value})
  }
  const handleClick = (event) => {
    event.preventDefault();

    dispatch(saveExpense({
      id: expenses.length,
      ...expense
    }));

    setExpense({
      Budget:'',
      Description:'',
      Currency:'',
      Method:'',
      Tag:'',
      })
  }
  return ( 
  <Container maxWidth='100vw' sx={{display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'flex-start',}}>
    <Typography variant="h6" fontWeight='600' fontSize='3.5rem'>
            R$0.00
    </Typography>
    <Typography marginTop={3} marginBottom={3} variant="h5">Add your expenses</Typography>
    <StyledContainer>
      <TextField onChange={handleChange} value={expense.Budget ? expense.Budget: ''} fullWidth type="number" name="Budget" label="Budget" sx={{flex: 1, marginTop:1}} color="success"/>
      <TextField onChange={handleChange} value={expense.Description ? expense.Description: ''} fullWidth type="text" name="Description" label="Description" sx={{flex: 1,marginTop:1}} color="success"/>
      <FormControl fullWidth sx={{flex: 1, marginTop:1}} >
        <InputLabel id="currency">Currency</InputLabel>
        <Select
          labelId="currency"
          id="currency"
          label="currency"
          color="success"
          name="Currency"
          onChange={handleChange}
          value={expense.Currency ? expense.Currency : ""}
    
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
          name="Tag"
          onChange={handleChange}
          value={expense.Tag ? expense.Tag : ""}
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
          name='Method'
          onChange={handleChange}
          value={expense.Method ? expense.Method : ""}
        >
          <MenuItem value="Money">Money</MenuItem>
          <MenuItem value="Credit Card">Credit Card</MenuItem>
          <MenuItem value="Debit Card">Debit Card</MenuItem>
        </Select>
      </FormControl>
      <Button onClick={handleClick} type="submit" sx={{flex:1, marginLeft:2, marginTop:1.5}} variant="contained" color="success">
        New Expense
      </Button>
    </StyledContainer>
  </Container>
  )
}

export default WalletForm
