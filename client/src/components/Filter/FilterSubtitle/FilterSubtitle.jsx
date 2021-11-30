import React from 'react';
import PropTypes from 'prop-types';
import { StyledSubtitle } from './Styles';

const FilterSubtitle = ({ text }) => {
  return <StyledSubtitle>{text}</StyledSubtitle>;
};

FilterSubtitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default FilterSubtitle;
