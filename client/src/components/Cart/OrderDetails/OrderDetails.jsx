import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box } from '@mui/material';
import {
  StyledBox,
  StyledButton,
  StyledContinueButton,
  StyledSpan,
} from './Styled';

const OrderDetails = () => {
  const toOrderForm = useHistory();
  const toStore = useHistory();

  const handleOrderProceed = () => {
    toOrderForm.push('/checkout');
  };

  const handleContinueShopping = () => {
    toStore.push('/products');
  };

  return (
    <>
      <StyledBox>
        <Box>Subtotal</Box>
        <Box sx={{ fontWeight: 'bold' }}>$2,683.00</Box>
      </StyledBox>
      <StyledBox>
        <Box>Shipping</Box>
        <Box>$16.00</Box>
      </StyledBox>
      <StyledSpan as='span'>View shipping charge</StyledSpan>
      <StyledBox sx={{ marginTop: '16px' }}>
        <Box sx={{ fontWeight: 'bold' }}>Total</Box>
        <Box as='span'>$2,699.00</Box>
      </StyledBox>
      <StyledButton type='submit' onClick={handleOrderProceed}>
        Proceed To Checkout
      </StyledButton>
      <StyledContinueButton onClick={handleContinueShopping}>
        Continue Shopping
      </StyledContinueButton>
    </>
  );
};

export default OrderDetails;
