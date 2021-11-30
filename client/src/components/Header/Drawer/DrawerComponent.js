import React from 'react';
import PropTypes from 'prop-types';
import { Drawer, List, ListItemIcon, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { StyledLink, StyledListItem } from './Styles';

const DrawerComponent = ({ openDrawer, setOpenDrawer }) => {
  return (
    <Drawer anchor='left' open={openDrawer}>
      <List>
        <StyledListItem button onClick={() => setOpenDrawer(false)}>
          <ListItemIcon>
            <ListItemText>
              <StyledLink as={NavLink} exact to='/home'>
                Home
              </StyledLink>
            </ListItemText>
          </ListItemIcon>
        </StyledListItem>
        <StyledListItem button onClick={() => setOpenDrawer(false)}>
          <ListItemIcon>
            <ListItemText>
              <StyledLink as={NavLink} exact to='/catalogue'>
                Catalogue
              </StyledLink>
            </ListItemText>
          </ListItemIcon>
        </StyledListItem>
        <StyledListItem button onClick={() => setOpenDrawer(false)}>
          <ListItemIcon>
            <ListItemText>
              <StyledLink as={NavLink} exact to='/bestprice'>
                Best Price
              </StyledLink>
            </ListItemText>
          </ListItemIcon>
        </StyledListItem>
        {/* <StyledListItem button onClick={() => setOpenDrawer(false)}>
          <ListItemIcon>
            <ListItemText>
              <StyledLink as={NavLink} exact to='/blog'>
                Blogs
              </StyledLink>
            </ListItemText>
          </ListItemIcon>
        </StyledListItem> */}
        <StyledListItem button onClick={() => setOpenDrawer(false)}>
          <ListItemIcon>
            <ListItemText>
              <StyledLink as={NavLink} exact to='/authors'>
                Authors
              </StyledLink>
            </ListItemText>
          </ListItemIcon>
        </StyledListItem>
      </List>
    </Drawer>
  );
};

DrawerComponent.propTypes = {
  openDrawer: PropTypes.bool.isRequired,
  setOpenDrawer: PropTypes.func.isRequired,
};

export default DrawerComponent;
