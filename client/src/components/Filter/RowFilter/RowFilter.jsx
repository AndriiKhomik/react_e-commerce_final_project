import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import theme from '../../../services/theme/theme';
import FilterSortList from '../FilterSortList';
import FilterSortInput from '../FilterSortInput';
import ClearFilterBtn from '../ClearFilterBtn';
import {
  StyledBox,
  StyledFilterListIcon,
  StyledFilterBtnBox,
  StyledSortingBox,
  StyledClearFilterIcon,
  StyledButton,
} from './Styles';
import useQuery from '../../../services/hooks/useQuery';
import { clearFilterValues } from '../../../store/filter/actions';

const RowFilter = ({ onClick }) => {
  const history = useHistory();
  const filterQuery = useQuery();
  const { search } = useLocation();
  const mediumScreen = useMediaQuery(theme.breakpoints.up('dm'));
  const dispatch = useDispatch();
  const clearFilterHandler = () => {
    const currentSort = filterQuery.get('sort');
    history.push(`?startPage=1&sort=${currentSort}`);
    dispatch(clearFilterValues());
  };
  const isClearFilterBtnVisible =
    search !== '?startPage=1&sort=1' && search !== '?startPage=1&sort=-1';

  return (
    <StyledBox>
      <StyledFilterBtnBox>
        <StyledButton
          onClick={onClick}
          type='submit'
          variant='contained'
          aria-label='Show filter'
        >
          <StyledFilterListIcon />
          {mediumScreen ? 'Show filter' : ''}
        </StyledButton>
        {isClearFilterBtnVisible && (
          <ClearFilterBtn
            text={mediumScreen ? 'Clear filter' : ''}
            onClick={clearFilterHandler}
            svg={<StyledClearFilterIcon />}
          />
        )}
      </StyledFilterBtnBox>
      <StyledSortingBox>
        <FilterSortList />
        <FilterSortInput />
      </StyledSortingBox>
    </StyledBox>
  );
};

RowFilter.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default RowFilter;
