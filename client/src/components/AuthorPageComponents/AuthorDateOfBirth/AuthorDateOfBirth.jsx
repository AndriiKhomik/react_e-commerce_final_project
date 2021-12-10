import React from 'react';
import PropTypes from 'prop-types';
import { StyledTitle, StyledContent, StyledWrapper } from './Styles';

const AuthorDateOfBirth = ({ dateOfBirth }) => {
  return (
    <>
      <StyledWrapper>
        <StyledTitle>Date of birth:</StyledTitle>
        <StyledContent>{dateOfBirth}</StyledContent>
      </StyledWrapper>
    </>
  );
};

AuthorDateOfBirth.propTypes = {
  dateOfBirth: PropTypes.string.isRequired,
};

export default AuthorDateOfBirth;
