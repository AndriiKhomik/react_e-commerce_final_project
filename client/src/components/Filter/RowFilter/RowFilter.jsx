import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from '@mui/material';
import theme from '../../../services/theme/theme';
import FilterBtn from '../FilterBtn';
import FilterSortList from '../FilterSortList';
import FilterSortInput from '../FilterSortInput';
import {
  StyledBox,
  StyledFilterListIcon,
  StyledSortingBox,
  StyledFilterBtnBox,
} from './Styles';

const RowFilter = ({ onClick }) => {
  const mediumScreen = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <StyledBox>
      <StyledFilterBtnBox>
        <FilterBtn
          text={mediumScreen ? 'Show filter' : ''}
          onClick={onClick}
          svg={<StyledFilterListIcon />}
        />
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
