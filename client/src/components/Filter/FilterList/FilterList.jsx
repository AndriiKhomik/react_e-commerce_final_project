import React from 'react';
import PropTypes from 'prop-types';
import { StyledList } from './Styles';
import FilterItem from '../FilterItem';

const FilterList = ({ items, groupTitle }) => {
  const count = 33;
  return (
    <StyledList>
      {items.map(({ id, name }) => (
        <FilterItem
          key={id}
          name={name}
          count={count}
          groupTitle={groupTitle}
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
      count: PropTypes.number,
    }),
  ).isRequired,
  groupTitle: PropTypes.string.isRequired,
};

export default FilterList;
