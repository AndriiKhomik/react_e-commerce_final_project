import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, FormControlLabel, ListItemText } from '@mui/material';
import { StyledList, StyledCheckbox } from './Styles';

const FilterList = ({ items }) => {
  return (
    <StyledList>
      {items.map(({ id, name }) => (
        <ListItem key={id}>
          <FormControlLabel
            label={name}
            labelPlacement='end'
            control={<StyledCheckbox/>}
          />
          <ListItemText primary='(33)' />
        </ListItem>
      ))}
    </StyledList>
  );
};

FilterList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default FilterList;
