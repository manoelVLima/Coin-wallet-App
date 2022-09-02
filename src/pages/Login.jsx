
import { Avatar, Button, Checkbox, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyledImg, StyledPaper } from '../styles/Login';
import logo from './Coin-wallet.jpg'
import { getLogin } from '../redux/actions/actions';

function Login() {
  const [user , setUser] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setUser({...user, [event.target.name]: event.target.value})
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getLogin(user))

    setUser({})
  }

  return (
    <Grid bgcolor='#008F8C'>
      <StyledPaper elevation={1} >
        <Grid align='center'>
          <Avatar sx={{background: '#023535'}}/>
          <Typography marginTop={2} variant='h5'>
            Sign in
          </Typography>
        </Grid>
        <TextField value={user.email ? user.email : ""} autoComplete='off' name="email" onChange={handleChange} color='success' size='small' label="E-mail" variant="outlined" placeholder='ex: teste@teste.com' type="text" fullWidth />
        <TextField value={user.password ? user.password : ""} name="password" onChange={handleChange} color='success' size='small' label="Password" variant="outlined" placeholder='type your password' type="password" fullWidth  />
        <FormControlLabel control={<Checkbox color='success' size='small' defaultChecked />} label="Remember me" />

        <Button disabled={!user.email.includes('.com') || !user.email.includes('@') || user.password.length < 6} onClick={handleSubmit} fullWidth variant="contained" color="success">
          Login
        </Button>
        <StyledImg  src={logo} alt="Coin wallet logo"/>
      </StyledPaper>
    </Grid>
  )
}

export default Login
