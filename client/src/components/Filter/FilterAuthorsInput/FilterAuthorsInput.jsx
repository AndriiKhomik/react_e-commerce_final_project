import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InputLabel, MenuItem, Select } from '@mui/material';
import { getAuthors } from '../../../api/authors';
import { setSelectedAuthor } from '../../../store/filter/actions';
import { StyledFormControl } from './Styles';

const FilterAuthorsInput = () => {
  const [authors, setAuthors] = useState([]);
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const author = useSelector((data) => data.filter.authorId);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    getAuthors().then((data) => {
      setAuthors(data);
    });
  }, []);

  useEffect(() => {
    if (author) {
      setValue(author);
    }
  }, []);


  useEffect(() => {
    if (value !== 'all-authors') {
      return dispatch(setSelectedAuthor(value));
    }
    return dispatch(setSelectedAuthor(''));
  }, [value]);

  return (
    <StyledFormControl>
      <InputLabel id='authors-filter-input'>Authors:</InputLabel>
      <Select
        labelId='authors-filter-input'
        value={value}
        label='Authors'
        onChange={handleChange}
      >
        <MenuItem key='1' value='all-authors'>
          All authors
        </MenuItem>
        {authors.map(({ name, _id }) => (
          <MenuItem key={_id} value={_id}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </StyledFormControl>
  );
};

export default FilterAuthorsInput;
