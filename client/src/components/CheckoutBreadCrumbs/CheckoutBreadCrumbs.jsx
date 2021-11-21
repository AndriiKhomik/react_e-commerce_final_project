import React from 'react';
import { Link } from 'react-router-dom';
import { StyledLink, StyledList, StyledItem } from './Styles';
import { titles } from './titles';

const CheckoutBreadCrumbs = () => {
  return (
    <StyledList>
      {titles.map(({ id, title, route }) => (
        <StyledItem key={id}>
          <StyledLink as={Link} to={route}>
            {title}
          </StyledLink>
        </StyledItem>
      ))}
    </StyledList>
  );
};

export default CheckoutBreadCrumbs;
