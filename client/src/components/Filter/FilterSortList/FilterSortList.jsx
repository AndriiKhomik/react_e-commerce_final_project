import React from 'react';
import { sortItems } from './sortItems';
import { StyledTagsList, StyledTagsItem, StyledLink } from './Styles';

const FilterSortList = () => {
  const clickHandler = (name) => {
    const joinedName = name.replace(' ', '-').toLowerCase();
    console.log(joinedName);
  };

  return (
    <StyledTagsList>
      {sortItems.map(({ id, name }) => (
        <StyledTagsItem key={id}>
          <StyledLink
            onClick={() => {
              clickHandler(name);
            }}
          >
            {name}
          </StyledLink>
        </StyledTagsItem>
      ))}
    </StyledTagsList>
  );
};

export default FilterSortList;
