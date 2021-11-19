import React from 'react';
// import { Reset } from 'styled-reset';
import { ThemeProvider } from '@mui/material';
import { useRoutes } from '../../routes';
import './App.scss';
import Header from '../Header';
import Footer from '../Footer/Footer';
import theme from '../../services/theme/theme';
import { StyledContainer } from './Styles';

const App = () => {
  const routes = useRoutes();

  return (
    <>
      {/* <Reset /> */}
      <ThemeProvider theme={theme}>
        <StyledContainer>
          <Header />
          {routes}
          <Footer />
        </StyledContainer>
      </ThemeProvider>
    </>
  );
};

export default App;
