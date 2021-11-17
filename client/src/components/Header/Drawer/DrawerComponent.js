import React from 'react';
import PropTypes from 'prop-types';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

const DrawerComponent = ({ openDrawer, setOpenDrawer }) => {
  return (
    <Drawer anchor='left' open={openDrawer}>
      <List>
        <ListItem button onClick={() => setOpenDrawer(false)}>
          <ListItemIcon>
            <ListItemText>
              <NavLink exact to='/home'>
                Home
              </NavLink>
            </ListItemText>
          </ListItemIcon>
        </ListItem>
        <ListItem button onClick={() => setOpenDrawer(false)}>
          <ListItemIcon>
            <ListItemText>
              <NavLink exact to='/catalogue'>
                Catalogue
              </NavLink>
            </ListItemText>
          </ListItemIcon>
        </ListItem>
        <ListItem button onClick={() => setOpenDrawer(false)}>
          <ListItemIcon>
            <ListItemText>
              <NavLink exact to='/bestprice'>
                Best Price
              </NavLink>
            </ListItemText>
          </ListItemIcon>
        </ListItem>
        <ListItem button onClick={() => setOpenDrawer(false)}>
          <ListItemIcon>
            <ListItemText>
              <NavLink exact to='/blog'>
                Blogs
              </NavLink>
            </ListItemText>
          </ListItemIcon>
        </ListItem>
        <ListItem button onClick={() => setOpenDrawer(false)}>
          <ListItemIcon>
            <ListItemText>
              <NavLink exact to='/shoppingcart'>
                Shopping Cart
              </NavLink>
            </ListItemText>
          </ListItemIcon>
        </ListItem>
      </List>
    </Drawer>
  );
};

DrawerComponent.propTypes = {
  openDrawer: PropTypes.bool.isRequired,
  setOpenDrawer: PropTypes.func.isRequired,
};

export default DrawerComponent;
