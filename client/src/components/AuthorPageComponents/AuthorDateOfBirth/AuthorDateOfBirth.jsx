import React from 'react';
import PropTypes from 'prop-types';
import { StyledTitleWrapper, StyledTitle } from './Styles';

const AuthorDateOfBirth = ({ dateOfBirth }) => {
  return (
    <StyledTitleWrapper>
      <StyledTitle>{dateOfBirth}</StyledTitle>
    </StyledTitleWrapper>
  );
};

AuthorDateOfBirth.propTypes = {
  dateOfBirth: PropTypes.string.isRequired,
};

export default AuthorDateOfBirth;
