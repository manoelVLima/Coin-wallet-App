
import { Avatar, Button, Checkbox, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { StyledImg, StyledPaper } from '../styles/Login';
import logo from './Coin-wallet.jpg'

function Login() {
  return (
    <Grid bgcolor='#008F8C'>
      <StyledPaper elevation={1} >
        <Grid align='center'>
          <Avatar sx={{background: '#023535'}}/>
          <Typography marginTop={2} variant='h5'>
            Sign in
          </Typography>
        </Grid>
        <TextField color='success' size='small' label="E-mail" variant="outlined" placeholder='ex: teste@teste.com' fullWidth />
        <TextField color='success' size='small' label="Password" variant="outlined" placeholder='type your password' type="password" fullWidth  />
        <FormControlLabel control={<Checkbox color='success' size='small' defaultChecked />} label="Remember me" />

        <Button fullWidth variant="contained" color="success">
          Login
        </Button>
        <StyledImg  src={logo} alt="Coin wallet logo"/>
      </StyledPaper>
    </Grid>
  )
}

export default Login
