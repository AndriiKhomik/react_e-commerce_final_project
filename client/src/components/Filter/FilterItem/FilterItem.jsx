import React from 'react';
import PropTypes from 'prop-types';
import FilterLabel from '../FilterLabel';
import { StyledCheckbox, StyledFormControll, StyledListItem } from './Styles';

const FilterItem = ({ name, count }) => {
  return (
    <StyledListItem>
      <StyledFormControll
        label={<FilterLabel name={name} count={count} />}
        control={<StyledCheckbox />}
      />
    </StyledListItem>
  );
};

FilterItem.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default FilterItem;
