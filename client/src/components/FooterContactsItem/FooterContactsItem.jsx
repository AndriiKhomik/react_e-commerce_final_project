import React from 'react';
import PropTypes from 'prop-types';
import './FooterContactsItem.scss';

const FooterContactsItem = ({ contact }) => {
  const { component, isAddress, text, link, label } = contact;

  return (
    <li className='footer__contacts-item'>
      <span className='footer__contacts-icon'>{component}</span>
      {isAddress ? (
        <address className='footer__contacts-address'>{text} </address>
      ) : (
        <a
          className='footer__contacts-link'
          href={link}
          aria-label={label}
          title={label}
        >
          {text}
        </a>
      )}
    </li>
  );
};

FooterContactsItem.propTypes = {
  contact: PropTypes.shape({
    component: PropTypes.node.isRequired,
    isAddress: PropTypes.bool,
    text: PropTypes.string.isRequired,
    link: PropTypes.string,
    label: PropTypes.string,
  }).isRequired,
};

export default FooterContactsItem;
