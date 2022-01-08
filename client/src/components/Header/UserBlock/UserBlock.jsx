import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton, Box, useMediaQuery } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
// import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useHistory } from 'react-router-dom';
import {
  StyledBadge,
  StyledButton,
  StyledLoginIcon,
  StyledLogoutIcon,
} from './Styles';
import theme from '../../../services/theme/theme';
import CartIcon from '../../icons/CartIcon';
import LoginModal from '../../LoginModal/LoginModal';
import { setIsLoginFalse } from '../../../store/login/actions';

const UserBlock = ({ changeMenu, setOpenDrawer }) => {
  const addedBooks = useSelector((data) => data.shoppingCart);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const isLoggedIn = useSelector((data) => data.login.isLogin);

  const dispatch = useDispatch();
  // const totalCount = useSelector((data) => data.shoppingCart.orderTotal);
  // const [showSearchInput, setshowSearchInput] = useState(false);

  const matchesButtonQuery = useMediaQuery(theme.breakpoints.up('ds'));
  const toDirectPage = useHistory();

  const redirectToCart = () => {
    toDirectPage.push('/shoppingcart');
  };

  const redirectToProfile = () => {
    toDirectPage.push('/profile');
  };

  const addBooks = addedBooks.reduce((acc, item) => {
    return acc + item.cartQuantity;
  }, 0);

  // const handleSearchInput = () => {
  //   setshowSearchInput(!showSearchInput);
  // };

  const handleLogin = () => {
    if (!isLoggedIn) {
      setIsLoginModalOpen(true);
    }
  };

  const handleLogout = () => {
    if (isLoggedIn) {
      dispatch(setIsLoginFalse());
      localStorage.removeItem('token');
      localStorage.removeItem('email');
    }
  };
  const handleClose = () => setIsLoginModalOpen(false);

  return (
    <>
      {/* {showSearchInput && (
        <Input
          sx={{
            border: '1px solid grey',
            paddingLeft: '4px',
            borderRadius: '5px',
          }}
        />
      )} */}
      <Box component='form' />
      {/* <IconButton onClick={handleSearchInput}>
        <SearchIcon />
      </IconButton> */}
      {isLoggedIn && (
        <IconButton onClick={redirectToProfile}>
          <PersonOutlineIcon />
        </IconButton>
      )}
      <IconButton onClick={redirectToCart} sx={{ marginRight: '8px' }}>
        <StyledBadge badgeContent={addBooks} showZero color='warning'>
          <CartIcon color='action' fill='#727272' height='22px' width='22px' />
        </StyledBadge>
      </IconButton>
      {isLoggedIn ? (
        <>
          <StyledButton
            disableElevation
            variant='contained'
            onClick={handleLogout}
          >
            <StyledLogoutIcon />
            {matchesButtonQuery && 'Logout'}
          </StyledButton>
        </>
      ) : (
        <>
          <StyledButton
            disableElevation
            variant='contained'
            onClick={handleLogin}
          >
            <StyledLoginIcon />
            {matchesButtonQuery && 'Login'}
          </StyledButton>
          <LoginModal
            isLoginModalOpen={isLoginModalOpen}
            handleClose={handleClose}
          />
        </>
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
