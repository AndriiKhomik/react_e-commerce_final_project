import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@mui/material';
import {
  StyledBox,
  StyledButton,
  StyledContinueButton,
  StyledSpan,
} from './Styled';

const OrderDetails = () => {
  const toOrderForm = useHistory();
  const toStore = useHistory();
  const cartItems = useSelector((data) => data.shoppingCart);
  const [totalAmount, setTotalAmount] = useState(0);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    let total = 0;
    cartItems.map((item) => {
      total += item.price * item.cartQuantity;
      return setTotalAmount(() => total);
    });
  }, [cartItems]);

  const handleOrderProceed = () => {
    toOrderForm.push('/checkout');
  };

  const handleContinueShopping = () => {
    toStore.push('/products?startPage=1&sort=1');
  };

  const orderTotal = (totalAmount * 0.02).toFixed(2);
  const orderTotalWithShipping =
    +totalAmount + +(totalAmount * 0.02).toFixed(2);

  return (
    <>
      <StyledBox>
        <Box>Subtotal</Box>
        <Box sx={{ fontWeight: 'bold' }}>
          $ {cartItems.length ? totalAmount : 0}
        </Box>
      </StyledBox>
      <StyledBox>
        <Box>Shipping</Box>
        <Box>${cartItems.length ? orderTotal : 0}</Box>
      </StyledBox>
      <StyledSpan as='span' onClick={handleClickOpen}>
        View shipping charge
      </StyledSpan>
      <StyledBox sx={{ marginTop: '16px' }}>
        <Box sx={{ fontWeight: 'bold' }}>Total</Box>
        <Box as='span'>${cartItems.length ? orderTotalWithShipping : 0}</Box>
      </StyledBox>
      <StyledButton
        type='submit'
        disabled={Boolean(!totalAmount) || !cartItems.length}
        onClick={handleOrderProceed}
      >
        Proceed To Checkout
      </StyledButton>
      <StyledContinueButton onClick={handleContinueShopping}>
        Continue Shopping
      </StyledContinueButton>

      <Dialog open={open} onClose={handleClose}>
        <DialogContent sx={{ background: '#fff' }}>
          <DialogContentText>
            Shipping charge is 2% from order amount
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ background: '#fff' }}>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default OrderDetails;
