import React, { useState } from 'react';
import { InputLabel, MenuItem, Select } from '@mui/material';
import { StyledFormControl } from './Styles';

const FilterSortInput = () => {
  const [value, setValue] = useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <StyledFormControl>
        <InputLabel id='sort-filter-input'>Sort:</InputLabel>
        <Select
          labelId='sort-filter-input'
          value={value}
          label='Sort'
          onChange={handleChange}
        >
          <MenuItem value='lower-price'>to higher price</MenuItem>
          <MenuItem value='higher-price'>to lower price</MenuItem>
        </Select>
      </StyledFormControl>
    </>
  );
};

export default FilterSortInput;
