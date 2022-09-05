import { Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { StyledToolBar } from '../styles/Header'
function Header() {

  const {user, wallet} = useSelector((state) => state);
  console.log(user);
  return (
        <StyledToolBar>
          <Typography p={1} sx={{display: { xs: 'none', sm:'block'}}} variant="h5" fontWeight='600' fontSize='2rem'>
            COIN WALLET
          </Typography>
          <Typography variant="h6" fontWeight='600' fontSize='1.5rem'>
            User: <em>{user.email}</em>
          </Typography>
          <Typography variant="h6" fontWeight='600' fontSize='1.5rem'>
            R$0.00
          </Typography>

        </StyledToolBar>

  )
}

export default Header;
