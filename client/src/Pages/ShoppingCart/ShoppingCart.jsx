import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from '@mui/material';
import CartTotals from '../../components/Cart/CartTotals/CartTotals';
import Products from '../../components/Cart/Products';
import { StyledBox } from './Styled';

const ShoppingCart = () => {
  const location = useLocation();

  return (
    <Container maxWidth='lg'>
      <span>{location.pathname}</span>
      <StyledBox>
        <Products />
        <CartTotals />
      </StyledBox>
    </Container>
  );
};

export default ShoppingCart;
