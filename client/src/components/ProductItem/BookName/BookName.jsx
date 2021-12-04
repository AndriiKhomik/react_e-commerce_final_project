import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { StyledBookNameText } from './Styles';

const BookName = ({ name, itemNo }) => {
  return (
    <>
      <StyledBookNameText
        as={Link}
        to={`/products/${itemNo}`}
        aria-label='move to book page'
      >
        {name}
      </StyledBookNameText>
    </>
  );
};

BookName.propTypes = {
  name: PropTypes.string.isRequired,
  itemNo: PropTypes.string.isRequired,
};

export default BookName;
