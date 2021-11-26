import React from 'react';
import { Grid } from '@mui/material';
// import Filter from '../../components/Filter/Filter';
import CatalogList from '../../components/CatalogList/CatalogList';
import { StyledGrid, StyledFilterGrid } from './Styles';

const Catalogue = () => {
  return (
    <>
      <StyledGrid container>
        <StyledFilterGrid item md={3} sm={3}>
          {/* <Filter /> */}
          <div> я временный фильтр 🤗</div>
        </StyledFilterGrid>
        <Grid item md={9} sm={9} xs={12}>
          <CatalogList />
        </Grid>
      </StyledGrid>
    </>
  );
};

export default Catalogue;
