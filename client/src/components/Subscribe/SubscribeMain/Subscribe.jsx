import React from 'react';
import { Container, ThemeProvider } from '@mui/material';
import theme from '../../../services/theme/theme';
import SubscribeForm from '../Form/SubscribeForm';
import InfoItemsList from '../InfoList/InfoItemsList';
import { StyledBox } from './Styles';

const Subscribe = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StyledBox>
          <InfoItemsList />
          <SubscribeForm />
        </StyledBox>
      </Container>
    </ThemeProvider>
  );
};

export default Subscribe;
