import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import DrawerComponent from '../Drawer';
import Logo from '../../Logo/Logo';
import UserBlock from '../UserBlock';
import {
  StyledLink,
  StyledBox,
  StyledUserBox,
  StyledLogoBox,
  StyledLinkBox,
} from './Styles';

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const theme = useTheme();
  const changeMenu = useMediaQuery(theme.breakpoints.down('md'));
  const changeLogo = useMediaQuery(theme.breakpoints.down('sm'));

  const handleCloseOpenDrawer = (e) => {
    if (!e.target.classList.contains('css-i4bv87-MuiSvgIcon-root')) {
      setOpenDrawer(false);
    }
    return false;
  };

  return (
    <>
      <Box elevation={0} onClick={(e) => handleCloseOpenDrawer(e)}>
        <StyledBox>
          <StyledLogoBox>{changeLogo ? 'LG' : <Logo />}</StyledLogoBox>

          {changeMenu ? (
            <DrawerComponent
              openDrawer={openDrawer}
              setOpenDrawer={setOpenDrawer}
            />
          ) : (
            <StyledLinkBox>
              <Typography>
                <StyledLink as={NavLink} exact to='/'>
                  Home
                </StyledLink>
              </Typography>
              <Typography aria-controls='basic-menu' area-haspopup='true'>
                <StyledLink as={NavLink} exact to='/catalogue'>
                  Catalogue
                </StyledLink>
              </Typography>
              <Typography>
                <StyledLink as={NavLink} exact to='/discounts'>
                  Best Price
                </StyledLink>
              </Typography>
              <Typography>
                <StyledLink as={NavLink} exact to='/blog'>
                  Blogs
                </StyledLink>
              </Typography>
              <Typography>
                <StyledLink as={NavLink} exact to='/authors'>
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
