import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledAddress,
  StyledItem,
  StyledListIcon,
  StyledLink,
} from './Styles';

const FooterContactsItem = ({ contact }) => {
  const { component, isAddress, text, link, label } = contact;

  return (
    <StyledItem>
      <StyledListIcon>{component}</StyledListIcon>
      {isAddress ? (
        <StyledAddress>{text}</StyledAddress>
      ) : (
        <StyledLink href={link} aria-label={label} title={label}>
          {text}
        </StyledLink>
      )}
    </StyledItem>
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
