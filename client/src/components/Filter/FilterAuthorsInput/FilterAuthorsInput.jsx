import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { InputLabel, MenuItem, Select } from '@mui/material';
import { getAuthors } from '../../../api/authors';
import { setSelectedAuthor } from '../../../store/filter/actions';
import { StyledFormControl } from './Styles';
import useQuery from '../../../services/hooks/useQuery';

const FilterAuthorsInput = () => {
  const query = useQuery();
  const [authors, setAuthors] = useState([]);
  const [currentAuthor, setCurrentAuthor] = useState(
    query.get('author') || 'all-authors',
  );
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setCurrentAuthor(event.target.value);
  };

  useEffect(() => {
    getAuthors().then((data) => {
      setAuthors(data);
    });
  }, []);

  useEffect(() => {
    if (currentAuthor !== 'all-authors') {
      return dispatch(setSelectedAuthor(currentAuthor));
    }
    return dispatch(setSelectedAuthor(''));
  }, [currentAuthor]);

  useEffect(() => {
    if (query.get('author') === currentAuthor) {
      setCurrentAuthor(currentAuthor);
    }
  }, [query]);
  return (
    <StyledFormControl>
      <InputLabel id='authors-filter-input'>Authors:</InputLabel>
      <Select
        labelId='authors-filter-input'
        value={currentAuthor}
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
