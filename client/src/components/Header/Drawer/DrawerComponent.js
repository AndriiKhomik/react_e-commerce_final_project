import React from 'react';
import PropTypes from 'prop-types';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

const DrawerComponent = ({ openDrawer, setOpenDrawer }) => {
  return (
    <Drawer anchor='left' open={openDrawer}>
      <List>
        <ListItem divider button onClick={() => setOpenDrawer(false)}>
          <ListItemIcon>
            <ListItemText>For Kids</ListItemText>
          </ListItemIcon>
        </ListItem>
        <ListItem button onClick={() => setOpenDrawer(false)}>
          <ListItemIcon>
            <ListItemText>Comedy</ListItemText>
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
