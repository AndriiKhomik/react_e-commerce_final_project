import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText, FormControlLabel } from '@mui/material';
import { StyledCheckbox } from './Styles';
// import theme from '../../../services/theme/theme';

const FilterItem = ({ name }) => {
//   const isChecked = checkedItem === name;
//   const handleChange = (value) => {
//     onChange(value);
//   };
  return (
    <ListItem>
      <FormControlLabel
        // sx={
        //   isChecked
        //     ? { color: theme.palette.primary.dark }
        //     : { color: theme.palette.text.main }
        // }
        // onChange={() => handleChange(name)}
        label={name}
        control={<StyledCheckbox />}
      />
      <ListItemText
        primary='(33)'
        // sx={
        //   isChecked
        //     ? { color: theme.palette.primary.dark }
        //     : { color: theme.palette.text.main }
        // }
      />
    </ListItem>
  );
};

FilterItem.propTypes = {
  name: PropTypes.string.isRequired,
//   checkedItem: PropTypes.node,
//   onChange: PropTypes.func.isRequired,
};

// FilterItem.defaultProps = {
//   checkedItem: null,
// };

export default FilterItem;
