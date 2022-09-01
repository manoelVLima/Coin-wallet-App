
import { Avatar, Button, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { StyledPaper } from '../styles/Login';

function Login() {
  return (
    <Grid bgcolor='#008F8C'>
      <StyledPaper elevation={10} >
        <Grid align='center'>
          <Avatar sx={{background: '#023535'}}/>
          <Typography marginTop={2} variant='h5'>
            Sign in
          </Typography>
        </Grid>
        <TextField color='success' size='small' label="E-mail" variant="outlined" placeholder='ex: teste@teste.com' fullWidth />
        <TextField color='success' size='small' label="Password" variant="outlined" placeholder='type your password' type="password" fullWidth  />
        <Button fullWidth variant="contained" color="success">
          Success
        </Button>

      </StyledPaper>
    </Grid>
  )
}

export default Login
