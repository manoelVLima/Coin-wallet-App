import { Typography } from '@mui/material'
import React from 'react'
import { StyledToolBar } from '../styles/Header'
function Header() {
  return (
        <StyledToolBar>
          <Typography p={1} sx={{display: { xs: 'none', sm:'block'}}} variant="h5" fontWeight='600' fontSize='2rem'>
            COIN WALLET
          </Typography>
          <Typography variant="h6" fontWeight='600' fontSize='1.5rem'>
            User: teste@teste.com
          </Typography>
          <Typography variant="h6" fontWeight='600' fontSize='1.5rem'>
            R$569535
          </Typography>

        </StyledToolBar>

  )
}

export default Header;
