import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { StyledDivider } from './Styles';
import SearchInput from '../SearchInput';
import FilterSubtitle from '../FilterSubtitle';
import FilterList from '../FilterList';
import FilterRange from '../FilterRange';
import FilterBtn from '../FilterBtn';
import FilterAuthorsInput from '../FilterAuthorsInput';
import { genres } from './filterGenresValues';
import { formats } from './filterFormatsValues';
import { makeQueryString } from './makeQueryString';
import useQuery from '../../../services/hooks/useQuery';

const HiddenFilter = ({ onClick }) => {
  const filtersValues = useSelector((data) => data.filter);
  const history = useHistory();
  const query = useQuery();

  const applyFilter = () => {
    onClick();
    const filterQuery = makeQueryString(filtersValues);
    history.push(`?${filterQuery}&startPage=1&sort=${query.get('sort')}`);
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
      <FilterAuthorsInput />
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