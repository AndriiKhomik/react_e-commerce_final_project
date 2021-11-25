import React from 'react';
import { StyledDivider } from './Styles';
import SearchInput from '../SearchInput';
import FilterSubtitle from '../FilterSubtitle';
import FilterList from '../FilterList/FilterList';
import FilterRange from '../FilterRange';
import FilterBtn from '../FilterBtn';
import { genres } from './filterGenresValues';
import { formats } from './filterFormatsValues';

const Filter = () => {
  return (
    <>
      <SearchInput />
      <FilterSubtitle text='Genres' />
      <FilterList items={genres} />
      <StyledDivider />
      <FilterSubtitle text='Format' />
      <FilterList items={formats} />
      <StyledDivider />
      <FilterSubtitle text='Price Range' />
      <FilterRange />
      <FilterBtn />
    </>
  );
};
export default Filter;
