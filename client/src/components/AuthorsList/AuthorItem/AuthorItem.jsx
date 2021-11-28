import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import {
  StyledCardMediaWrapper,
  StyledCardMediaBox,
  StyledCardMedia,
  StyledAuthorName,
  StyledBooksLink,
  StyledItem,
  StyledImageLink,
} from './Styles';

const AuthorItem = ({ name, authorUrl, id }) => {
  return (
    <StyledItem>
      <StyledImageLink
        as={Link}
        to={`/authors/${id}`}
        aria-label='move to author page'
      >
        <StyledCardMediaWrapper>
          <StyledCardMediaBox>
            <StyledCardMedia height='325' src={authorUrl} alt={name} />
          </StyledCardMediaBox>
        </StyledCardMediaWrapper>
      </StyledImageLink>
      <StyledAuthorName
        as={Link}
        to={`/authors/${id}`}
        aria-label='move to author page'
      >
        {name}
      </StyledAuthorName>
      <StyledBooksLink as={Link} to='/catalogue'>
        Look books
      </StyledBooksLink>
    </StyledItem>
  );
};

AuthorItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  authorUrl: PropTypes.string,
};

// add default author img
AuthorItem.defaultProps = {
  authorUrl: '',
};

export default AuthorItem;
