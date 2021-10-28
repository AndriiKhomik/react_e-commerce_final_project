import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Catalogue from './Pages/Catalogue';
import Contacts from './Pages/Contacts';
import AdminPanel from './Pages/AdminPanel';
import ShoppingCart from './Pages/ShoppingCart';
import RegistrationPage from './Pages/RegistrationPage';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';

export const useRoutes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/catalogue' component={Catalogue} />
      <Route exact path='/contacts' component={Contacts} />
      <Route exact path='/adminpanel' component={AdminPanel} />
      <Route exact path='/shoppingcart' component={ShoppingCart} />
      <Route exact path='/registration' component={RegistrationPage} />
      <Route exact path='*' component={NotFoundPage} />
    </Switch>
  );
};
