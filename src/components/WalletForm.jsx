import { Box, Button, Container, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'

function WalletForm() {
  return ( 
  <Container  sx={{background:'white', display:'flex', flexDirection: { xs: 'column' , sm:'row'}, padding:2, margin:'0 auto'}}>
    <TextField type="number" label="Budget" sx={{flex: 1}} color="success"/>
    <TextField type="text" label="Description" sx={{flex: 1}} color="success"/>
    <FormControl sx={{flex: 1}} >
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
    <FormControl sx={{flex: 1}} >
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
    <FormControl sx={{flex: 1}} >
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
    <Button sx={{flex:1, marginLeft:2}} variant="contained" color="success">
      New Expense
    </Button>
  </Container>
  )
}

export default WalletForm
