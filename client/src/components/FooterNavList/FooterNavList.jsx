import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from './routes';
import './FooterNavList.scss';

const FooterNavList = () => {
  return (
    <ul className='footer__nav-list'>
      {routes.map((link) => (
        <li key={link.id} className='footer__nav-item'>
          <NavLink to={link.route} className='footer__nav-link'>
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default FooterNavList;
