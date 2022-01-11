import React from 'react';
import PropTypes from 'prop-types';
import { StyledLabelItem } from './Styles';

const FilterLabel = ({ name }) => {
  // add count to FilterLabel props for adding count of filter parametres
  return (
    <>
      <StyledLabelItem>{name}</StyledLabelItem>
    </>
  );
};

FilterLabel.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FilterLabel;
