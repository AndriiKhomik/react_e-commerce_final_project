<<<<<<< HEAD
import React from "react";

import Header from "../Header";
import { useRoutes } from "../../routes";
import Footer from "../Footer";
=======
import React from 'react';

import './App.scss';
import Header from '../Header';
import { useRoutes } from '../../routes';
import Footer from '../Footer/Footer';
>>>>>>> dev

const App = () => {
  const routes = useRoutes();

  return (
    <>
      <Header />
      {routes}
      <Footer />
    </>
<<<<<<< HEAD
  )
=======
  );
>>>>>>> dev
};

export default App;
