import React from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import SearchInput from '../SearchInput';
import FilterSubtitle from '../FilterSubtitle';
import FilterRange from '../FilterRange';
import FilterBtn from '../FilterBtn';

const Filter = () => {
  return (
    <>
      <SearchInput />
      <FilterSubtitle text='Genres' />
      <List>
        <ListItem>
          <FormControlLabel
            label='test'
            labelPlacement='end'
            control={<Checkbox />}
          />
          <ListItemText primary='(33)' />
        </ListItem>
      </List>
      <Divider />
      <FilterSubtitle text='Format' />
      <List>
        <ListItem>
          <FormControlLabel
            label='test1'
            labelPlacement='end'
            control={<Checkbox />}
          />
          <ListItemText primary='(33)' />
        </ListItem>
      </List>
      <Divider />
      <FilterSubtitle text='Price Range' />
      <FilterRange />
      <FilterBtn />
    </>
  );
};
export default Filter;
