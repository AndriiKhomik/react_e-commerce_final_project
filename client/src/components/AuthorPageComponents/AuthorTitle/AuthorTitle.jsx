import React from 'react';
import PropTypes from 'prop-types';
import { StyledTitleWrapper, StyledTitle } from './Styles';

const AuthorTitle = ({ name }) => {
  return (
    <StyledTitleWrapper>
      <StyledTitle>{name}</StyledTitle>
    </StyledTitleWrapper>
  );
};

AuthorTitle.propTypes = {
  name: PropTypes.string.isRequired,
};

export default AuthorTitle;
