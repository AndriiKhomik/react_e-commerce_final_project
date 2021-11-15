import React from 'react';
import { CardActions } from '@mui/material';
import CartIcon from '../../icons/CartIcon';
import { StyledCartButton } from './Styles';

const CartBtn = () => {
  const onCartClick = () => {};
  return (
    <CardActions>
      <StyledCartButton onClick={onCartClick}>
        <CartIcon width='16px' height='17px' fill='#ffffff' />
      </StyledCartButton>
    </CardActions>
  );
};

export default CartBtn;
