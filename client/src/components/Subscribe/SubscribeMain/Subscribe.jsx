import React from 'react';
import { Container, ThemeProvider } from '@mui/material';
import theme from '../../../services/theme/theme';
import SubscribeForm from '../Form/SubscribeForm';
import InfoItemsList from '../InfoList/InfoItemsList';

const Subscribe = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <InfoItemsList />
        <SubscribeForm />;
      </Container>
    </ThemeProvider>
  );
};

export default Subscribe;
