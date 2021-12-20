import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from '@mui/material';
import theme from '../../../services/theme/theme';
import FilterBtn from '../FilterBtn';
import { StyledBox, StyledFilterListIcon, StyledFilterBtnBox } from './Styles';

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
    </StyledBox>
  );
};

RowFilter.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default RowFilter;
