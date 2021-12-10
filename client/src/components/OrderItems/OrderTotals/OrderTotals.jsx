import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import CheckoutEditBtn from '../CheckoutEditBtn';
import FormButton from '../OrderForm/FormButton';
import {
  StyledDivider,
  StyledSpan,
  StyledOutBox,
  StyledBtnBox,
} from './Styles';
import { StyledBox, StyledSubtitleSpan, StyledYellowSpan } from '../Styles';

const OrderTotals = ({ isSubmiting, submitForm }) => {
  const cartItems = useSelector((data) => data.shoppingCart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let total = 0;
    cartItems.map((item) => {
      total += item.price * item.quantity;
      return setTotalAmount(() => total);
    });
  }, [cartItems]);

  const shipping = (totalAmount * 0.02).toFixed(2);
  const orderTotalWithShipping =
    +totalAmount + +(totalAmount * 0.02).toFixed(2);

  return (
    <>
      <StyledOutBox>
        <StyledSubtitleSpan>Cart Totals</StyledSubtitleSpan>
      </StyledOutBox>
      <StyledBox>
        <span>Subtotal</span>
        <StyledSpan>${totalAmount}</StyledSpan>
      </StyledBox>
      <StyledBox>
        <span>Coupon Discount</span>
        <span>(-) 00.00</span>
      </StyledBox>
      <StyledBox>
        <span>Shipping</span>
        <StyledSpan>${shipping}</StyledSpan>
      </StyledBox>
      <StyledDivider />
      <StyledBox>
        <StyledSubtitleSpan>Total</StyledSubtitleSpan>
        <StyledYellowSpan>${orderTotalWithShipping}</StyledYellowSpan>
      </StyledBox>
      <StyledBtnBox>
        <FormButton
          text='Place order'
          isSubmiting={isSubmiting}
          submitForm={submitForm}
        />
        <CheckoutEditBtn />
      </StyledBtnBox>
    </>
  );
};

OrderTotals.propTypes = {
  isSubmiting: PropTypes.bool,
  submitForm: PropTypes.func,
};

OrderTotals.defaultProps = {
  isSubmiting: false,
  submitForm: () => {},
};
export default OrderTotals;
