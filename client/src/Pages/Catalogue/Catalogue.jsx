import React from 'react';
import { Grid } from '@mui/material';
import Filter from '../../components/Filter/Filter';
import { RecommendedBooksList } from '../../components/ProductsList';
import { StyledGrid, StyledFilterGrid } from './Styles';

const Catalogue = () => {
  return (
    <>
      <StyledGrid container>
        <StyledFilterGrid item md={3}>
          <Filter />
        </StyledFilterGrid>
        <Grid item md={9}>
          <div>Catalogue</div>
        </Grid>
      </StyledGrid>
      <RecommendedBooksList />
    </>
  );
};

export default Catalogue;
