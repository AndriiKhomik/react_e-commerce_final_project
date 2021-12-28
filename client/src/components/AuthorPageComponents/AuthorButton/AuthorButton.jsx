import React from 'react';
import PropTypes from 'prop-types';
import { StyledButtonsWrapper, StyledButtonText, StyledButton } from './Styles';

const AuthorButton = ({ id }) => {
  return (
    <StyledButtonsWrapper>
      <StyledButton to={`/products?author=${id}&startPage=1`}>
        <StyledButtonText>Show all books</StyledButtonText>
      </StyledButton>
    </StyledButtonsWrapper>
  );
};

AuthorButton.propTypes = {
  id: PropTypes.string.isRequired,
};
export default AuthorButton;
