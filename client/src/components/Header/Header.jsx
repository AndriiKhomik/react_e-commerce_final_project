import React from "react";

import './Header.scss';
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <div className='header'>
      <NavLink to='/' >Home</NavLink>
      <NavLink to='/catalogue' >Catalogue</NavLink>
      <NavLink to='/contacts' >Contacts</NavLink>
      <NavLink to='/shoppingcart' >Shopping Cart</NavLink>
      <NavLink to='/adminpanel' >Admin Panel</NavLink>
      <NavLink to='/registration' >Registration Page</NavLink>
    </div>
  )
};

export default Header;