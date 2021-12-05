import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Catalogue from './Pages/CataloguePage';
import Contacts from './Pages/Contacts';
import AdminPanel from './Pages/AdminPanel';
import ShoppingCart from './Pages/ShoppingCart';
import RegistrationPage from './Pages/RegistrationPage';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import ItemPage from './Pages/ItemPage/ItemPage';
import CheckoutPage from './Pages/CheckoutPage';
import Authors from './Pages/Authors';
import AuthorPage from './Pages/AuthorPage/AuthorPage';

export const useRoutes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/catalogue' component={Catalogue} />
      <Route exact path='/contacts' component={Contacts} />
      <Route exact path='/adminpanel' component={AdminPanel} />
      <Route exact path='/shoppingcart' component={ShoppingCart} />
      <Route exact path='/authors' component={Authors} />
      <Route exact path='/registration' component={RegistrationPage} />
      <Route path='/products/:itemNo' component={ItemPage} />
      <Route path='/authors/:_id' component={AuthorPage} />
      <Route exact path='/checkout' component={CheckoutPage} />
      <Route exact path='*' component={NotFoundPage} />
    </Switch>
  );
};
