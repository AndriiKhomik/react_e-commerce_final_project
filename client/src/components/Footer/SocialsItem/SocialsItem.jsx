import React from 'react';
import PropTypes from 'prop-types';
import { StyledListItem, StyledSocialLink } from './Styles';

const SocialsItem = ({ social }) => {
  const { name, link, component } = social;
  return (
    <StyledListItem>
      <StyledSocialLink
        rel='nofollow'
        target='blank'
        title={`move to ${name} page`}
        href={link}
        aria-label={`move to ${name} page`}
      >
        {component}
      </StyledSocialLink>
    </StyledListItem>
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
