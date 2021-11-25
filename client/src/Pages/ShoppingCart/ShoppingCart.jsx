import React from 'react';
import CartTotals from '../../components/Cart/CartTotals/CartTotals';
import Products from '../../components/Cart/Products';
import { RelatedBooksList } from '../../components/ProductsList';

import { StyledBox } from './Styled';

const ShoppingCart = () => {
  return (
    <>
      <StyledBox>
        <Products />
        <CartTotals />
      </StyledBox>
      <RelatedBooksList />
    </>
  );
};

export default ShoppingCart;
