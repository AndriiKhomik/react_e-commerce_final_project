import React from 'react';
import Logo from '../Logo';
import ContactsList from '../FooterContacstList';
import SocialsList from '../SocialsList';
import NavList from '../FooterNavList';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className='footer__upper-wrapper'>
        <Logo />
        <ContactsList />
      </div>
      <div className='footer__down-wrapper'>
        <NavList />
        <SocialsList />
      </div>
      <p className='footer__copyright-text'>
        &copy; 2021 BookShop. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
