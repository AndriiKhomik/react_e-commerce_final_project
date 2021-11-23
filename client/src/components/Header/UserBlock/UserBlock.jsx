import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IconButton, Box, Input, useMediaQuery } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useHistory } from 'react-router-dom';
import {
  StyledBadge,
  StyledButton,
  StyledLoginIcon,
  StyledLogoutIcon,
} from './Styles';
import theme from '../../../services/theme/theme';

const UserBlock = ({ changeMenu, setOpenDrawer }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showSearchInput, setshowSearchInput] = useState(false);

  const matchesButtonQuery = useMediaQuery(theme.breakpoints.up('ds'));
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
      <IconButton onClick={redirectToCart} sx={{ marginRight: '8px' }}>
        <StyledBadge badgeContent={4} color='warning'>
          <ShoppingBasketIcon color='action' />
        </StyledBadge>
      </IconButton>
      {isLoggedIn ? (
        <StyledButton
          disableElevation
          variant='contained'
          onClick={handleLogin}
        >
          <StyledLogoutIcon />
          {matchesButtonQuery && 'Logout'}
        </StyledButton>
      ) : (
        <StyledButton
          disableElevation
          variant='contained'
          onClick={handleLogin}
        >
          <StyledLoginIcon />
          {matchesButtonQuery && 'Login'}
        </StyledButton>
      )}
      {changeMenu && (
        <IconButton onClick={() => setOpenDrawer(true)}>
          <MenuRoundedIcon />
        </IconButton>
      )}
    </>
  );
};

UserBlock.propTypes = {
  changeMenu: PropTypes.bool.isRequired,
  setOpenDrawer: PropTypes.func.isRequired,
};

export default UserBlock;
