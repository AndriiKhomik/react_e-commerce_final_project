import React from 'react';
import Header from '../Header/Header';
import { useRoutes } from '../../routes';
import Footer from '../Footer/Footer/Footer';

const App = () => {
  const routes = useRoutes();

  return (
    <>
      <Header />
      {routes}
      <Footer />
    </>
  );
};

export default App;
