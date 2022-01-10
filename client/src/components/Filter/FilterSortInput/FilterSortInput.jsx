import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { InputLabel, MenuItem } from '@mui/material';
import { StyledFormControl, StyledSelect } from './Styles';
import useQuery from '../../../services/hooks/useQuery';

const FilterSortInput = () => {
  const history = useHistory();
  const { search } = useLocation();
  const filterQuery = useQuery();
  const [value, setValue] = useState(1);

  const handleChange = (event) => {
    if (+value !== event.target.value) {
      setValue(event.target.value);
      const query = search.replace(/sort=[1,-1]+/, `sort=${-value}`);
      history.push(query);
    }
  };

  useEffect(() => {
    if (filterQuery.get('sort') !== value) {
      setValue(filterQuery.get('sort'));
    }
  }, [filterQuery]);
  return (
    <>
      <StyledFormControl>
        <InputLabel id='sort-filter-input'>Sort:</InputLabel>
        <StyledSelect
          labelId='sort-filter-input'
          value={value}
          label='Sort'
          onChange={handleChange}
        >
          <MenuItem value={1}>to higher price</MenuItem>
          <MenuItem value={-1}>to lower price</MenuItem>
        </StyledSelect>
      </StyledFormControl>
    </>
  );
};

export default FilterSortInput;
