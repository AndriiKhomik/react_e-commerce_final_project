import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Badge, IconButton, Box, Input } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useHistory } from 'react-router-dom';
import { StyledButton, StyledLoginIcon, StyledLogoutIcon } from './Styles';

const UserBlock = ({ matches, setOpenDrawer }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showSearchInput, setshowSearchInput] = useState(false);

  const toShoppingCart = useHistory();

  const redirectToCart = () => {
    toShoppingCart.push('/shoppingcart');
  };

  const handleSearchInput = () => {
    setshowSearchInput(!showSearchInput);
  };

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <>
      {showSearchInput && (
        <Input
          sx={{
            border: '1px solid grey',
            paddingLeft: '4px',
            borderRadius: '5px',
          }}
        />
      )}
      <Box component='form' />
      <IconButton onClick={handleSearchInput}>
        <SearchIcon />
      </IconButton>
      {isLoggedIn && (
        <IconButton>
          <PersonOutlineIcon />
        </IconButton>
      )}
      {matches && (
        <IconButton onClick={() => setOpenDrawer(true)}>
          <MenuRoundedIcon />
        </IconButton>
      )}
      <IconButton onClick={redirectToCart} sx={{ marginRight: '8px' }}>
        <Badge badgeContent={4} color='warning'>
          <ShoppingBasketIcon color='action' />
        </Badge>
      </IconButton>
      {isLoggedIn ? (
        <StyledButton
          disableElevation
          variant='contained'
          onClick={handleLogin}
        >
          <StyledLogoutIcon />
          Logout
        </StyledButton>
      ) : (
        <StyledButton
          disableElevation
          variant='contained'
          onClick={handleLogin}
        >
          <StyledLoginIcon />
          Login
        </StyledButton>
      )}
    </>
  );
};

UserBlock.propTypes = {
  matches: PropTypes.bool.isRequired,
  setOpenDrawer: PropTypes.func.isRequired,
};

export default UserBlock;
