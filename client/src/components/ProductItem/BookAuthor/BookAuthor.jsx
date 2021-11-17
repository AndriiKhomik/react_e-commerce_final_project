import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyledAuthorText } from './Styles';

const BookAuthor = ({ author }) => {
  return (
    <>
      {/* !!!add correct link -> page of author */}
      <StyledAuthorText as={Link} to='/contacts'>
        {author}
      </StyledAuthorText>
    </>
  );
};

BookAuthor.propTypes = {
  author: PropTypes.string.isRequired,
};
export default BookAuthor;
