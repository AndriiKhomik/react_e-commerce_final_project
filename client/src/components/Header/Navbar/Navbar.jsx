import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import DrawerComponent from '../Drawer';
import Logo from '../../Logo/Logo';
import UserBlock from '../UserBlock';
import { StyledLink, StyledBox, StyledUserBox, StyledLogoBox } from './Styles';

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const handleCloseOpenDrawer = (e) => {
    if (!e.target.classList.contains('css-i4bv87-MuiSvgIcon-root')) {
      setOpenDrawer(false);
    }
    return false;
  };

  return (
    <>
      <Box elevation={0} onClick={(e) => handleCloseOpenDrawer(e)}>
        <Toolbar>
          <StyledBox>
            <StyledLogoBox>
              <Logo />
            </StyledLogoBox>

            {matches ? (
              <DrawerComponent
                openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}
              />
            ) : (
              <Box sx={{ display: 'flex' }}>
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
              </Box>
            )}
            <StyledUserBox>
              <UserBlock matches={matches} setOpenDrawer={setOpenDrawer} />
            </StyledUserBox>
          </StyledBox>
        </Toolbar>
      </Box>
    </>
  );
};

export default Navbar;
