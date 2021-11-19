import React from 'react';
import { Reset } from 'styled-reset';
import Header from '../Header/Header';
import { useRoutes } from '../../routes';
import Footer from '../Footer/Footer/Footer';

const App = () => {
  const routes = useRoutes();

  return (
    <>
      <Reset />
      <Header />
      {routes}
      <Footer />
    </>
  );
};

export default App;
