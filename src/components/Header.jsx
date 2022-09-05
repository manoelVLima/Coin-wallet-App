import { Avatar, Box, Menu, MenuItem, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { StyledToolBar } from '../styles/Header'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
function Header() {

  const {user} = useSelector((state) => state);
  const [open,setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true)
  }
  return (
        <StyledToolBar>
          <Typography sx={{display: {xs: 'none', sm: 'block'}}} p={1} variant="h5" fontWeight='600' fontSize='2rem'>
            COIN WALLET
          </Typography>
          <AttachMoneyIcon fontSize='large'/>
          <Box>
            <Avatar onClick={handleClick} alt="Remy Sharp" src="https://mui.com/static/images/avatar/6.jpg" />
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={()=> setOpen(false)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
        <MenuItem >{user.email}</MenuItem>
        <MenuItem ><Link to="/" style={{textDecoration: 'none', color:'black'}}>Logout</Link></MenuItem>
      </Menu>
          </Box>
        </StyledToolBar>

  )
}

export default Header;
