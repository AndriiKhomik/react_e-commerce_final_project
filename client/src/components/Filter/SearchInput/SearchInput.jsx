import React from 'react';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { StyledSearchTextField } from './Styles';

const SearchInput = () => {
  return (
    <StyledSearchTextField
      variant='outlined'
      margin='normal'
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      placeholder='Enter to search'
    />
  );
};
export default SearchInput;
