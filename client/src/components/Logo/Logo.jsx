import React from 'react';
import { Link } from 'react-router-dom';
import { StyledLogoText, StyledBox, StyledLink } from './Styles';

const Logo = () => {
  return (
    <StyledBox>
      <StyledLink as={Link} to='/'>
        Logo
        <StyledLogoText>bookstore</StyledLogoText>
      </StyledLink>
    </StyledBox>
  );
};

export default Logo;
