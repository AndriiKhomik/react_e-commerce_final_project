import React from 'react';
import OrderDetails from '../OrderDetails';
import { StyledBoxContainer, StyledTitle } from './Styled';

const CartTotals = () => {
  return (
    <StyledBoxContainer>
      <StyledTitle as='h4'>Cart Totals</StyledTitle>
      <OrderDetails />
    </StyledBoxContainer>
  );
};

export default CartTotals;
