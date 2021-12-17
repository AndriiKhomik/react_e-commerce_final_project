import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyledAuthorText } from './Styles';

const BookAuthor = ({ author, authorId }) => {
  return (
    <>
      <StyledAuthorText as={Link} to={`/authors/${authorId}`}>
        {author}
      </StyledAuthorText>
    </>
  );
};

BookAuthor.propTypes = {
  author: PropTypes.string,
  authorId: PropTypes.string,
};

BookAuthor.defaultProps = {
  author: '',
  authorId: '',
};
export default BookAuthor;
