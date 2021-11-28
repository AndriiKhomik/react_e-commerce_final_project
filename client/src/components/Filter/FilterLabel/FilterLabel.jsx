import React from 'react';
import PropTypes from 'prop-types';
import { StyledLabelItem } from './Styles';

const FilterLabel = ({ name, count }) => {
  return (
    <>
      <StyledLabelItem>{name}</StyledLabelItem>
      <span>({count})</span>
    </>
  );
};

FilterLabel.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default FilterLabel;
