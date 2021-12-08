import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { clearFilter } from '../../../store/filter/actions';
import { StyledDivider } from './Styles';
import SearchInput from '../SearchInput';
import FilterSubtitle from '../FilterSubtitle';
import FilterList from '../FilterList';
import FilterRange from '../FilterRange';
import FilterBtn from '../FilterBtn';
import { genres } from './filterGenresValues';
import { formats } from './filterFormatsValues';
import { makeQueryString } from './makeQueryString';

const HiddenFilter = ({ onClick }) => {
  const filtersValues = useSelector((data) => data.filter);
  const dispatch = useDispatch();

  const applyFilter = () => {
    // query string
    onClick();
    console.log(makeQueryString(filtersValues));
    dispatch(clearFilter());
  };

  return (
    <>
      <SearchInput />
      <FilterSubtitle text='Genres' />
      <FilterList groupTitle='genres' items={genres} />
      <StyledDivider />
      <FilterSubtitle text='Price Range' />
      <FilterRange />
      <StyledDivider />
      <FilterSubtitle text='Format' />
      <FilterList groupTitle='formats' items={formats} />
      <FilterBtn text='Filter' onClick={applyFilter} />
    </>
  );
};

HiddenFilter.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default HiddenFilter;
