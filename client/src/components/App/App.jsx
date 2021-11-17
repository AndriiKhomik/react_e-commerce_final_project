import React from 'react';

import './App.scss';
import Header from '../Header';
import { useRoutes } from '../../routes';
<<<<<<< HEAD
import Footer from '../Footer/FooterMain';
import Subscribe from '../Subscribe/SubscribeMain/Subscribe';
=======
import Footer from '../Footer/Footer';
>>>>>>> dev

const App = () => {
  const routes = useRoutes();

  return (
    <>
      <Header />
      {routes}
      <Subscribe />
      <Footer />
    </>
  );
};

export default App;
