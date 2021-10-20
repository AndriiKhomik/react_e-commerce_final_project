import React from "react";
import {Route, Switch} from "react-router-dom";
import Homepage from "./components/Pages/Homepage";
import Catalogue from "./components/Pages/Catalogue";
import Contacts from "./components/Pages/Contacts";
import AdminPanel from "./components/Pages/AdminPanel";
import ShoppingCart from "./components/Pages/ShoppingCart";
import RegistrationPage from "./components/Pages/RegistrationPage";
import NotFoundPage from "./components/Pages/NotFoundPage";

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
  )
};