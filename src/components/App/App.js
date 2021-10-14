import React from "react";
import {Route, Switch} from "react-router-dom";

import './App.scss';
import Header from "../Header";
import AdminPanel from "../Pages/AdminPanel";
import Homepage from "../Pages/Homepage";
import ItemPage from "../Pages/ItemPage";
import Catalogue from "../Pages/Catalogue";
import ShoppingCart from "../Pages/ShoppingCart";
import Contacts from "../Pages/Contacts";

const  App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/catalogue' component={Catalogue} />
        <Route exact path='/contacts' component={Contacts} />
        <Route exact path='/adminpanel' component={AdminPanel} />
        <Route exact path='/shoppingcart' component={ShoppingCart} />
      </Switch>

      <ItemPage />
    </>
  )
};

export default App;
