<<<<<<< HEAD
import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
      <Navbar />
=======
import React from 'react';

import './Header.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/catalogue'>Catalogue</NavLink>
      <NavLink to='/contacts'>Contacts</NavLink>
      <NavLink to='/shoppingcart'>Shopping Cart</NavLink>
      <NavLink to='/adminpanel'>Admin Panel</NavLink>
      <NavLink to='/registration'>Registration Page</NavLink>
    </div>
>>>>>>> dev
  );
};

export default Header;
<<<<<<< HEAD

//                  
//             
//             <NavLink exact
//                      to='/shoppingcart'>Shopping Cart</NavLink>

//             <NavLink exact
//                      to='/registration'>Registration Page</NavLink>
=======
>>>>>>> dev
