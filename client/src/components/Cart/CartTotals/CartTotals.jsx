import { Box, Button, TextField } from '@mui/material';
// import { Box } from '@mui/system';
import React from 'react';

const CartTotals = () => {
  return (
    <Box>
      <h1>Cart Totals</h1>
      <p>Coupon Apply</p>
      <TextField id='outlined-basic' variant='outlined' size='small' />
      <Button type='submit'>Apply</Button>
    </Box>
  );
};

export default CartTotals;
