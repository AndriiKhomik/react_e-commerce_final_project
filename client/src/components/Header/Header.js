import React from "react";

import './Header.scss';
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div className='header'>
      <Link to='/' >Home</Link>
      <Link to='/catalogue' >Catalogue</Link>
      <Link to='/contacts' >Contacts</Link>
      <Link to='/shoppingcart' >Shopping Cart</Link>
      <Link to='/adminpanel' >Admin Panel</Link>
      <Link to='/registration' >Registration Page</Link>
    </div>
  )
};

export default Header;