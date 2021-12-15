import React from 'react';
import PropTypes from 'prop-types';
import CartIcon from '../../icons/CartIcon';
import { StyledCartButton } from './Styles';

const CartBtn = ({ onAddedToCart, isAvailable }) => {
  return (
    <StyledCartButton onClick={onAddedToCart} disabled={isAvailable}>
      <CartIcon
        width='16px'
        height='17px'
        fill={isAvailable ? '#A5A5A5' : '#ffffff'}
      />
    </StyledCartButton>
  );
};

CartBtn.propTypes = {
  onAddedToCart: PropTypes.func.isRequired,
  isAvailable: PropTypes.bool.isRequired,
};

export default CartBtn;
