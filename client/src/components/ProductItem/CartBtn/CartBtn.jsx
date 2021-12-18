import React from 'react';
import PropTypes from 'prop-types';
import CartIcon from '../../icons/CartIcon';
import { StyledCartButton } from './Styles';

const CartBtn = ({ onAddedToCart, isAvailable, showOpacity }) => {
  return (
    <StyledCartButton
      onClick={onAddedToCart}
      disabled={isAvailable}
      sx={{ opacity: `${showOpacity}` }}
    >
      <CartIcon width='16px' height='17px' fill='#ffffff' />
    </StyledCartButton>
  );
};

CartBtn.propTypes = {
  onAddedToCart: PropTypes.func.isRequired,
  isAvailable: PropTypes.bool.isRequired,
  showOpacity: PropTypes.string.isRequired,
};

export default CartBtn;
