import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import CartIcon from '../../icons/CartIcon';
import { StyledCartButton } from './Styles';
import { bookAddedToCart } from '../../../store/cart/actions';

const CartBtn = ({ itemNo }) => {
  const dispatch = useDispatch();

  const onAddedToCart = () => {
    dispatch(bookAddedToCart(itemNo));
  };

  return (
    <StyledCartButton onClick={onAddedToCart}>
      <CartIcon width='16px' height='17px' fill='#ffffff' />
    </StyledCartButton>
  );
};

CartBtn.propTypes = {
  itemNo: PropTypes.string.isRequired,
};

export default CartBtn;
