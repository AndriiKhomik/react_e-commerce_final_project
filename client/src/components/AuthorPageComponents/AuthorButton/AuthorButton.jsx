import React from 'react';
import { StyledButtonsWrapper, StyledButtonText, StyledButton } from './Styles';

const AuthorButton = () => {
  const onClick = () => {};

  return (
    <StyledButtonsWrapper>
      <StyledButton onClick={onClick}>
        <StyledButtonText>Show all books</StyledButtonText>
      </StyledButton>
    </StyledButtonsWrapper>
  );
};

export default AuthorButton;
