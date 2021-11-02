import React from 'react';
import PropTypes from 'prop-types';
import './SocialsItem.scss';

const SocialsItem = ({ social }) => {
  const { name, link, component } = social;
  return (
    <li className='footer__socials-item'>
      <a
        className='footer__socials-link'
        rel='nofollow'
        title={`move to ${name} page`}
        target='blank'
        href={link}
        aria-label={`move to ${name} page`}
      >
        {component}
      </a>
    </li>
  );
};

SocialsItem.propTypes = {
  social: PropTypes.shape({
    name: PropTypes.string.isRequired,
    component: PropTypes.node.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default SocialsItem;
