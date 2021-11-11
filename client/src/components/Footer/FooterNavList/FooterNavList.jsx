import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from './routes';
import { StyledList, StyledLink, StyledItem } from './Styles';

const FooterNavList = () => {
  return (
    <StyledList>
      {routes.map((link) => (
        <StyledItem key={link.id}>
          <StyledLink as={NavLink} to={link.route}>
            {link.name}
          </StyledLink>
        </StyledItem>
      ))}
    </StyledList>
  );
};

export default FooterNavList;
