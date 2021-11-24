import React from 'react';
import { Grid, Paper } from '@mui/material';
import CheckoutBreadCrumbs from '../../components/CheckoutBreadCrumbs';
import OrderForm from '../../components/OrderForm/OrderForm';
import CheckoutEditBtn from '../../components/CheckoutEditBtn';
import { RecommendedBooksList } from '../../components/ProductsList';
import { StyledGrid, StyledDownGrid, StyledBtnGrid } from './Styled';

const CheckoutPage = () => {
  return (
    <>
      <CheckoutBreadCrumbs />
      <StyledGrid container spacing={{ md: 5 }}>
        <Grid item xs={12} md={7}>
          <OrderForm />
        </Grid>
        <Grid item xs={12} md={5}>
          <div>Your order</div>
        </Grid>
        <StyledDownGrid container>
          <Grid item xs={0} md={7}>
            <Paper />
          </Grid>
          <StyledBtnGrid item xs={12} md={5}>
            <CheckoutEditBtn />
          </StyledBtnGrid>
        </StyledDownGrid>
      </StyledGrid>
      <RecommendedBooksList />
    </>
  );
};

export default CheckoutPage;
