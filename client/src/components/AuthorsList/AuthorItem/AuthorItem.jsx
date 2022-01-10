import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthorImg from '../AuthorImg';
import defaultimg from '../../../img/noImgAuthor.png';
import {
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
        <AuthorImg authorUrl={authorUrl} name={name} />
      </StyledImageLink>
      <StyledAuthorName
        as={Link}
        to={`/authors/${id}`}
        aria-label='move to author page'
      >
        {name}
      </StyledAuthorName>
      <StyledBooksLink
        as={Link}
        to={`/products?author=${id}&startPage=1&sort=1`}
      >
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

AuthorItem.defaultProps = {
  authorUrl: defaultimg,
};

export default AuthorItem;
