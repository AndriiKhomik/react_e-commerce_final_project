import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { StyledBookNameText } from './Styles';

const BookName = ({ name }) => {
  return (
    <>
      {/* !!!add correct link -> page of one book */}
      <StyledBookNameText
        as={Link}
        to='/contacts'
        aria-label='move to book page'
      >
        {name}
      </StyledBookNameText>
    </>
  );
};

BookName.propTypes = {
  name: PropTypes.string.isRequired,
};

export default BookName;
