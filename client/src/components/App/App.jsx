import React, { useEffect } from 'react';
import { Reset } from 'styled-reset';
import { ThemeProvider } from '@mui/material';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { withErrorBoundary } from 'react-error-boundary';
import { useRoutes } from '../../routes';
import Header from '../Header';
import Footer from '../Footer/Footer';
import Subscribe from '../Subscribe/SubscribeMain/Subscribe';
import theme from '../../services/theme/theme';
import { StyledContainer, StyledError } from './Styles';
import { setIsLoginFalse, setIsLoginTrue } from '../../store/login/actions';
import ScrollToTop from '../ScrollToTop';

const App = () => {
  const routes = useRoutes();
  const dispatch = useDispatch();

  useEffect(() => {
    const isLogin = !!localStorage.getItem('token');
    // eslint-disable-next-line no-unused-expressions
    isLogin ? dispatch(setIsLoginTrue()) : dispatch(setIsLoginFalse());
  }, []);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Reset />
        <StyledContainer maxWidth='lg'>
          <ScrollToTop>
            <Header />
            {routes}
            <Subscribe />
            <Footer />
          </ScrollToTop>
        </StyledContainer>
      </ThemeProvider>
    </Router>
  );
};

export default withErrorBoundary(App, {
  fallback: (
    <StyledError as='h3'>
      Oops!Something went wrong,{' '}
      <span>please go back to the previous page and try again</span>
    </StyledError>
  ),
});
