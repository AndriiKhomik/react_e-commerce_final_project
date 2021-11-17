import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';

import { Box } from '@mui/system';
import DrawerComponent from '../Drawer';
import Logo from '../../Logo/Logo';
import UserBlock from '../UserBlock';

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
      <Box
        elevation={0}
        sx={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid orange' }}
        onClick={(e) => handleCloseOpenDrawer(e)}
      >
        <Toolbar>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}
            component='div'
          >
            <Box sx={{ fontSize: '20px' }}>
              <Logo />
            </Box>

            {matches ? (
              <DrawerComponent
                openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}
              />
            ) : (
              <Box sx={{ display: 'flex' }}>
                <Typography
                  sx={{
                    marginRight: '20px',
                    cursor: 'pointer',
                    color: '#616161',
                  }}
                >
                  <NavLink exact to='/'>
                    Home
                  </NavLink>
                </Typography>
                <Typography
                  sx={{
                    marginRight: '20px',
                    cursor: 'pointer',
                    color: '#616161',
                  }}
                  aria-controls='basic-menu'
                  area-haspopup='true'
                >
                  <NavLink exact to='/catalogue'>
                    Catalogue
                  </NavLink>
                </Typography>
                <Typography
                  sx={{
                    marginRight: '20px',
                    cursor: 'pointer',
                    color: '#616161',
                  }}
                >
                  <NavLink exact to='/discounts'>
                    Best Price
                  </NavLink>
                </Typography>
                <Typography
                  sx={{
                    marginRight: '20px',
                    cursor: 'pointer',
                    color: '#616161',
                    textDecoration: 'none',
                  }}
                >
                  <NavLink exact to='/blog'>
                    Blogs
                  </NavLink>
                </Typography>
                <Typography
                  sx={{
                    marginRight: '20px',
                    cursor: 'pointer',
                    color: '#616161',
                    textDecoration: 'none',
                  }}
                >
                  <NavLink exact to='/authors'>
                    Authors
                  </NavLink>
                </Typography>
                <Typography
                  sx={{
                    marginRight: '20px',
                    cursor: 'pointer',
                    color: '#616161',
                  }}
                >
                  <NavLink exact to='/shoppingcart'>
                    Shopping Cart
                  </NavLink>
                </Typography>
              </Box>
            )}

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <UserBlock matches={matches} setOpenDrawer={setOpenDrawer} />
            </Box>
          </Box>
        </Toolbar>
      </Box>
    </>
  );
};

export default Navbar;
