import React from 'react';
import { useDispatch } from 'react-redux';
import { sortItems } from './sortItems';
import { StyledTagsList, StyledTagsItem, StyledLink } from './Styles';
import { setSelectedTag } from '../../../store/filter/actions';

const FilterSortList = () => {
  const dispatch = useDispatch();

  const clickHandler = (name) => {
    const joinedName = name.replace(' ', '-').toLowerCase();
    dispatch(setSelectedTag(joinedName));
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
