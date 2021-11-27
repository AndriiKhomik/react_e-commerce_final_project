import React from 'react';
import PropTypes from 'prop-types';
import FilterLabel from '../FilterLabel';
import { StyledCheckbox, StyledFormControll, StyledListItem } from './Styles';

const FilterItem = ({ name }) => {
  return (
    <StyledListItem>
      <StyledFormControll
        label={<FilterLabel name={name} count={33} />}
        control={<StyledCheckbox />}
      />
    </StyledListItem>
  );
};

FilterItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FilterItem;
