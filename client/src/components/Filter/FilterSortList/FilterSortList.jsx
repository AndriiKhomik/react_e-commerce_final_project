import React from 'react';
import { Link } from 'react-router-dom';
import { sortItems } from './sortItems';
import { StyledTagsList, StyledTagsItem, StyledLink } from './Styles';

const FilterSortList = () => {
  return (
    <StyledTagsList>
      {sortItems.map(({ id, name, route }) => (
        <StyledTagsItem key={id}>
          <StyledLink as={Link} to={route}>
            {name}
          </StyledLink>
        </StyledTagsItem>
      ))}
    </StyledTagsList>
  );
};

export default FilterSortList;
