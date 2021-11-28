import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { FilterHeader } from './Styles';

const CloseFilterBtn = ({ onClick }) => {
  return (
    <FilterHeader>
      <IconButton
        onClick={onClick}
        title='Close filter'
        aria-label='Close filter'
      >
        <ChevronLeftIcon />
      </IconButton>
    </FilterHeader>
  );
};

CloseFilterBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default CloseFilterBtn;
