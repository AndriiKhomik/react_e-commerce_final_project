import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { InputLabel, MenuItem, Select } from '@mui/material';
import { getAuthors } from '../../../api/authors';
import { setSelectedAuthor } from '../../../store/filter/actions';
import { StyledFormControl } from './Styles';
import ErrorIndicator from '../../ErrorIndicator/ErrorIndicator';

const FilterAuthorsInput = ({ authorValue, setAuthorValue }) => {
  const [authors, setAuthors] = useState([]);
  const [hasError, setHasError] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setAuthorValue(event.target.value);
  };

  useEffect(() => {
    getAuthors()
      .then((data) => {
        setAuthors(data);
      })
      .catch(() => {
        setHasError(true);
      });
  }, []);

  useEffect(() => {
    if (authorValue !== 'all-authors') {
      return dispatch(setSelectedAuthor(authorValue));
    }
    return dispatch(setSelectedAuthor(''));
  }, [authorValue]);

  return (
    <>
      {hasError && <ErrorIndicator />}
      <StyledFormControl>
        <InputLabel id='authors-filter-input'>Authors:</InputLabel>
        <Select
          labelId='authors-filter-input'
          value={authorValue}
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
    </>
  );
};

FilterAuthorsInput.propTypes = {
  setAuthorValue: PropTypes.func.isRequired,
  authorValue: PropTypes.string.isRequired,
};

export default FilterAuthorsInput;
