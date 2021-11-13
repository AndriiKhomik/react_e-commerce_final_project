import React from 'react';

import './App.scss';
import Header from '../Header';
import { useRoutes } from '../../routes';
import Footer from '../Footer/FooterMain';

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
