import React from 'react';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { setSearchString } from '../../../store/filter/actions';
import { StyledSearchTextField } from './Styles';

const SearchInput = () => {
  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    dispatch(setSearchString(e.target.value));
  };

  return (
    <StyledSearchTextField
      variant='outlined'
      margin='normal'
      fullWidth
      onChange={onChangeHandler}
      InputProps={{
        startAdornment: (
          <InputAdornment
            position='start'
            title='Search'
            aria-label='Enter your search'
          >
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      placeholder='Enter to search'
    />
  );
};
export default SearchInput;
