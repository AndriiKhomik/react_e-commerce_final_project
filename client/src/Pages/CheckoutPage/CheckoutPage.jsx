import React, { useState } from 'react';
import { Grid } from '@mui/material';
import SectionTitles from '../../components/SectionTitles';
import OrderForm from '../../components/OrderItems/OrderForm/OrderForm';
import OrderProducts from '../../components/OrderItems/OrderProducts';
import OrderTotals from '../../components/OrderItems/OrderTotals';
import { RecommendedBooksList } from '../../components/ProductsList';
import { pageTitles } from '../../components/SectionTitles/pageTitles';
import { StyledGrid, StyledFormGrid, StyledOrderTotalsGrid } from './Styled';

const CheckoutPage = () => {
  const [formRef, setFormRef] = useState();
  const bindSubmitForm = (formRefValue) => {
    setFormRef(formRefValue);
  };

  return (
    <>
      <SectionTitles titles={pageTitles} />
      <StyledGrid container spacing={{ md: 5 }}>
        <StyledFormGrid item xs={12} md={7}>
          <OrderForm bindSubmitForm={bindSubmitForm} />
        </StyledFormGrid>
        <Grid item xs={12} md={5}>
          <Grid container spacing={{ sm: 4 }}>
            <Grid item xs={12} sm={7} md={12}>
              <OrderProducts />
            </Grid>
            <StyledOrderTotalsGrid item xs={12} sm={5} md={12}>
              <OrderTotals
                isSubmiting={formRef?.isSubmitting}
                submitForm={formRef?.submitForm}
              />
            </StyledOrderTotalsGrid>
          </Grid>
        </Grid>
      </StyledGrid>
      <RecommendedBooksList />
    </>
  );
};

export default CheckoutPage;
