import React from 'react';
import CartIcon from '../../icons/CartIcon';
import { StyledCartButton } from './Styles';

const CartBtn = () => {
  const onCartClick = () => {};
  return (
    <StyledCartButton onClick={onCartClick}>
      <CartIcon width='16px' height='17px' fill='#ffffff' />
    </StyledCartButton>
  );
};

export default CartBtn;
