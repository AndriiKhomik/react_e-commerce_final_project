import React from "react";
import {NavLink} from "react-router-dom";

import './Header.scss';
// import SearchIcon from '@mui/icons-material/Search';
import logo from './logo.png';

const Header = () => {
  return (
    <div className='header'>
      <div className="container">
        <div className="nav-container">
          <div className="logo">
            <img className='logo'
                 src={logo}
                 alt="logo"/>
          </div>
          <nav className="nav">
            <NavLink exact
                     to='/'>Home</NavLink>
            <NavLink exact
                     to='/catalogue'>Catalogue</NavLink>
            <NavLink exact
                     to='/contacts'>Contacts</NavLink>
            <NavLink exact
                     to='/shoppingcart'>Shopping Cart</NavLink>
            <NavLink exact
                     to='/adminpanel'>Admin Panel</NavLink>
            <NavLink exact
                     to='/registration'>Registration Page</NavLink>
          </nav>
          <div className="aside-nav">

          </div>
        </div>
      </div>
    </div>
  )
};

export default Header;