import React from 'react';
import {
  StyledNotFoundSubtitle,
  StyledNotFoundTitle,
  StyledNotFoundWrapper,
  StyledLink,
} from './Styles';

const NotFound = () => {
  return (
    <StyledNotFoundWrapper>
      <StyledNotFoundTitle>404</StyledNotFoundTitle>
      <StyledNotFoundSubtitle>Page not found</StyledNotFoundSubtitle>
      <StyledLink to='/'>Home</StyledLink>
    </StyledNotFoundWrapper>
  );
};

export default NotFound;
