import { Box, TextField } from '@mui/material';
import React from 'react';
import {
  StyledBox,
  StyledBoxContainer,
  StyledButton,
  StyledParagraph,
  StyledTitle,
} from './Styled';

const CartTotals = () => {
  return (
    <StyledBoxContainer>
      <StyledTitle as='h4'>Cart Totals</StyledTitle>
      <StyledParagraph as='p'>Coupon Apply</StyledParagraph>
      <Box sx={{ display: 'flex', marginBottom: '30px' }}>
        <TextField
          id='outlined-basic'
          variant='outlined'
          size='small'
          placeholder='Enter coupon code here...'
        />
        <StyledButton type='submit'>Apply</StyledButton>
      </Box>
      <StyledBox>
        <Box>Subtotal</Box>
        <Box>$2,683.00</Box>
      </StyledBox>
      <StyledBox>
        <Box>Shipping</Box>
        <Box>$16.00</Box>
      </StyledBox>
      <Box as='span'>View shipping charge</Box>
      <StyledBox>
        <Box>Total</Box>
        <Box>$2,699.00</Box>
      </StyledBox>
    </StyledBoxContainer>
  );
};

export default CartTotals;
