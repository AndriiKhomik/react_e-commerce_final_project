import React from 'react';
import CartTotals from '../../components/Cart/CartTotals/CartTotals';
import CartProducts from '../../components/Cart/CartProducts';
import { SalesBooksList } from '../../components/ProductsList';
import { checkoutPageTitles } from './CheckoutpageTitles';
import SectionTitles from '../../components/SectionTitles/SectionTitles';

import { StyledBox } from './Styled';

const ShoppingCart = () => {
  return (
    <>
      <SectionTitles titles={checkoutPageTitles} />
      <StyledBox>
        <CartProducts />
        <CartTotals />
      </StyledBox>
      <SalesBooksList />
    </>
  );
};
export default ShoppingCart;
