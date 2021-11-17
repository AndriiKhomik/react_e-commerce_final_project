import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Toolbar,
  IconButton,
  Typography,
  Button,
  Badge,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Box } from '@mui/system';
import DrawerComponent from '../Drawer';
import logo from './logo.png';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  const openMenu = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseOpenDrawer = (e) => {
    // if (e.target !== )
    if (!e.target.classList.contains('css-i4bv87-MuiSvgIcon-root')) {
      setOpenDrawer(false);
    }
    return false;
  };

  return (
    <>
      <Box
        elevation={0}
        sx={{ backgroundColor: '#FFFFFF' }}
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
            <Box>
              <IconButton>
                <img src={logo} alt='logo' style={{ width: '30px' }} />
              </IconButton>
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
                  aria-expanded={openMenu ? 'true' : undefined}
                  onClick={handleClick}
                >
                  <NavLink exact to='/catalogue'>
                    Catalogue
                  </NavLink>
                </Typography>
                <Menu
                  id='basic-menu'
                  anchorEl={anchorEl}
                  open={openMenu}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>For Kids</MenuItem>
                  <MenuItem onClick={handleClose}>Comedy</MenuItem>
                </Menu>
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
              <Button
                sx={{ backgroundColor: '#FF4081' }}
                disableElevation
                variant='contained'
              >
                Login
              </Button>

              {matches ? (
                <IconButton onClick={() => setOpenDrawer(true)}>
                  <MenuRoundedIcon />
                </IconButton>
              ) : (
                <IconButton>
                  <Badge badgeContent={4} color='secondary'>
                    <ShoppingBasketIcon color='action' />
                  </Badge>
                </IconButton>
              )}
            </Box>
          </Box>
        </Toolbar>
      </Box>
    </>
  );
};

export default Navbar;
