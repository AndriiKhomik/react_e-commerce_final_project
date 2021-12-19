import React from 'react';
import { Link } from 'react-router-dom';
import { StyledLogoText, StyledBox, StyledLink } from './Styles';

const Logo = () => {
  return (
    <StyledBox>
      <StyledLink as={Link} to='/'>
        <img src='/images/logo.png' alt='logo' width='30px' height='30px' />
        <StyledLogoText>bookstore</StyledLogoText>
      </StyledLink>
    </StyledBox>
  );
};

export default Logo;
