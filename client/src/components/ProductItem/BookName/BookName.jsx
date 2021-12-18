import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { StyledBookNameText } from './Styles';

const BookName = ({ name, itemNo, showOpacity }) => {
  return (
    <>
      <StyledBookNameText
        as={Link}
        to={`/products/${itemNo}`}
        aria-label='move to book page'
        sx={{ opacity: `${showOpacity}` }}
      >
        {name}
      </StyledBookNameText>
    </>
  );
};

BookName.propTypes = {
  name: PropTypes.string.isRequired,
  itemNo: PropTypes.string.isRequired,
  showOpacity: PropTypes.string.isRequired,
};

export default BookName;
