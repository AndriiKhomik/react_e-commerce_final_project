import { Box } from '@mui/material';
import React from 'react';
import OrderDetails from '../OrderDetails';
import {
  StyledBoxContainer,
  StyledButton,
  StyledParagraph,
  StyledTextField,
  StyledTitle,
} from './Styled';

const CartTotals = () => {
  return (
    <StyledBoxContainer>
      <StyledTitle as='h4'>Cart Totals</StyledTitle>
      <StyledParagraph as='p'>Coupon Apply</StyledParagraph>
      <Box sx={{ display: 'flex', marginBottom: '30px' }}>
        <StyledTextField
          id='outlined-basic'
          variant='outlined'
          size='small'
          placeholder='Enter coupon code here...'
        />
        <StyledButton type='submit'>Apply</StyledButton>
      </Box>
      <OrderDetails />
    </StyledBoxContainer>
  );
};

export default CartTotals;
