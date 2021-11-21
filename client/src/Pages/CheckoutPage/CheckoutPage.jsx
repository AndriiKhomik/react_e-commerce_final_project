import React from 'react';
import { Grid } from '@mui/material';
import CheckoutBreadCrumbs from '../../components/CheckoutBreadCrumbs';
import OrderForm from '../../components/OrderForm';
import { RecommendedBooksList } from '../../components/ProductsList';

const CheckoutPage = () => {
  return (
    <>
      <CheckoutBreadCrumbs />
      <Grid container spacing={{ md: 5 }}>
        <Grid item xs={12} md={7}>
          <OrderForm />
        </Grid>
        <Grid item xs={12} md={5}>
          <div>Test</div>
        </Grid>
      </Grid>
      <RecommendedBooksList />
    </>
  );
};

export default CheckoutPage;
