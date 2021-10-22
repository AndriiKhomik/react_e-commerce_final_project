import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';
import Header from '../Header';
import AdminPanel from '../Pages/AdminPanel';
import Homepage from '../Pages/Homepage';
import Catalogue from '../Pages/Catalogue';
import ShoppingCart from '../Pages/ShoppingCart';
import Contacts from '../Pages/Contacts';
import RegistrationPage from '../Pages/RegistrationPage';
import NotFoundPage from '../Pages/NotFoundPage';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/catalogue' component={Catalogue} />
        <Route exact path='/contacts' component={Contacts} />
        <Route exact path='/adminpanel' component={AdminPanel} />
        <Route exact path='/shoppingcart' component={ShoppingCart} />
        <Route exact path='/registration' component={RegistrationPage} />
        <Route exact path='*' component={NotFoundPage} />
      </Switch>
    </>
  );
};

export default App;
