import React from 'react';
import { Grid, Paper } from '@mui/material';
import SectionTitles from '../../components/SectionTitles';
import OrderForm from '../../components/OrderForm/OrderForm';
import CheckoutEditBtn from '../../components/CheckoutEditBtn';
import { RecommendedBooksList } from '../../components/ProductsList';
import { pageTitles } from '../../components/SectionTitles/pageTitles';
import {
  StyledGrid,
  StyledDownGrid,
  StyledFormGrid,
  StyledBtnGrid,
} from './Styled';

const CheckoutPage = () => {
  return (
    <>
      <SectionTitles titles={pageTitles} />
      <StyledGrid container spacing={{ md: 5 }}>
        <StyledFormGrid item xs={12} md={7}>
          <OrderForm />
        </StyledFormGrid>
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
