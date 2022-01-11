import React from 'react';
import PropTypes from 'prop-types';
import { ListItemIcon, ListItemText, List } from '@mui/material';
import { StyledLink, StyledListItem, StyledDrawer } from './Styles';

const DrawerComponent = ({ openDrawer, setOpenDrawer }) => {
  return (
    <StyledDrawer
      anchor='left'
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
      onClick={() => setOpenDrawer(false)}
    >
      <List>
        <StyledListItem>
          <ListItemIcon>
            <ListItemText>
              <StyledLink exact to='/' activeClassName='selected'>
                Home
              </StyledLink>
            </ListItemText>
          </ListItemIcon>
        </StyledListItem>
        <StyledListItem>
          <ListItemIcon>
            <ListItemText>
              <StyledLink
                exact
                to='/products?startPage=1&sort=1'
                activeClassName='selected'
              >
                Catalogue
              </StyledLink>
            </ListItemText>
          </ListItemIcon>
        </StyledListItem>
        <StyledListItem>
          <ListItemIcon>
            <ListItemText>
              <StyledLink exact to='/promotionals' activeClassName='selected'>
                Promotionals
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
        <StyledListItem>
          <ListItemIcon>
            <ListItemText>
              <StyledLink exact to='/authors' activeClassName='selected'>
                Authors
              </StyledLink>
            </ListItemText>
          </ListItemIcon>
        </StyledListItem>
        <StyledListItem>
          <ListItemIcon>
            <ListItemText>
              <StyledLink exact to='/favorites' activeClassName='selected'>
                Favorites
              </StyledLink>
            </ListItemText>
          </ListItemIcon>
        </StyledListItem>
      </List>
    </StyledDrawer>
  );
};

DrawerComponent.propTypes = {
  openDrawer: PropTypes.bool.isRequired,
  setOpenDrawer: PropTypes.func.isRequired,
};

export default DrawerComponent;
