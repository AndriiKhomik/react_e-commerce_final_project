import React, { useState } from 'react';
import { Typography, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import DrawerComponent from '../Drawer';
import Logo from '../../Logo/Logo';
import UserBlock from '../UserBlock';
import theme from '../../../services/theme/theme';
import {
  StyledLink,
  StyledBox,
  StyledUserBox,
  StyledLogoBox,
  StyledLinkBox,
} from './Styles';

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const changeMenu = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = (value) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpenDrawer(value);
  };

  return (
    <>
      <Box
        elevation={0}
        onClick={() => toggleDrawer()}
        sx={{ marginBottom: '36px' }}
      >
        <StyledBox>
          <StyledLogoBox>
            <Logo />
          </StyledLogoBox>

          {changeMenu ? (
            <DrawerComponent
              openDrawer={openDrawer}
              setOpenDrawer={setOpenDrawer}
            />
          ) : (
            <StyledLinkBox>
              <Typography>
                <StyledLink exact to='/' activeClassName='selected'>
                  Home
                </StyledLink>
              </Typography>
              <Typography aria-controls='basic-menu' area-haspopup='true'>
                <StyledLink exact to='/products' activeClassName='selected'>
                  Catalogue
                </StyledLink>
              </Typography>
              <Typography>
                <StyledLink exact to='/promotionals' activeClassName='selected'>
                  Promotionals
                </StyledLink>
              </Typography>
              <Typography>
                <StyledLink exact to='/authors' activeClassName='selected'>
                  Authors
                </StyledLink>
              </Typography>
            </StyledLinkBox>
          )}
          <StyledUserBox>
            <UserBlock changeMenu={changeMenu} setOpenDrawer={setOpenDrawer} />
          </StyledUserBox>
        </StyledBox>
      </Box>
    </>
  );
};

export default Navbar;
