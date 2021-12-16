import React, { useEffect } from 'react';
import { Reset } from 'styled-reset';
import { ThemeProvider } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useRoutes } from '../../routes';
import Header from '../Header';
import Footer from '../Footer/Footer';
import Subscribe from '../Subscribe/SubscribeMain/Subscribe';
import theme from '../../services/theme/theme';
import { StyledContainer } from './Styles';
import { setIsLoginFalse, setIsLoginTrue } from '../../store/login/actions';

const App = () => {
  const routes = useRoutes();
  const dispatch = useDispatch();

  useEffect(() => {
    const isLogin = !!localStorage.getItem('token');
    // eslint-disable-next-line no-unused-expressions
    isLogin ? dispatch(setIsLoginTrue()) : dispatch(setIsLoginFalse());
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <StyledContainer maxWidth='lg'>
        <Header />
        {routes}
        <Subscribe />
        <Footer />
      </StyledContainer>
    </ThemeProvider>
  );
};

export default App;
