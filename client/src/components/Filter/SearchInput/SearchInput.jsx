import React, { useState } from 'react';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { setSearchString } from '../../../store/filter/actions';
import { StyledSearchTextField } from './Styles';
import useQuery from '../../../services/hooks/useQuery';

const SearchInput = () => {
  const query = useQuery();
  const [searchText, setSearchText] = useState(query.get('searchString') || '');
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    setSearchText(e.target.value);
    dispatch(setSearchString(e.target.value));
  };

  return (
    <StyledSearchTextField
      variant='outlined'
      margin='normal'
      fullWidth
      onChange={onChangeHandler}
      value={searchText}
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
