import { AppBar, Box, Typography } from '@mui/material'
import React from 'react'
import { StyledToolBar } from '../styles/Header'
function Header() {
  return (
    <Box sx={{ flexGrow: 1, }}>
      <AppBar sx={{background:'#015958'}} >
        <StyledToolBar>
          <Typography p={1} sx={{display: { xs: 'none', sm:'block'}}} boxShadow='1px 1px 4px' variant="h5" fontWeight='600' fontSize='2.4rem'>
            COIN WALLET
          </Typography>
          <Typography variant="h6" fontWeight='600' fontSize='1.8rem'>
            User: teste@teste.com
          </Typography>
          <Typography variant="h6" fontWeight='600' fontSize='1.8rem'>
            Total expenses: R$569535
          </Typography>

        </StyledToolBar>
      </AppBar>
    </Box>
  )
}

export default Header
