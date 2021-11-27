import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledList } from './Styles';
import FilterItem from '../FilterItem';

const FilterList = ({ items }) => {
  const [checkedItem, setCheckedItem] = useState(null);

  const handleChange = (value) => {
    setCheckedItem(value);
  };

  return (
    <StyledList>
      {items.map(({ id, name }) => (
        <FilterItem
          key={id}
          name={name}
          onChange={handleChange}
          checkedItem={checkedItem}
        />
      ))}
    </StyledList>
  );
};

FilterList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default FilterList;
