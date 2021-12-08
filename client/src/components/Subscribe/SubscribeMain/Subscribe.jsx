import React from 'react';
import { ThemeProvider } from '@mui/material';
import theme from '../../../services/theme/theme';
import SubscribeForm from '../Form/SubscribeForm';
import InfoItemsList from '../InfoList/InfoItemsList';
import { StyledBox } from './Styles';

const Subscribe = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledBox>
        <InfoItemsList />
        <SubscribeForm />
      </StyledBox>
    </ThemeProvider>
  );
};

export default Subscribe;
