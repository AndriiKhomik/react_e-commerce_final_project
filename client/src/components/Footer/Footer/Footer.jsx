import React from 'react';
import { Container, Grid } from '@mui/material';
import Logo from '../../Logo';
import ContactsList from '../FooterContacstList';
import SocialsList from '../SocialsList/SocialsList';
import NavList from '../FooterNavList';
import {
  StyledUpperGrid,
  StyledDownGrid,
  StyledParagraph,
  StyledUpperBox,
  StyledDownBox,
} from './Styles';

const Footer = () => {
  return (
    <footer>
      <StyledUpperBox>
        <Container maxWidth='lg'>
          <StyledUpperGrid container>
            <Grid item xs={12} md={2} lg={2}>
              <Logo />
            </Grid>
            <Grid item xs={12} md={10} lg={10}>
              <ContactsList />
            </Grid>
          </StyledUpperGrid>
        </Container>
      </StyledUpperBox>
      <StyledDownBox>
        <Container maxWidth='lg'>
          <StyledDownGrid container>
            <Grid item xs={12} sm={8} md={9} lg={10}>
              <NavList />
            </Grid>
            <Grid item xs={12} sm={4} md={3} lg={2}>
              <SocialsList />
            </Grid>
          </StyledDownGrid>
        </Container>
      </StyledDownBox>
      <StyledParagraph>
        &copy; 2021 BookShop. All Rights Reserved.
      </StyledParagraph>
    </footer>
  );
};

export default Footer;
