import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { List } from '@mui/material';
import {
  StyledItemInfoWrapper,
  StyledListItem,
  StyledListItemTitles,
  StyledAuthor,
  StyledList,
} from './Styles';
import ItemInfoBookSize from './ItemInfoBookSize/ItemInfoBookSize';

const ItemInfo = ({
  author,
  publisher,
  yearOfPublish,
  pages,
  duration,
  genre,
}) => {
  const { _id, name } = author;
  const bookSize = pages ? 'Number of Pages:' : 'Duration:';

  return (
    <StyledItemInfoWrapper>
      <List>
        <StyledListItemTitles>Author:</StyledListItemTitles>
        <StyledListItemTitles>Publisher:</StyledListItemTitles>
        <StyledListItemTitles>Year of Publishing:</StyledListItemTitles>
        <StyledListItemTitles>{bookSize}</StyledListItemTitles>
        <StyledListItemTitles>Genre:</StyledListItemTitles>
      </List>
      <StyledList>
        <StyledListItem>
          <StyledAuthor
            as={Link}
            to={`/authors/${_id}`}
            aria-label='move to author page'
          >
            {name}
          </StyledAuthor>
        </StyledListItem>
        <StyledListItem>{publisher}</StyledListItem>
        <StyledListItem>{yearOfPublish}</StyledListItem>
        <ItemInfoBookSize pages={pages} duration={duration} />
        <StyledListItem>{genre}</StyledListItem>
      </StyledList>
    </StyledItemInfoWrapper>
  );
};

ItemInfo.propTypes = {
  author: PropTypes.shape({
    books: PropTypes.arrayOf(PropTypes.string).isRequired,
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    dateOfBirth: PropTypes.string.isRequired,
    biography: PropTypes.string.isRequired,
    authorUrl: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
  publisher: PropTypes.string.isRequired,
  yearOfPublish: PropTypes.number.isRequired,
  pages: PropTypes.number,
  duration: PropTypes.number,
  genre: PropTypes.string.isRequired,
};

ItemInfo.defaultProps = {
  pages: null,
  duration: null,
};

export default ItemInfo;
