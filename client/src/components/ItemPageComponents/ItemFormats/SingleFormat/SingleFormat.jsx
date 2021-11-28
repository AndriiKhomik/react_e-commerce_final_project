import React from 'react';
import PropTypes from 'prop-types';
import { StyledFormatWrapper, StyledTitle } from './Styles';

const SingleFormat = ({ item }) => {
  const { component, title } = item;

  return (
    <StyledFormatWrapper>
      {component}
      <StyledTitle>{title}</StyledTitle>
    </StyledFormatWrapper>
  );
};

SingleFormat.propTypes = {
  item: PropTypes.shape({
    component: PropTypes.node.isRequired,
    title: PropTypes.string,
  }).isRequired,
};

export default SingleFormat;
