import React from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import CartTotals from '../../components/Cart/CartTotals/CartTotals';
import CartProducts from '../../components/Cart/CartProducts';
import { SalesBooksList } from '../../components/ProductsList';
import { checkoutPageTitles } from './CheckoutpageTitles';
import SectionTitles from '../../components/SectionTitles/SectionTitles';
import { StyledBox, StyledTableTitle } from './Styled';

const ShoppingCart = () => {
  const orders = useSelector((data) => data.shoppingCart);

  return (
    <>
      <SectionTitles titles={checkoutPageTitles} />
      <StyledBox>
        {orders.length ? (
          <CartProducts />
        ) : (
          <Box sx={{ position: 'relative' }}>
            <StyledTableTitle colSpan={5}>
              Your shopping cart is empty
            </StyledTableTitle>
          </Box>
        )}
        <CartTotals />
      </StyledBox>
      <SalesBooksList />
    </>
  );
};
export default ShoppingCart;
