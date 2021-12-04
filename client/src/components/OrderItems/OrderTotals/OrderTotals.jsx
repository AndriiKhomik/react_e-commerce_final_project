import React from 'react';
import PropTypes from 'prop-types';
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
  return (
    <>
      <StyledOutBox>
        <StyledSubtitleSpan>Cart Totals</StyledSubtitleSpan>
      </StyledOutBox>
      <StyledBox>
        <span>Subtotal</span>
        <StyledSpan>$48.00</StyledSpan>
      </StyledBox>
      <StyledBox>
        <span>Coupon Discount</span>
        <span>(-) 00.00</span>
      </StyledBox>
      <StyledBox>
        <span>Shipping</span>
        <StyledSpan>$16.00</StyledSpan>
      </StyledBox>
      <StyledDivider />
      <StyledBox>
        <StyledSubtitleSpan>Total</StyledSubtitleSpan>
        <StyledYellowSpan>$64.00</StyledYellowSpan>
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
