import React from 'react';
import { Box } from '@mui/material';
import {
  StyledBox,
  StyledButton,
  StyledContinueButton,
  StyledSpan,
} from './Styled';

const OrderDetails = () => {
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
      <StyledButton type='submit'>Proceed To Checkout</StyledButton>
      <StyledContinueButton>Continue Shopping</StyledContinueButton>
    </>
  );
};

export default OrderDetails;
