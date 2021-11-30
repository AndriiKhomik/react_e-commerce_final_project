import React from 'react';
import PropTypes from 'prop-types';
import { Link, List } from '@mui/material';
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
  author: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  yearOfPublish: PropTypes.string.isRequired,
  pages: PropTypes.number,
  duration: PropTypes.number,
  genre: PropTypes.string.isRequired,
};

ItemInfo.defaultProps = {
  pages: '',
  duration: '',
};

export default ItemInfo;
