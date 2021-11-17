import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Badge, Button, IconButton } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

const UserBlock = ({ matches, setOpenDrawer }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // delete finction
  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <>
      <IconButton>
        <SearchIcon />
      </IconButton>
      {isLoggedIn && (
        <IconButton>
          <PersonOutlineIcon />
        </IconButton>
      )}
      {matches ? (
        <IconButton onClick={() => setOpenDrawer(true)}>
          <MenuRoundedIcon />
        </IconButton>
      ) : (
        <IconButton>
          <Badge badgeContent={4} color='secondary' sx={{ marginRight: '8px' }}>
            <ShoppingBasketIcon color='action' />
          </Badge>
        </IconButton>
      )}
      {isLoggedIn ? (
        <Button
          sx={{ backgroundColor: '#FF4081' }}
          disableElevation
          variant='contained'
          onClick={handleLogin}
        >
          <LogoutIcon sx={{ marginRight: '8px' }} />
          Logout
        </Button>
      ) : (
        <Button
          sx={{ backgroundColor: '#FF4081' }}
          disableElevation
          variant='contained'
          onClick={handleLogin}
        >
          <LoginIcon sx={{ marginRight: '8px' }} />
          Login
        </Button>
      )}
    </>
  );
};

UserBlock.propTypes = {
  matches: PropTypes.bool.isRequired,
  setOpenDrawer: PropTypes.func.isRequired,
};

export default UserBlock;
