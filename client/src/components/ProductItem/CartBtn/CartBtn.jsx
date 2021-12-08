import React from 'react';
import PropTypes from 'prop-types';
import CartIcon from '../../icons/CartIcon';
import { StyledCartButton } from './Styles';

const CartBtn = ({ onAddedToCart }) => {
  return (
    <StyledCartButton onClick={onAddedToCart}>
      <CartIcon width='16px' height='17px' fill='#ffffff' />
    </StyledCartButton>
  );
};

CartBtn.propTypes = {
  onAddedToCart: PropTypes.func.isRequired,
};

export default CartBtn;
