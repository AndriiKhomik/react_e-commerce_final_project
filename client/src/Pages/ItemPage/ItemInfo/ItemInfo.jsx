import React from 'react';
import PropTypes from 'prop-types';
import { List } from '@mui/material';
import {
  StyledItemInfoWrapper,
  StyledListItem,
  StyledListItemTitles,
  StyledAuthor,
} from './Styles';

const ItemInfo = ({ author, publisher, yearOfPublish, pages, genre }) => {
  return (
    <StyledItemInfoWrapper>
      <List>
        <StyledListItemTitles>Author:</StyledListItemTitles>
        <StyledListItemTitles>Publisher:</StyledListItemTitles>
        <StyledListItemTitles>Year of Publishing:</StyledListItemTitles>
        <StyledListItemTitles>Number of Pages:</StyledListItemTitles>
        <StyledListItemTitles>Genre:</StyledListItemTitles>
      </List>
      <List>
        <StyledListItem>
          <StyledAuthor href='#!'>{author}</StyledAuthor>
        </StyledListItem>
        <StyledListItem>{publisher}</StyledListItem>
        <StyledListItem>{yearOfPublish}</StyledListItem>
        <StyledListItem>{pages}</StyledListItem>
        <StyledListItem>{genre}</StyledListItem>
      </List>
    </StyledItemInfoWrapper>
  );
};

ItemInfo.propTypes = {
  author: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  yearOfPublish: PropTypes.string.isRequired,
  pages: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
};

export default ItemInfo;
