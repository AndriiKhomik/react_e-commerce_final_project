import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { sortItems } from './sortItems';
import { StyledTagsList, StyledTagsItem, StyledLink } from './Styles';
import theme from '../../../services/theme/theme';
import useQuery from '../../../services/hooks/useQuery';

const FilterSortList = () => {
  const history = useHistory();
  const { search } = useLocation();
  const filterQuery = useQuery();
  const currentTag = filterQuery.get('sale') ? 'Sale' : 'All books';
  const [activeTag, setActiveTag] = useState(currentTag);

  const clickHandler = (name) => {
    setActiveTag(name);
    const query =
      name === 'Sale'
        ? search.replace(/startPage=[0-9]+/, 'startPage=1&sale=true')
        : search.replace('&sale=true', '');

    history.push(query);
  };

  useEffect(() => {
    if (filterQuery.get('sale') !== activeTag) {
      setActiveTag(currentTag);
    }
  }, [filterQuery]);

  const tags = sortItems.map(({ id, name }) => {
    const tagColor =
      activeTag === name
        ? [theme.palette.primary.main]
        : [theme.palette.text.main];
    return (
      <StyledTagsItem key={id}>
        <StyledLink
          sx={{ color: `${tagColor}` }}
          onClick={() => {
            clickHandler(name);
          }}
        >
          {name}
        </StyledLink>
      </StyledTagsItem>
    );
  });

  return <StyledTagsList>{tags}</StyledTagsList>;
};

export default FilterSortList;
