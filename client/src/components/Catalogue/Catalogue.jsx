import React, { useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import Filter from '../Filter/Filter';
import CloseFilterBtn from '../Filter/CloseFilterBtn';
import FilterBtn from '../Filter/FilterBtn';
import {
  StyledFilterContainer,
  StyledBox,
  StyledFilterListIcon,
} from './Styles';
import theme from '../../services/theme/theme';

const Catalogue = () => {
  const [open, setOpen] = useState(false);

  const handleFilterOpen = () => {
    setOpen(true);
  };

  const handleFilterClose = () => {
    setOpen(false);
  };

  const mediumScreen = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <>
      <StyledBox>
        <FilterBtn
          text={mediumScreen ? 'Show filter' : ''}
          onClick={handleFilterOpen}
          svg={<StyledFilterListIcon />}
        />
      </StyledBox>
      <StyledFilterContainer variant='persistent' anchor='left' open={open}>
        <CloseFilterBtn onClick={handleFilterClose} />
        <Filter />
      </StyledFilterContainer>
      <Box>Catalogue list is here :)</Box>
    </>
  );
};

export default Catalogue;
