import React from 'react';
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

const RowFilter = ({ onClick }) => {
  const history = useHistory();
  const { search } = useLocation();
  const mediumScreen = useMediaQuery(theme.breakpoints.up('dm'));

  const clearFilterHandler = () => {
    history.push('?startPage=1&sort=1');
  };

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
        {search !== '?startPage=1&sort=1' && (
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
